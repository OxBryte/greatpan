
import './App.css';
import About from './components/about';
import Banner from './components/banner';
import Faqs from './components/faqs';
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
    </div>
  );
}

export default App;
