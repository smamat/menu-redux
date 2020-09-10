import React from 'react'
import DishItem from './DishItem'
import styles from '../styles.module.css'

const DishList = ({course, name, dishes, selectId, setDish }) => {
  return (
    <div className={styles.dishlist}>
      <i>{name} course</i>
      <ul>
        {dishes.map(dish =>
          <DishItem
            name={dish.name}
            key={dish.id}
            onClick={() => setDish(course, dish.id)}
            selected={selectId === dish.id} />)
        }
      </ul>
    </div>
  )
}

export default DishList
