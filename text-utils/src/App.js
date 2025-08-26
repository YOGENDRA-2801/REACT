import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar' ;
import TextForm from './Components/TextForm';
import React , {useState} from 'react'

function App() {

  const [theme, setTheme] = useState("light") ;
  const chngTheme = () =>{
    if (theme === "light") {
      setTheme("dark") ;
      document.body.style.backgroundColor = "grey" ;
    } else {
      setTheme("light") ;
      document.body.style.backgroundColor = "white" ;
    }
  }

  return (
    <>
      {/* <Navbar title={32} /> */}
      <Navbar title="Text Utils" about="About Us" landing="Home" mode={theme} toggleMode={chngTheme} />
      {/* <Navbar about="About US"> </Navbar> -- VALID  */}
      {/* <Navbar> about="About US" </Navbar> -- INVALID */}

      <div className="container my-3"> 
        {/* container -- predefined class in bootstrap , my-3 : y-axis m 3 ka margin set krta hai [example 2 line k bich m margin] */}
        <TextForm heading="Enter the text below to anlyze" mode={theme} toggleMode={chngTheme}/>
      </div>

      {/* <About></About> */}
    </>
  );
}

export default App;