import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from 'react-redux'
import { addContact, deleteContact, getContacts } from "../redux/contactsSlice";
import { Link } from "react-router-dom";

function ContactList() {
    const contacts = useSelector((store)=>{
        return store.contactsSlice.contacts
    })
    const dispatch = useDispatch()

    async function getContactsApi() {
        let requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        try {
            const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/argelio", requestOptions)
            if(response.ok){
                const jsonResponse = await response.json()
                const payload = jsonResponse
                dispatch(getContacts(payload))
                console.log(jsonResponse[0].id)
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteContactApi(id){
        let requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }
        try {
            const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`,requestOptions)
            const jsonResponse = await response.json()
            console.log(jsonResponse)
        } catch (error) {
            console.error(error)
        }
    }
    function renderContacts(){
        return contacts.map((contact, key) => {
            console.log(contact.id)
            return (
                <Row sm={1} key={key}>
                    <Col sm={3}>
                        <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" roundedCircle fluid/>
                    </Col>
                    <Col sm={6}>
                        <h4>{contact.full_name}</h4>
                        <p>{contact.address}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </Col>
                    <Col sm={3}>
                        <Button variant="success" value={contact.id} onClick={handleClick}>Delete</Button>
                    </Col>
                </Row> 
            ); 
            
            
        })
        
    }

    function handleClick (e){
        const payload = e.target.value
        dispatch(deleteContact(payload))  
        deleteContactApi(payload)
              
    }

    useEffect(()=>{
        getContactsApi()
    },[])

    return(
        <Container>
            <Container>
                <Button variant="success"><Link to={'/form'}>Add new contact</Link></Button>
            </Container>
            <Container>
                {renderContacts()}
            </Container>
        </Container>  
    )
}

export default ContactList;