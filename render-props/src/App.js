import { useEffect, useState } from 'react';
import './App.css';

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("deserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"])
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https:/susies'salad/deserts"
      render={(data) => <p>{data.length} desserts</p> }
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
     url="https:/susies'salad/drinks"
     render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">Susies' Salad S-bar</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;
