import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import MioIcon from './mioIcon';
import Link from '@material-ui/core/Link';

const DonationButton = props => {
    return(<ButtonGroup className="DonationButtons" variant="contained" color="primary" aria-label="contained primary button group">
   
   <IconButton size="small" color="primary" aria-label="upload picture" component="div">
         <Link href="https://vcard.miomideal.com"><MioIcon /></Link> 
        </IconButton>
    <Button href=""https://paypal.me/miomideal?locale.x=de_DE"" size="small">Tip a Coffee</Button>
  </ButtonGroup>
    )
}

export default DonationButton