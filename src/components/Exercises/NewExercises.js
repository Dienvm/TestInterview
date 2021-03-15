// import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  SubTitle,
  InputTitle,
  Row,
  ButtonStyled,
} from './index.styled';

const NewExercise = ({ setCurrentId, addNewExercise, id, workoutId }) => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    name: '',
    info: [''],
  });
  const handleSubmit = () => {
    dispatch({ type: 'ADD_NEW_EXERCISE', payload: { fields, id, workoutId } });
    setCurrentId('');
  };

  const handleCancel = () => {
    setCurrentId('');
  };

  const handleChangeInput = (event, field) => {
    setFields({
      ...fields,
      [field]: event.currentTarget.value,
    });
  };

  return (
    <Container>
      <SubTitle pTop={5} pBottom={5}>
        Exercise name
      </SubTitle>
      <InputTitle onChange={(value) => handleChangeInput(value, 'name')} />

      <SubTitle pTop={5} pBottom={5}>
        Add more information
      </SubTitle>
      <InputTitle onChange={(value) => handleChangeInput(value, 'info')} />

      <Row>
        <ButtonStyled type='primary' onClick={handleSubmit}>
          Submit
        </ButtonStyled>
        <ButtonStyled type='cancel' onClick={handleCancel}>
          Cancel
        </ButtonStyled>
      </Row>
    </Container>
  );
};

export default NewExercise;
