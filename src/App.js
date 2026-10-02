import React, { useContext } from 'react';
import './App.css';
import Header from "./Layouts/Header/header";
import Body from "./Layouts/Body/body";
import Footer from './Layouts/Footer/footer';
import FunctionButtons from './Components/FunctionButtons';
import { ThemeContext } from './Store/ThemeContext';

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={ `myPortfolio ${context.theme}` }>
        <FunctionButtons />
        <Header />
        <Body />
        <Footer/>
    </div>
  );
}

export default App;
