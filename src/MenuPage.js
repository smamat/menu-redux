import React from 'react';
import Card from 'react-bootstrap/Card'
import MealSelector from './containers/MealSelector.js'
import CourseSelector from './containers/CourseSelector.js'
import ChoiceSummary from './containers/ChoiceSummary.js'

const MenuPage = () => {
  return (
    <Card>
      <Card.Header>
        An app to demonstrate the use of <b>Redux</b> in <b>React</b>
      </Card.Header>
      <Card.Body>
        <Card style={ {width: "520px"}}>
          <Card.Header>
            <MealSelector />
          </Card.Header>
          <Card.Body style={ {maxHeight: "360px", overflowY: "scroll"}}>
            <CourseSelector />
          </Card.Body>
          <Card.Footer>
            <ChoiceSummary />
          </Card.Footer>
        </Card>
      </Card.Body>
      <Card.Footer> README: (left blank) </Card.Footer>
    </Card>
  );
};

export default MenuPage;
