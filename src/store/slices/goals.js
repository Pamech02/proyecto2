// src/features/example/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    goals: [],
    tasks: [],
    loading: false
};

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        addGoal: (state, action) => {
            state.goals.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.goals = state.goals.filter((habit) => habit.id !== action.payload);
        },
        setGoals: (state, action) => {
            state.goals = action.payload
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((habit) => habit.id !== action.payload);
        },
        setTasks: (state, action) => {
            state.tasks = action.payload
        }
    },
});

export const { addGoal, removeGoal, setGoals, addTask, removeTask, setTasks } = goalSlice.actions;

export default goalSlice.reducer;
