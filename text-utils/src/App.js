import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar' ;
import TextForm from './Components/TextForm';
import React , {useState} from 'react'

function App() {

  const [theme, setTheme] = useState("light") ;
  const chngTheme = () =>{
    if (theme === "light") {
      setTheme("dark") ;
      document.body.style.backgroundColor = "#457b9d" ;
      showAlert("Dark Mode is Enabled", "success")
    } else {
      setTheme("light") ;
      document.body.style.backgroundColor = "#ccc5b9" ;
      showAlert("Light Mode is Enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (msg , type) => {
    setAlert({message:msg, type:type}) ;
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <Navbar title={32} /> */}
      <Navbar title="Text Utils" about="About Us" landing="Home" mode={theme} toggleMode={chngTheme} />
      {/* <Navbar about="About US"> </Navbar> -- VALID  */}
      {/* <Navbar> about="About US" </Navbar> -- INVALID */}

      {/* <Alert alrtMsg="This is custom alert message"></Alert> */}
      <Alert alrtMsg={alert}/>

      <div className="container my-3"> 
        {/* container -- predefined class in bootstrap , my-3 : y-axis m 3 ka margin set krta hai [example 2 line k bich m margin] */}
        <TextForm heading="Enter the text below to anlyze" mode={theme} toggleMode={chngTheme} displayAlert={showAlert}/>
      </div>

      {/* <About></About> */}
    </>
  );
}

export default App;