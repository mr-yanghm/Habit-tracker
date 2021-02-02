import React, { useCallback, useContext, useReducer } from 'react';
import Habit from './Habit';
import "../../app.css";
import HabitAddForm from './HabitAddForm';
import { useUserDispatch, useUserState } from './Context';

const Habits = (props) => {
    const state = useUserState();
    const dispatch = useUserDispatch();

    const handleIncrement = useCallback((habit) => {
        dispatch({ type: 'INCREASE', habit });
    }, []);

    const handleDecrement = useCallback((habit) => {
        dispatch({ type: 'DECREASE', habit });
    }, []);

    const handleDelete = useCallback((habit) => {
        dispatch({ type: 'REMOVE', habit });
    }, []);

    const handleAdd = (name) => {
        dispatch({ type: 'ADD', name });
    }

    return (
        <>
            <HabitAddForm onAdd={handleAdd} />
            <ul>
                {
                    state.habits.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </ul>
        </>
    )
};
export default Habits;