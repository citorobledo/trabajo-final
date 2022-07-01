import { Fragment } from "react";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import { Col, Button } from 'react-bootstrap';



function App() {
  return (
    <Fragment>
      <Header/>
      <div>
        <img alt="imagen aleatoria" src="https://picsum.photos/700/400?random"/> 
        
      </div>
      <Button variant="secondary">Un Boton</Button>
      

      <Footer/>
    </Fragment>
    
  );
}

export default App;
