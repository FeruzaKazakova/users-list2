import React, { useState } from 'react';
import styles from './UsersForm.module.css'

export const UsersForm = ({onAddUser}) => {

    const [inputText, setInputText] = useState("");
    const [inputNumber, setInputNumber] = useState("");

    const nameInputChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    const ageInputChangeHandler = (event) => {
        const value = event.target.value;
        setInputNumber({inputNumber: value})
        if(value.charAt(0) !== "-"){
            setInputNumber(value);
        }

    }
    const submitHandler = (event) => {
        event.preventDefault();
        onAddUser(inputText, inputNumber);

        setInputText("");
        setInputNumber("")
    }

    

  return (
    <form className={styles.form}>
        <label className={styles.labell} htmlFor="name">Username</label>
        <input className={styles.input} value={inputText} onChange={nameInputChangeHandler} id='name' type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input className={styles.input} value={inputNumber} onChange={ageInputChangeHandler}  id='age' type="number" />

        <div className='button'>
        <button disabled={!inputNumber} onClick={submitHandler}>Add user</button>
        </div>
    </form>
  )
}