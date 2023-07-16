import React from "react";
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useState } from "react";
import { addContact } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/*
{
        "full_name": "Nick White",
        "email": "nick.white@gmail.com",
        "agenda_slug": "argelio",
        "address":"47568 NW 34ST, 33434 FL, USA",
        "phone":"7864445566"
    }

*/

function ContactForm(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [email, setEmail]  = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const nameChange = (e)=>{
        setName(e.target.value)
    }
    const emailChange = (e)=>{
        setEmail(e.target.value)
    }
    const phoneChange = (e)=>{
        setPhone(e.target.value)
    }
    const addressChange = (e)=>{
        setAddress(e.target.value)
    }

    const saveContact = (e)=>{
        e.preventDefault()
        const payload = {
            full_name: name,
            email: email,
            agenda_slug: "argelio",
            address: address,
            phone: phone
        }
        dispatch(addContact(payload))
        console.log(payload)
        navigate('/')
    }

    return(
        <Container >
            <Form >
            <h3>Add new contact</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" onChange={nameChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" onChange={emailChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone" onChange={phoneChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" onChange={addressChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={saveContact}>
                Save
            </Button><br></br>
            <Link to={'/'}>or get back to contacts</Link>
        </Form>
        </Container>
    )
}

export default ContactForm;