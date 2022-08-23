import logo from '../logo.svg';
import '../App.css';
import Navbar from "../components/Navbar"
import Carrousel from "../components/Carrousel"
import Card from "../components/Cards"
function VistaPrincipal() {
  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <Card/> 
    </div>
  );
} 

export default VistaPrincipal;
