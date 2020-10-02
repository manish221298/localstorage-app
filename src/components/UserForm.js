import React, {useState} from "react"
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
//import {swal} from "sweetalert"
import swal from 'sweetalert';

function UserForm(){

    const initialInputState = {formName: "Aromatic bar", text: "", email: "", phone: "", name: "", rating: ''}
    const [eachValue, setValue] = useState(initialInputState)
    const {formName, text, email, phone, name, rating} = eachValue
    var arr = []
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            formName: formName,
            text: text,
            email: email,
            phone: phone,
            name: name,
            rating: rating
        }

        // console.log(form)
        arr.push(form)
        arr=  arr.concat(JSON.parse(localStorage.getItem('arr') || "[]"))
        console.log("getItem", arr)
        
        const setItem = localStorage.setItem('arr',JSON.stringify(arr))
        if(arr){
            swal("Good job!", "Thank you for completing the information", "success");
        }


    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setValue({...eachValue, [e.target.name]: e.target.value})
    }

    const handleRadioChange=(rating)=>{
        setValue({...eachValue ,rating: rating})
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                        <input className="ml-0 border-0 text-left text-info mt-3" style={{outline: "none"}}
                                value={formName}
                            />
                            <p>we are committed to providing you with the best dining experience possible,
                                so we welcome your comments. please fill out these questionnarie Thank you
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="name">Text Field</Form.Label>
                            <Form.Control 
                                type="text"
                                id="text"
                                name="text"
                                value={text}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="email">Email:-</Form.Label>
                        <Form.Control 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        </Col>
                    </Row>
                    
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="phone">Phone:-</Form.Label>
                            <Form.Control 
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                                required 
                                pattern="[0-9]{10}"
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="name">Name:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                        </Col>
                    </Row>

                     {/* ************************* */}
                     <Row>
                        <Col>
                        <Form.Label>Quantity:- &nbsp;</Form.Label>
                            <Form.Check inline label='Excellent' type="radio" id="excellent" name="rating"
                                checked={rating==='excellent'}
                                onChange={()=>{handleRadioChange('excellent')}}
                            />
                            <Form.Check inline label='Good' type="radio" id="good" name="rating"
                                checked={rating==='good'}
                                onChange={()=>{handleRadioChange('good')}}
                            />
                            <Form.Check inline label='Fair' type="radio" id="fair" name="rating"
                                checked={rating==='fair'}
                                onChange={()=>{handleRadioChange('fair')}}
                            />
                            <Form.Check inline label='Bad' type="radio" id="bad" name="rating"
                                checked={rating==='bad'}
                                onChange={()=>{handleRadioChange('bad')}}
                            />
                        </Col>
                    </Row>


                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                    <Button  size="sm" block  className="mt-3 pl-5 pr-5">
                        <input type="submit" className="btn" value="SUBMIT"/></Button>
                        </Col>
                        <col md={4}></col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default UserForm