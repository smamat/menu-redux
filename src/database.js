import { MealType, MealCourse } from './actions';
const { THREE } = MealType
const { PRIMO, SECONDO, ANTIPASTO, DOLCE } = MealCourse

const initialState = {
   mealType: THREE,
   choice: [
      { course: ANTIPASTO, id: 0 },
      { course: PRIMO, id: 0 },
      { course: SECONDO, id: 0 },
      { course: DOLCE, id: 0 }
   ],
   ANTIPASTO: [
      { id: 1, name: 'bruschetta' },
      { id: 2, name: 'crostini con i funghi' },
      { id: 3, name: 'insalate caprese' }
    ],
    PRIMO: [
      { id: 4, name: 'tonnarelli cacio e pepe' },
      { id: 5, name: 'trofie al pesto genovese' },
      { id: 6, name: 'rigatoni alla Norma' },
      { id: 7, name: 'tagliarini al salmone' },
      { id: 8, name: 'spaghetti alla puttanesca' }
    ],
    SECONDO: [
      { id: 9, name: 'pollo alla cacciatore' },
      { id: 10, name: 'tagliata di manzo' },
      { id: 11, name: 'salmone alla griglia' }
    ],
    DOLCE: [
      { id: 13, name: 'panna cotta' },
      { id: 14, name: 'tiramisù' },
      { id: 15, name: 'crostata al limone' }
    ]
  }

export default initialState
