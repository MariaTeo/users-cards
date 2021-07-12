import { Button, InputAdornment } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setSearchAction } from '../../store/configur.action';

export const FilterUsers = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');
  const onSubmit = (values) => {
    dispatch(setSearchAction(values.search)) 
    
  };



  
  return (
    <Formik
      initialValues={{search: ''}}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Field
            name="search"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <Button type="submit" >Search</Button>
        </Form>
      )}
    </Formik>
  );
};
