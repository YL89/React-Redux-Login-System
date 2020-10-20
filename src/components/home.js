import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { logOut } from '../actions/userActions'

const Home = (props) => {
    let history = useHistory();

    const [showAlert, setShowAlert] = useState(props.isLoggedIn);

    const handleSignOut = () => {
        props.logout();
        history.push('/');
    }

    const displayAlert = ()=>{
        setTimeout(()=>{
            setShowAlert(false);
        }, 3000);
    }

    useEffect(()=>{
        displayAlert();
    })

    
    return (
        <div>
            {props.isLoggedIn ?
                <div className="text-center"><br /><br /><br />
                    {showAlert? <Alert variant="success">You have successfully signed in!</Alert>:""}
                    <p><strong>Email:</strong></p>
                    <p> {props.user.email} </p><br />
                    <p><strong>About:</strong></p>
                    <p> {props.user.about} </p><br />
                    <p><strong>Habits:</strong> </p>
                    <p> {props.user.habits} </p><br />
                    <Button className='signin-btn' variant='primary' type='button' onClick={handleSignOut} >Sign Out</Button></div>

                : <div><br /><br /><br /><p className="text-center"><strong>Welcome to the React Redux Login System!</strong></p></div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => { dispatch(logOut()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);