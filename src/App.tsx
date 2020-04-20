import React from 'react';
import logo from './logo.svg';
import StatelessByType from './components/typescript/StatelessByType';
import StatefullByType from './components/typescript/StatefullByType';
import { StatefullByInterface } from './components/typescript/StatefullByInterface';
import UseStateEffectBasic from './components/hooks/UseStateEffectBasic';
import UseStateEffectWithTSAndFetching from './components/hooks/UseStateEffectWithTSAndFetching';
import UseAbstractStateEffectWithTSAndFetching from './components/hooks/UseAbstractStateEffectWithTSAndFetching';
import UseContextBasic from './components/hooks/UseContextBasic';
import UseRefBasic from './components/hooks/UseRefBasic';
import UseCallbackBasic from './components/hooks/UseCallbackBasic';
import './App.css';

function App() {
  const [visible, toggleVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
      return () => {
          console.log("useEffect in App");
      }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <StatelessByType message={"testa"}/>
        <StatelessByType />
        <StatefullByType message={"testb"}/>
        <StatefullByType />
        <StatefullByInterface value={1} label="testc"/>
        <UseStateEffectBasic />
        <UseStateEffectWithTSAndFetching visible={true} handleCloseModal={() => {}}/>
        <UseAbstractStateEffectWithTSAndFetching visible={visible} toggleVisible={() => toggleVisible(!visible)}/>
        <UseContextBasic />
        <UseRefBasic />
        <UseCallbackBasic />
      </header>
    </div>
  );
}

export default App;
