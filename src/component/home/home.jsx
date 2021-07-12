import React, { Fragment, useEffect } from 'react';
import { get } from 'axios';
import UserCard from '../user-card/user-card';
import { useDispatch, useSelector } from 'react-redux';
import { setCardDataAction } from '../../store/configur.action';
import { FilterUsers } from '../filter-users';
import { useStyles } from './home.style';
import { Typography } from '@material-ui/core';

const Home = () => {
  const dispatch = useDispatch();
  const [data, search] = useSelector(({ configur }) => [
    configur.data,
    configur.search,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await get('https://jsonplaceholder.typicode.com/users');
      dispatch(setCardDataAction(result.data));
    };
    fetchData();
  }, []);

  const classes = useStyles();
  console.log(data, search);

  const list = data.filter((user) => user.name.toLowerCase().indexOf(search.toLowerCase()) > -1)

  return (
    <>
      <Typography variant="h3">Users' cards</Typography>
      <Typography variant="h5">Please use the search engine that is filtered to search only by name:</Typography>
      <FilterUsers />
      <div className={classes.root}>
        {list.map(
          ({ id, name, username, email, address, phone, website, company }) => {
            return (
              <Fragment key={id}>
                <UserCard
                  id={id}
                  name={name}
                  username={username}
                  email={email}
                  address={address}
                  phone={phone}
                  website={website}
                  company={company}
                />
              </Fragment>
            );
          }
        )}
      </div>
    </>
  );
};

export default Home;
