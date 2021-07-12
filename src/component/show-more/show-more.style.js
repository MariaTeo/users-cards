import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  root: {
    display: ({show}) => (show ? 'flex': 'none'), 
    flexDirection: 'column',
  },
  color: {
    color: '#B0AC4F',
  }

})
