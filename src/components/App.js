import Card from "./Card";
import "../styles/App.css";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div>
      <ParticleBackground />
      <div className='App'>
        <Card name={"Original Music Family"} />
        <Card name={"Shaannessy"} />
        <Card name={"Knowbody Knows"} />
      </div>
    </div>
  );
}

export default App;
