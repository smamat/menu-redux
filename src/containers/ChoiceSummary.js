import { connect } from 'react-redux'
import ChoiceList from '../components/ChoiceList'
import { MealType } from '../actions'

const { TWOA, TWOB, THREE, FOUR } = MealType

/* dishIDs cannot contain a 0 as an element */
function getDishNames(dishes, dishIDs) {
  return dishIDs.map(idx => (
    (dishes.find(item => item.id === idx)).name
  ))
}

const mapStateToProps = (state) => {

  /* combine all the dishes */
  const alldishes = [...state.ANTIPASTO,
                     ...state.PRIMO,
                     ...state.SECONDO,
                     ...state.DOLCE]

  const { choice, mealType } = state

  /* determine which dishes go under which meal
     courseComb: signifies the combination of courses */
  let mealName, mealDescription, courseComb;
  switch (mealType) {
    case TWOA:
      mealName = "Light Lunch"
      mealDescription = "an appetiser and a pasta"
      courseComb = [0, 1]
      break
    case TWOB:
      mealName = "Sweet Deal"
      mealDescription = "a pasta and a dessert"
      courseComb = [1, 3]
      break
    case THREE:
      mealName = "Three Course"
      mealDescription = "an appetiser, a pasta and a dessert"
      courseComb = [0, 1, 3]
      break
    case FOUR:
      mealName = "Four Course"
      mealDescription = "a full-on meal"
      courseComb = [0, 1, 2, 3]
      break
    default:
      mealName = "none"
      mealDescription = "none"
      courseComb = []
  }

  /* get dish IDs for chosen dishes  */
  const dishIDs = courseComb.map( idx => {
    return choice[idx].id
  })

  /* get dish names from array of dish IDs
     dishIDs mustn't contain an id that is 0
     dishID that is 0 means the dish for the course hasn't been selected */
  const dishes = getDishNames(alldishes, dishIDs.filter(id => (id > 0)))

  console.log(dishes)

  return { mealName, mealDescription, dishes }

}

export default connect(
  mapStateToProps
)(ChoiceList)
