import React from 'react'
import styles from '../styles.module.css'

const DishItem = ({ onClick, selected, name }) => (
   <li
     onClick={onClick}
     className={selected ? styles.dishselected : null}
     >
     {name}
   </li>
)

export default DishItem
