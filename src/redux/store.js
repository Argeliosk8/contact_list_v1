import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice} from "./contactsSlice";

const store = configureStore({
    reducer: {
        contactsSlice: contactsSlice.reducer
    }
})

export default store;