import React, { useContext, useReducer } from 'react';

const initialState = {
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                habits: state.habits.map((_habit) => {
                    return _habit.id === action.habit.id ? { ..._habit, count: _habit.count + 1 } : _habit;
                })
            };
        case 'DECREASE':
            return {
                habits: state.habits.map((_habit) => {
                    return _habit.id === action.habit.id ? { ..._habit, count: (_habit.count - 1) < 0 ? 0 : _habit.count - 1 } : _habit;
                })
            };
        case 'REMOVE':
            return {
                habits: state.habits.filter((_habit) => _habit.id !== action.habit.id)
            };
        case 'ADD':
            return {
                habits: [...state.habits, { id: new Date(), name: action.name, count: 0 }]
            };
        default:
            throw new Error('not fount type~!');
    }
}

const UserStateContext = React.createContext(null);
const UserDispatchContext = React.createContext(null);

export function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}
// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUserState() {
    const state = useContext(UserStateContext);
    if (!state) {
        throw new Error('Cannot find UsersProvider');
    }
    return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUserDispatch() {
    const dispatch = useContext(UserDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find UsersProvider');
    }
    return dispatch;
}