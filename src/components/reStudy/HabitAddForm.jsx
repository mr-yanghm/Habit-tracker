import React, { useRef } from 'react';

const HabitAddForm = ({ onAdd }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(inputRef.current.value);
        // TODO submit 부터 작성 시작
    }

    const formRef = useRef(null);

    const inputRef = useRef(null);

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    )
};

export default HabitAddForm;