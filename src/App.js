import './App.css';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/Qualification/Qualification';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
