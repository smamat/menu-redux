import { connect } from 'react-redux';
import { setDish } from '../actions';
import { MealCourse } from '../actions'
import DishList from '../components/DishList'

const { PRIMO, SECONDO, ANTIPASTO, DOLCE } = MealCourse

const mapStateToProps = (state, ownProps ) => {
  const { course } = ownProps /* DishSelector's prop */

  switch (course) {
    case ANTIPASTO:
      return {
        course,
        name: "Antipasto",
        dishes: state.ANTIPASTO,
        selectId: state.choice[0].id }
    case PRIMO:
      return {
        course,
        name: "Primo",
        dishes: state.PRIMO,
        selectId: state.choice[1].id }
    case SECONDO:
      return {
        course,
        name: "Secondo",
        dishes: state.SECONDO,
        selectId: state.choice[2].id }
    case DOLCE:
      return {
        course,
        name: "Dolce",
        dishes: state.DOLCE,
        selectId: state.choice[3].id }
    default:
      return;
  }
}

const mapDispatchToProps = dispatch => (
  { setDish: (course, id) => dispatch(setDish(course, id))}
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishList)
