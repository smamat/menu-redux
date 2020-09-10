import React from 'react'
//import { MealCourse } from '../actions'

//const { ANTIPASTO, PRIMO, SECONDO, DOLCE } = MealCourse;

const ChoiceList = ( {mealName, mealDescription, dishes} ) => (
  <div>
    You have chosen {mealName}, which consists of {mealDescription}.
    <br/>
    Your selected dishes are:
    <ul>
      {dishes.map(dish => <li key={dish}>{dish}</li>)}
    </ul>
  </div>
)

export default ChoiceList
