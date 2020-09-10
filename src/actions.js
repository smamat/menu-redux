/**
  * CONSTANTS
  */

/* action types */
export const SET_DISH = 'SET_DISH';
export const SET_MEAL = 'SET_MEAL';

/* MealCourse: appetiser, pasta, mains, dessert */
export const MealCourse = {
  ANTIPASTO: 'ANTIPASTO',
  PRIMO: 'PRIMO',
  SECONDO: 'SECONDO',
  DOLCE: 'DOLCE'
};

/* meal: number of courses
   TWOA:  Light Lunch
   TWOB:  Sweet Deal
   THREE: Three Course
   FOUR:  Four Course
 */
export const MealType = {
  TWOA: 'TWOA',
  TWOB: 'TWOB',
  THREE: 'THREE',
  FOUR: 'FOUR'
};

/**
  * ACTION CREATORS
  */

/* set meal type: two, three or four courses */
export const setMeal = mealType => ({
  type: SET_MEAL,
  mealType
});

/* set dish: choose a dish from a course */
export const setDish  = (course, id) => (
  { type: SET_DISH, course, id }
)
