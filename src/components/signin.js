import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import AccountServices from '../services/AccountServices';
import { verified, failed } from '../actions/userActions'

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = ()=>{
        history.push('signup');
    }

    const onSubmit = function () {
        let authenticatedUser = AccountServices.signIn(user);
        if (authenticatedUser) {
            props.verify(authenticatedUser);
            history.push('/');
        }
        else {
            props.failed();
            console.log(props)
        }

    }

    return (
        <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            { props.isLoggedIn ? <p className="text-center"><br /><br /><Alert variant="danger">You already signed in!</Alert></p> :
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
                        {props.errorMessage ? <Alert variant="danger">{props.errorMessage}</Alert>:null}

                        <Form.Group className='text-center'>
                            <Button className='signin-btn' variant="outline-primary" type='submit' >Sign In</Button>{' '}
                            <Button variant="outline-primary" type='button' onClick={handleRegister}>Register</Button>
                        </Form.Group>
                    </Form>
                </Container>}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        errorMessage: state.errorMessage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        verify: (user) => dispatch(verified(user)),
        failed: () => { dispatch(failed()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);