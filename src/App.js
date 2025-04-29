import logo from './logo.svg';
import './App.scss';
import { CustomCard } from './components/Cards/CustomCard';
import CustomNavbar from './components/Navbar/Navbar';


function App() {

  const handleSelectSection = () => {
   
  };

  return (
    <div className="App">
       <CustomNavbar onSelectSection={handleSelectSection} />
      <CustomCard/>
    </div>
  );
}

export default App;
