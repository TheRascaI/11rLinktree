import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import "./App.css";

import logo from "./logo.svg";
import bg from "./bg11r.svg";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <Container maxWidth="sm" className='main'>
    <Container maxWidth="sm" className='header'>
    <img className="bg-img" src={bg} alt="background" /> 
    <img className="logo-img" src={logo} alt="logo" /> 
    </Container>
    <Container maxWidth="sm" className="buttons">
    <Button href="https://www.mixcloud.com/lennye31/" variant="contained" fullWidth="true" color="primary">
      Mixcloud
    </Button>
    <Button href="https://soundcloud.com/dj11r-422926436" variant="contained" fullWidth="true" color="primary">
      Soundcloud
    </Button>
    <Button href="https://www.instagram.com/dj.11r/" variant="contained" fullWidth="true" color="primary">
    Instagram
    </Button>
    <Button href="https://shop.spreadshirt.de/headless/dj11.r?collection=ZjoHGvruhO" variant="contained" fullWidth="true" color="primary">
      Merch
    </Button>
    </Container>
  
    </Container>
 
  );
}

export default App;