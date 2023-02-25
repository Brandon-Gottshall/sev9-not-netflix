import logo from './logo.svg';
import './App.css';
import SummaryModal from './Components/Modal';
import HeroImage from './Components/hero';

function App() {
  return (
    <div className="main-container">
      <div className='hero-image'>
        <HeroImage/>
        <SummaryModal/>
      </div>
        <SummaryModal id={12}/>
        <SummaryModal id={866413}/>
    </div>
  );
}

export default App;
