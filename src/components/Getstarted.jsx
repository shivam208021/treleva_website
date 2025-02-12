import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Getstarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pricing");
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <StyledWrapper>
        <button className="mt-10  maz-w-full" onClick={handleClick}>
          <span className="circle1" />
          <span className="circle2" />
          <span className="circle3" />
          <span className="circle4" />
          <span className="circle5" />
          <span className="text">Start</span>
        </button>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  button {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: white;
    background-color: #171717;
    padding: 1em 2em;
    border: none;
    border-radius: 0.6rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  button span:not(:nth-child(6)) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 30px;
    width: 30px;
    background-color: #0c66ed;
    border-radius: 50%;
    transition: 0.6s ease;
  }

  button span:nth-child(6) {
    position: relative;
  }

  button span:nth-child(1) {
    transform: translate(-3.3em, -4em);
  }

  button span:nth-child(2) {
    transform: translate(-6em, 1.3em);
  }

  button span:nth-child(3) {
    transform: translate(-0.2em, 1.8em);
  }

  button span:nth-child(4) {
    transform: translate(3.5em, 1.4em);
  }

  button span:nth-child(5) {
    transform: translate(3.5em, -3.8em);
  }

  button:hover span:not(:nth-child(6)) {
    transform: translate(-50%, -50%) scale(4);
    transition: 1.5s ease;
  }
`;

export default Getstarted;
