import React from 'react'
import classes from './UsersItem.module.css'

export const UsersItem = ({user}) => {
    const {text, number} = user;
  return (
    <li className={classes.li}>
        <p className={classes.p}>{text} ({number} years old)</p>
    </li>
  )
}
