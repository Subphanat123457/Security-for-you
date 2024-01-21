
import Navbar from './components/Navbar';
import CardContentsNetwork from './components/CardContentsNetwork';
import CardContentsCyberAttack from './components/CardContentsCyberAttack';
import CardContentsProtectAttack from './components/CardContentsProtectAttack';
import MyFooter from './components/MyFooter';


const App = () => {
  return (
      <div className="App">
        <Navbar />
        <div id="network">
          <CardContentsNetwork />
        </div>
        <div id="cyber-attack">
        <CardContentsCyberAttack />
        </div>
        <div id="protect-attack">
        <CardContentsProtectAttack />
        </div>
        <MyFooter />
      </div>
  );
};

export default App;
