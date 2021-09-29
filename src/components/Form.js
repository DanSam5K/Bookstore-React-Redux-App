/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FormComponent = ({ submitBook }) => {
  const inputRef = useRef([]);

  const inputs = ['title', 'author'];

  useEffect(() => {
    if (inputs.length !== 0) {
      inputRef.current[0].focus();
    }
  }, [inputs]);

  const addBook = (e) => {
    e.preventDefault();
    if (inputRef.current[0].value && inputRef.current[1].value) {
      const newBook = {
        title: inputRef.current[0].value,
        author: inputRef.current[1].value,
      };
      submitBook(newBook);
      inputRef.current[0].value = '';
      inputRef.current[1].value = '';
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
          ref={(el) => (inputRef.current[0] = el)}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          ref={(el) => (inputRef.current[1] = el)}
          required
        />
        <select defaultValue="Category">
          <option>Science</option>
          <option>Economy</option>
          <option>Action</option>
          <option>Documentaries</option>
        </select>
        <button type="button" onClick={addBook}>
          Add Book
        </button>
      </form>
      {/* <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Book title"
              ref={(el) => (inputRef.current[0] = el)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Book author"
              ref={(el) => (inputRef.current[1] = el)}
            />
          </Col>
          <Form.Group>
            <Form.Select defaultValue="Category">
              <option>Category</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Romance</option>
            </Form.Select>
          </Form.Group>
          <Button as={Col} variant="primary" type="submit" onClick={addBook}>
            ADD BOOK
          </Button>
        </Row>
      </Form> */}
    </div>
  );
};

export default FormComponent;

FormComponent.propTypes = {
  submitBook: PropTypes.func.isRequired,
};
