import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstname, setFirstname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //check form input elements are valid
    //email & password
    const isInvalid = firstname ==='' | password === '' || emailAddress === '';
    
    const handleSignup = (event) =>{
        event.preventDefault();

        //firebase work here!
        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                //update user profile data
                result.user.updateProfile({
                    displayName: firstname,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    //push to the browse page
                    history.push(ROUTES.BROWSE);
                })
            ).catch((error) => {
                setFirstname('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                        {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstname}
                            onChange={({target}) => setFirstname(target.value)}/>
                       <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}/>
                       <Form.Input
                            type="password"
                            placeholder="Password" 
                            autoComplete="off"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}/>
                       <Form.Submit type="submit" disabled={isInvalid}>Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                       Already a user ? <Form.Link to="/signin">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
};