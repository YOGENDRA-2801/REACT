import './App.css';
import Navbar from './Components/Navbar' ;

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" about="About Us"/>
      {/* <Navbar about="About US"> </Navbar> -- VALID  */}
      {/* <Navbar> about="About US" </Navbar> -- INVALID */}
    </>
  );
}

export default App;
