import './index.css';
import Card from './Card';
function App() {
  function handleToggle(e) {
    console.log(e.target.checked);
  }

  return (
    <>
      <Card text="Card 112333" />
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default App;
