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
        addContact: (state)=>{
            state.contacts.push(
                {
                    name: "Jordan Andres",
                    address: "Managua",
                    phone: "477-888-9999",
                    email: "test@gmail.com",
                    id: 2
                }
            )
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
