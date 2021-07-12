import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Carousel from './Carousel.js';
import Card from './Cards.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Content from './Content.js'
function App() {
  return (

    <div className="App">
    <Navbar />
    <Carousel />
    <Card />
    <Content />
    <Footer />
    </div>

  );
}

export default App;
