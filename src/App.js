
import './App.css';
import Aboutus from './components/AboutUs/Aboutus';
import Chef from './components/Chef/Chef';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Specialmenu from './components/SpecialMenu/Specialmenu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />  
      <Aboutus />
      <Specialmenu />
      <Chef />
      <Gallery />
    </div>
  );
}

export default App;
