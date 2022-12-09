import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Prefooter from './components/Prefooter';
import Footer from './components/Footer';
import FormSteps from './components/Steps/FormSteps';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Prefooter />
      <FormSteps />
      <Footer />
    </div>
  );
}

export default App;
