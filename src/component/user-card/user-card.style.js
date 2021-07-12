import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#5CA395',
    height: ({ show }) => (show ? 'auto' : 230),
  },
  id: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 210,
    width: 35,
    height: 35,
    padding: 5,
    border: '3px solid grey ',
    borderRadius: 20,
    backgroundColor: 'grey',
    color: '#fff'
  },
  title: {
    color: '#fff',
    height: 60,
  },
  subTitle: {
    color: '#A35C6A',
    height: 20,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
    marginTop: 12,
  },
  button: {
    marginBottom: 10,
  },
});
