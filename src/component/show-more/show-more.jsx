import React from 'react'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useStyles } from './show-more.style'



export const ShowMore = ({
  username,
  email,
  address,
  phone,
  website,
  company, 
  show
}) => {

const data = useSelector(({configur}) => configur.data)
const classes = useStyles({show})

  return(
    <div  className={classes.root}>
        <Typography variant="h6" className={classes.color}>Address</Typography>
      <Typography>{address.street}</Typography>
      <Typography>{address.suite}</Typography>
      <Typography>{address.city}</Typography>
      <Typography>Zipcode: {address.zipcode}</Typography>
      <Typography>Lat: {address.geo.lat}</Typography>
      <Typography>lng: {address.geo.lng}</Typography>
      <Typography variant="h6" className={classes.color}>Contact details</Typography>
      <Typography>{phone}</Typography>
      <Typography>{email}</Typography>
      <Typography>{website}</Typography>
      <Typography variant="h6" className={classes.color}>Company</Typography>
      <Typography variant="h7">{company.name}</Typography>
      <Typography>{company.catchPhrase}</Typography>
      <Typography>{company.bs}</Typography>
    </div>

  )
}
