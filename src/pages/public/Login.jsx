import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Card,
  CardContent,
  Typography,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AuthService from "../../services/authService";
import Alert from "@mui/material/Alert";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TrelevaLogo from "./TrelevaLogo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [timer, setTimer] = useState(600);
  const [otpVerified, setOtpVerified] = useState(false);
  const otpInputRefs = useRef(Array(6).fill(null));
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    if (timer > 0 && showOtpScreen) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer, showOtpScreen]);

  useEffect(() => {
    const isAllDigitsFilled = otp.every((digit) => digit !== "");
    if (isAllDigitsFilled) {
      handleLoginSubmit();
    }
  }, [otp]);

  const handleEmailSubmit = async () => {
    try {
      const response = await fetch(
        "https://treleva.org/treleva/login/generateOtp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeEmail: email,
          }),
        }
      );
  
      if (response.ok) {
        setSnackbarOpen(true);
        setShowOtpScreen(true);
        setEmailError(false);
      } else {
        console.error("Failed to generate OTP");
        setEmailError(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleLoginSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/login/verifyOtp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeEmail: email,
            otp: otp.join(""),
          }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        const { token, role } = data.data;

        // Log token and role information
        // console.log("Token:", token);
        // console.log("Role:", role);

        AuthService.login(token);

        console.log("OTP verified successfully");
        setOtpVerified(true);

        navigate("/user");
      } else {
        console.error("Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleResendOtp = async () => {
    try {
      const response = await fetch(
        "https://treleva.org/treleva/login/generateOtp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeEmail: email,
          }),
        }
      );

      if (response.ok) {
        setTimer(600);
        console.log("OTP resent successfully");
      } else {
        console.error("Failed to resend OTP");
      }
    } catch (error) {
      console.error("Error:", error);
      setEmailError(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleOtpInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otpInputRefs.current.length - 1 && value !== "") {
      otpInputRefs.current[index + 1].focus();
    }

    if (index > 0 && value === "") {
      otpInputRefs.current[index - 1].focus();
    }
  };
  useEffect(() => {
    let countdown;
    if (timer > 0 && showOtpScreen) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  
    const isAuthenticated = localStorage.getItem("treleva_token");
  
    if (isAuthenticated) {
      navigate("/user");
    }
  
    return () => clearInterval(countdown);
  }, [timer, showOtpScreen]);
  
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <Card className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <CardContent className="text-center">
          <img
            src={TrelevaLogo}
            alt="Logo"
            className="w-40 md:w-48 h-16 mx-auto mb-4"
          />
          {!showOtpScreen ? (
            <>
              <Typography
                variant="h7"
                component="div"
                className="mb-4 text-gray-800 pb-5"
              >
                Login is only for Employee
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                className="mb-4"
                style={{ marginBottom: "30px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleEmailSubmit}
                className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                Send OTP
              </Button>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <Alert
                  onClose={handleCloseSnackbar}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  OTP sent successfully
                </Alert>
              </Snackbar>
              {emailError && (
                <Snackbar
                  open={emailError}
                  autoHideDuration={6000}
                  onClose={() => setEmailError(false)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <div className="fixed bottom-0 left-0 right-0 flex items-end justify-center p-4">
                    <Alert
                      onClose={() => setEmailError(false)}
                      severity="error"
                      sx={{
                        width: "full",
                        sm: "80%",
                        md: "60%",
                        lg: "40%",
                        xl: "30%",
                      }}
                    >
                      Incorrect email. Please try again.
                    </Alert>
                  </div>
                </Snackbar>
              )}
            </>
          ) : (
            <>
              <Typography
                variant="h7"
                component="div"
                className="mb-4 text-gray-800 pb-2"
              >
                Enter OTP sent to your email
              </Typography>
              <div className="flex justify-center gap-2 pb-5">
                {otp.map((digit, index) => (
                  <TextField
                    key={index}
                    value={digit}
                    onChange={(e) =>
                      handleOtpInputChange(index, e.target.value)
                    }
                    variant="outlined"
                    fullWidth
                    inputRef={(ref) => (otpInputRefs.current[index] = ref)}
                    inputProps={{
                      maxLength: 1,
                      style: {
                        textAlign: "center",
                        fontSize: "1rem",
                        color: "black",
                      },
                    }}
                  />
                ))}
              </div>
              {otp.every((digit) => digit !== "") && (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLoginSubmit}
                  disabled={otpVerified}
                  className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  <CheckCircleOutlineIcon className="mr-2" />
                  Verify OTP & Login
                </Button>
              )}
              <Typography
                variant="body2"
                color="textSecondary"
                className="mt-2 text-gray-600"
              >
                OTP valid for {Math.floor(timer / 60)}:
                {timer % 60 < 10 ? "0" : ""}
                {timer % 60} minutes
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="mt-4 text-gray-600"
              >
                Didn't receive OTP?{" "}
                <a
                  href="#"
                  onClick={handleResendOtp}
                  className="underline text-red-500"
                >
                  Resend OTP
                </a>
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
