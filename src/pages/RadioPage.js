import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stations from "../components/Stations";

export default function RadioPage() {
  const [radios, setRadios] = useState([]);
  const [nowListening, setNowListening] = useState("");

  const getAllRadioStations = () => {
    axios
      .get("https://teclead.de/recruiting/radios")
      .then((res) => {
        setRadios(res.data.radios);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllRadioStations();
  }, []);

  const showControlsHandler = (name) => {
    setNowListening(name);
    let updatedRadios = radios.map((radio) => {
      return { ...radio, showControls: radio.name === name };
    });
    setRadios(updatedRadios);
  };

  return (
    <div className="Radio">
      <Navbar />
      <Stations radios={radios} clicked={(name) => showControlsHandler(name)} />
      <Footer playing={nowListening} />
    </div>
  );
}
