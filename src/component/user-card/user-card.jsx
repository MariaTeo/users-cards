import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ShowMore } from '../show-more/show-more';
import { useStyles } from './user-card.style';

const UserCard = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const classes = useStyles({ show });

  return (
    <Card elevation={7} className={classes.root}>
      <CardContent>
          <Typography variant="h7"className={classes.id}>
            {id}
          </Typography>
        <Typography
          variant="h4"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          {username}
        </Typography>
        <ShowMore
          email={email}
          address={address}
          phone={phone}
          website={website}
          company={company}
          show={show}
        />
      </CardContent>
      <Button
        onClick={handleShow}
        className={classes.button}
        fullWidth
        justifyContent="center"
        aligntContent="center"
      >
        Show more
      </Button>
    </Card>
  );
};

export default UserCard;
