import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Entry from "./components/Entry"
import data from "./data"

function App() {
  const entries = data.map(item => {
    return (
      <Entry 
        title={item.title}
        location={item.location}
        mapUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        img={item.imageUrl}
      />
    )
  })
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {entries}
    </div>
  );
}

export default App;
