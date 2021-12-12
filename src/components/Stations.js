import StationCard from "../components/StationCard";

export default function Stations(props) {
  return (
    <main>
      {props.radios.map((radio) => {
        return (
          <StationCard
            key={radio.name}
            title={radio.name}
            image={radio.image.replace(
              "RadioOne",
              radio.name.replace(/\s+/g, "")
            )}
            frequency={radio.frequency}
            playing={radio.playing}
            showControls={radio.showControls}
            clicked={() => props.clicked(radio.name)}
          />
        );
      })}
    </main>
  );
}
