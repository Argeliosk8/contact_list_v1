import {createSlice} from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [
            {
                
    
            }
        ]
    },
    reducers: {
        addContact: (state, action)=>{
            const newcontact = action.payload
            state.contacts.push(newcontact)
        },

        deleteContact: (state, action)=>{
        
            const newContactId = action.payload
            state.contacts = state.contacts.filter(contact => contact.id !== newContactId)
            
        },

        getContacts: (state, action)=>{
            const updatedcontacts = action.payload
            state.contacts = updatedcontacts
        }
    },

    
})

export const {addContact, deleteContact, getContacts} = contactsSlice.actions
