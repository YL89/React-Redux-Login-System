import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { logOut } from '../actions/userActions'

const Home = (props) => {
    let history = useHistory();

    const handleSignOut = () => {
        props.logout();
        history.push('/');
    }

    return (
        <div>
            {props.isLoggedIn ?
            <div className="text-center"><br /><br /><br />
            <p>Email: {props.user.email}</p> 
            <p>About: {props.user.about}</p> 
            <p>Habits: {props.user.habits}</p><br />
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