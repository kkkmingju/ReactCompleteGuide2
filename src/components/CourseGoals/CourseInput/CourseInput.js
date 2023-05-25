import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styled from 'styled-components';

                          // div안에있는 요소들에 적용
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color:${props => [props.invalid ? 'red' : 'black']};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? '' : 'tramseparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }    
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault(); //  페이지 로드X. 브라우저의 기본 동작을 실행하지 않도록 지정. 기본 요청이 서버로 보내지는 것을 막음.
    console.log(enteredValue);
    if(enteredValue.trim().length === 0) {//trim() : 시작/끝에 쓰인 과도한 공백을 제거해주는 메소드
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invaild'}> */}
      <FormControl invalid={!isValid}>
        <label> Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label> Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div> */}
      
      {/* <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : 'black', backgroundColor: !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} />
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
