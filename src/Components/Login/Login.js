import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FireBaseConfig/firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './LogIn.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='google_SingIn'>
           <div className="google_SingIn_content">
                <h1>Login With</h1>
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
                <p>Don’t have an account? <Link>Create an account</Link></p>
           </div>
        </div>
    );
};

export default Login;