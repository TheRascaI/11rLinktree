import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import "./App.css";
import ReactPlayer from "react-player";

import logo from "./logo.svg";
import bg from "./bg11r.svg";
import DonationButton from "./Donation";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <Container maxWidth="sm" className='main'>
    <Container maxWidth="sm" className='header'>
    <img className="bg-img" src={bg} alt="background" /> 
    <img className="logo-img" src={logo} alt="logo" /> 
    </Container>
    <Container maxWidth="sm">
    <h1>
      DJ 11R
    </h1>
    <p>Techno | DARK Techno</p>
    
    </Container>
    <Container maxWidth="sm" className="buttons">
    <ReactPlayer
        height="75px"
        width="100%"
        url="https://soundcloud.com/dj11r-422926436/sex"
      />
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
    <Container maxWidth="sm" className='footer'>
    <p>with <span role="img" aria-label="jsx-a11y/accessible-emoji">❤️</span> by Mio Mideal</p>
    <DonationButton 
      url1="https://vcard.miomideal.com"
    />
    </Container>
    </Container>
   
 
  );
}

export default App;