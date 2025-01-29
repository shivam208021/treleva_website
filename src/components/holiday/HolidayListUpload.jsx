import React, { useState, useCallback } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Input,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  Snackbar,Alert
} from "@mui/material";
import { ImageSharp } from "@mui/icons-material";

const HolidayListUpload = () => {
  const [holidayDocuments, setHolidayDocuments] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const [manualInput, setManualInput] = useState({
    name: "",
    comment: "",
  });

  const handleFileChange = useCallback(
    (files) => {
      const allowedFileTypes = ["pdf", "jpg", "png", "docx"];

      const newDocuments = Array.from(files).map((file) => {
        const fileType = file.type.split("/")[1];

        if (allowedFileTypes.includes(fileType)) {
          return {
            fileType,
            holidayList: file.name,
            calendarFile: new Promise((resolve) => {
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result.split(",")[1]);
                reader.readAsDataURL(file);
              } else {
                resolve("");
              }
            }),
          };
        } else {
          console.warn(`File type '${fileType}' is not allowed.`);
          return null;
        }
      });

      setHolidayDocuments([
        ...holidayDocuments,
        ...newDocuments.filter(Boolean),
      ]);
    },
    [holidayDocuments]
  );

  const handleSaveClick = () => {
    Promise.all(holidayDocuments.map((doc) => doc.calendarFile)).then(
      (base64Array) => {
        const logObject = {
          fileType: holidayDocuments[0].fileType,
          holidayList: holidayDocuments[0].holidayList,
          calendarFile: base64Array.join(""),
        };

        console.log("Document Info:", logObject);

        fetch("https://treleva.org/treleva/calendar/createCalendar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logObject),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Server response:", data);

            setHolidayDocuments([]);
            setManualInput({
              name: "",
              comment: "",
            });

            // Show success Snackbar
            showSnackbar("Document saved successfully", "success");
          })
          .catch((error) => {
            console.error("Error:", error);

            // Show error Snackbar
            showSnackbar("Error saving document", "error");
          });
      }
    );
  };
  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      handleFileChange(files);
    },
    [handleFileChange]
  );

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleManualInputChange = (e) => {
    const { name, value } = e.target;
    setManualInput({
      ...manualInput,
      [name]: value,
    });
  };

  const handleManualUpload = () => {
    if (manualInput.name.trim() !== "") {
      setHolidayDocuments([
        ...holidayDocuments,
        {
          fileType: manualInput.fileType,
          holidayList: manualInput.name,
          calendarFile: null,
          comment: manualInput.comment,
        },
      ]);

      setManualInput({
        name: "",
        comment: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Paper elevation={3} className="p-4 md:w-3/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <Typography variant="h5" align="center" gutterBottom>
          Upload Holiday Documents
        </Typography>

        <div
          style={{
            border:
              holidayDocuments.length > 0
                ? "2px dashed #4CAF50"
                : "2px dashed #aaaaaa",
            borderRadius: "5px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleFileClick}
        >
          <ImageSharp style={{ fontSize: 30, marginBottom: 10 }} />
          <Typography color="textSecondary">
            Drag & Drop
            <br />
            or
            <br />
            Click To Upload
          </Typography>
          <Input
            id="fileInput"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </div>

        <List>
          {holidayDocuments.map((doc, index) => (
            <ListItem key={index}>
              <Card style={{ width: "100%" }}>
                <ListItemText
                  primary={`Type: ${doc.fileType}`}
                  secondary={`Name: ${doc.holidayList}`}
                />
              </Card>
            </ListItem>
          ))}
        </List>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveClick}
            disabled={holidayDocuments.length === 0}
            style={{ marginTop: "20px" }}
          >
            Save
          </Button>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </div>
  );
};

export default HolidayListUpload;
