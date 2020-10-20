import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import AccountServices from '../services/AccountServices';
import { useHistory } from 'react-router-dom';

export default function Signup() {

    const { register, handleSubmit, errors } = useForm();
    const [user, setUser] = useState({});
    let history = useHistory();

    const handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = () => {
        AccountServices.registerUser(user);
        history.push('/');
    }


    return (
        <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Email<span className="required">*</span></Form.Label>
                        <Form.Control name='email' type='text' placeholder='email' onChange={handleChange}
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: (<Alert variant="danger">Invalid email address</Alert>)
                                }
                            })}>
                        </Form.Control>
                    </Form.Group>
                    {errors.email && errors.email.type === "required" && (<Alert variant="danger">Email cannot be empty</Alert>)}
                    {errors.email && errors.email.message}

                    <Form.Group>
                        <Form.Label>Password<span className="required">*</span></Form.Label>
                        <Form.Control name='password' type='password' placeholder='Password' onChange={handleChange}
                            ref={register({
                                required: true,
                                minLength: 8,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]/i,
                                    message: (<Alert variant="danger">Invalid email address</Alert>)
                                }
                            })}>
                        </Form.Control>
                    </Form.Group>
                    {errors.password && errors.password.type === "required" && (<Alert variant="danger">Password cannot be empty</Alert>)}
                    {errors.password && errors.password.type === "minLength" && (<Alert variant="danger">Password must be at least 8 characters</Alert>)}
                    {errors.password && errors.password.type === "pattern" && (<Alert variant="danger">Password contains at least 1 uppercase character</Alert>)}

                    <Form.Group>
                        <Form.Label>Confirm Password<span className="required">*</span></Form.Label>
                        <Form.Control name='password2' type='password' placeholder='Password' onChange={handleChange}
                            ref={register({
                                required: true,
                                validate: value => value === user.password
                            })}>
                        </Form.Control>
                    </Form.Group>
                    {errors.password2 && errors.password2.type === "validate" && (<Alert variant="danger">Password does not match</Alert>)}

                    <Form.Group>
                        <Form.Label>About You<span className="required">*</span></Form.Label>
                        <Form.Control name='about' type='text' placeholder='Say something about yourself' onChange={handleChange}
                            ref={register({ required: true })}>
                        </Form.Control>
                    </Form.Group>
                    {errors.about && (<Alert variant="danger">Please let me know more about you!</Alert>)}

                    <Form.Group>
                        <Form.Label>Your habits<span className="required">*</span></Form.Label>
                        <Form.Control name='habits' maxLength="50" type='textarea' placeholder='Show me some of your habits' onChange={handleChange}
                            ref={register({
                                required: true
                            })}>
                        </Form.Control>
                    </Form.Group>
                    {errors.habits && (<Alert variant="danger">Please tell me some habits</Alert>)}


                    <Form.Group className='text-center'>
                        <Button className='signin-btn' variant="outline-primary" type='submit' >Sign Up</Button>{' '}
                        <Button className='signin-btn' variant="outline-primary" type='reset' >Clear</Button>
                    </Form.Group>

                </Form>

            </Container>
        </div>
    )

}