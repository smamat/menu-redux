import React from 'react'
import { connect } from 'react-redux'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { MealType } from '../actions'
import { setMeal } from '../actions'

const { TWOA, TWOB, THREE, FOUR } = MealType;

const MealSelector = ({ dispatch }) => {
  return (
    <div>
      Make the following selections to create your meal:
      <ol>
        <li> Select meal type from the tabs </li>
        <li> Select a dish for each course </li>
      </ol>
      <Tabs defaultActiveKey={THREE}
            onSelect={key => dispatch(setMeal(key))}
      >
        <Tab eventKey={TWOA} title="Light Lunch" />
        <Tab eventKey={TWOB} title="Sweet Deal" />
        <Tab eventKey={THREE} title="Three Course" />
        <Tab eventKey={FOUR} title="Four Course" />
      </Tabs>
    </div>
  )
}
        /*

        <MealTypeLink onClick={()=>dispatch(setMeal(FOUR))}>
          {FOUR}
        </MealTypeLink>
        */

export default connect()(MealSelector)
