export default function Navbar(props) {
  return (
    <footer className="Footer">
      <p className="Footer-title">currently playing</p>
      <p style={{ minHeight: "20px" }}>{props.playing}</p>
    </footer>
  );
}
