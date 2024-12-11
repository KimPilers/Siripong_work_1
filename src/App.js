import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import HomeDetails from './pages/HomeDetails';

function App() {
  return (
    <div className="App">
      <Navbar />

      <HomeDetails />

      <Carousel />
    </div>
  );
}

export default App;
