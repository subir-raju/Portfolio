import './App.css';
import NavComponent from './components/NavComponent';
import Section from './components/Section';
import Footer from './components/Footer';


function App() {
  return (
   <div className="page-container">
    <div className='content-wrap'>
    <NavComponent />

   </div>
    <Footer />
   </div>
  );
}

export default App;
