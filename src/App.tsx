import './App.css';
import CalculatorContainer from './components/CalculatorContainer';
import CalculatorContainerProject from './components/CalculatorContainerProject';
import Header from './components/Header';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <InfoBar
        title="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:"
      />

      <CalculatorContainer />

      <InfoBar
        title="Calcule o valor a ser cobrado para um projeto:"
      />

      <CalculatorContainerProject />

      <Footer />
    </>
  );
}

export default App;
