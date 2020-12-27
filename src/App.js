import React from "react";
import { Container, } from "react-bootstrap";
import { MagnifierContainer} from "react-image-magnifiers";
import "./app.css";
//
import Record from "./components/Record/record.js";

function App() {
  return (
    <MagnifierContainer className="magnifiercontainer">
      <Container fluid className="app">
          <Record />
      </Container>
    </MagnifierContainer>
  );
}

export default App;
