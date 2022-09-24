import './styles/App.css';
import Header from './components/header';
import Intro from './components/intro';
import Background from './assets/images/interface/background-3.jpg'; 

function App() {
  return (
    <div className='App'>
      <img className='header-image' src={Background} alt=''/>
      <div className='container'>
        <div className='header-group'>
          <Header/>
          <Intro/>
        </div>
      </div>
    </div>
  );
}

export default App;
