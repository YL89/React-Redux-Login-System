import React, { useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import { useHistory } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, errors } = useForm();

    const [user, setUser] = useState({});
    //let history = useHistory();

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
        user['good'] = 0;
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Account</Form.Label>
                    <Form.Control name='email' type='text' placeholder='Account email' onChange={handleChange}
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: (<Alert variant="danger">Invalid email address</Alert>)
                            }
                        })}
                    >
                    </Form.Control>
                </Form.Group>
                {errors.email && errors.email.type === "required" && (<Alert variant="danger">Email cannot be empty</Alert>)}
                {errors.email && errors.email.message}

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type='password' placeholder='Password' onChange={handleChange}
                        ref={register({
                            required: true
                        })}
                    >
                    </Form.Control>
                </Form.Group>
                {errors.password && errors.password.type === "required" && (<Alert variant="danger">Password cannot be empty</Alert>)}

                <Form.Group className='text-center'>
                    <Button className='signin-btn' variant="outline-primary" type='submit' >Sign In</Button>{' '}
                    <Button variant="outline-primary" type='button'><Link to="signup">Register</Link></Button>
                </Form.Group>
            </Form>
        </Container>
    )
}