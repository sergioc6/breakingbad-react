import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top; 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, setFrase] = useState({});

  const consultarApi = async () => {
    const res = await axios.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    setFrase(res.data[0])
  };

  useEffect(() => {
    consultarApi()
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase}></Frase>
      <Boton onClick={consultarApi}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
