import { connect } from 'react-redux'
import CourseList from '../components/CourseList'
import { MealType, MealCourse } from '../actions.js'

const { ANTIPASTO, PRIMO, SECONDO, DOLCE } = MealCourse;
const { TWOA, TWOB, THREE, FOUR } = MealType

const mapStateToProps = ({ mealType }) => {

  switch (mealType) {
    case THREE:
      return { courses: [ANTIPASTO, PRIMO, DOLCE] }
    case FOUR:
      return { courses: [ANTIPASTO, PRIMO, SECONDO, DOLCE] }
    case TWOA:
      return { courses: [ANTIPASTO, PRIMO] }
    case TWOB:
      return { courses: [PRIMO, DOLCE] }
    default:
      return { course: []};
  }
}

export default connect(
  mapStateToProps
)(CourseList)
