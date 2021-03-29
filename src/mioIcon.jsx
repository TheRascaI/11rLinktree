
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';
import mioLogo from './mioLogo.svg';

const useStyles = makeStyles({
  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  iconRoot: {
    textAlign: 'center'
  }
});

const MioIcon = props => {
  const classes= useStyles();
return(
  
  <Icon classes={{root: classes.iconRoot}}>
  <img alt="miomideal-logo" className={classes.imageIcon} src={mioLogo}/>
</Icon>
)
}

export default MioIcon;
