import React from 'react';
import { Form, Button } from 'react-bootstrap';

const addNewBoardForm = () => {


    return (

        <Form>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="textarea"
                    placeholder="Adress"
                    rows={3}
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Submit
            </Button>


        </Form>
    )

}

export default addNewBoardForm;


