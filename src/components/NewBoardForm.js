import React from 'react';
import PropTypes from 'prop-types';
import {DropdownButton, Form, Button, Row, Col} from 'react-bootstrap';
import './NewBoardForm.css'


const NewBoardForm = () => {
  return (
    <>
      <DropdownButton align="end" title="New Board" id="dropdown-menu-align-end" variant="secondary">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Enter title" />
              <Form.Text className="text-muted">
                Please enter a board title!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Owner</Form.Label>
              <Form.Control placeholder="Enter owner" />
              <Form.Text className="text-muted">
                Please enter a board owner!
              </Form.Text>
            </Form.Group>

            <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={100}>
                Select Board Color
              </Form.Label>
              <Col sm={100}>
                <Form.Check
                  type="radio"
                  label="green"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="blue"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="pink"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
            </fieldset>
            <Button variant="success" type="submit" id="submit">
              Submit
            </Button>

      </Form>
      </DropdownButton>
    </>
  );
};

export default NewBoardForm;