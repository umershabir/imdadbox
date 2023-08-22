import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Gallery from "./Components/Gallery";
import Description from "./Components/Description";
import MobileGallery from "./Components/MobileGallery";
import { PiFirstAidFill } from "react-icons/pi";
import BoxItems from "./Components/BoxItems";

// import { LocalHospitalIcon } from "@mui/icons-material/LocalHospital";
function App() {
  return (
    <main className="App">
      <h1>
        <PiFirstAidFill style={{ color: "#36846b" }} />
      </h1>
      <Container component="section" maxWidth={"lg"}>
        <section className="core">
          <Gallery />
          <MobileGallery />
          <Description />
        </section>
        <BoxItems />
      </Container>
    </main>
  );
}

export default App;
