import { configureStore } from '@reduxjs/toolkit';
import perDay from './Per-DayReducer';
import api from './api/Api';

export default configureStore({
    reducer: {
        perDay
    },
    middleware: [api]
})