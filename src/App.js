
import './App.css';
import About from './components/about';
import Banner from './components/banner';
import Faqs from './components/faqs';
import Footer from './components/footer';
import Roadmap from './components/roadmap';
import Team from './components/team';

function App() {
  return (
    <div className="">
      <Banner />
      <About />
      <Roadmap />
      <Faqs />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
