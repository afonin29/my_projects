import React from 'react';
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { FormControl, Grid, TextField, Button } from '@mui/material';
import { Redirect } from 'react-router-dom'
import { PROFILE_PATH } from '../utils/constants';

const Register = () => {

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user;
    //     <Redirect to={PROFILE_PATH}></Redirect>
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // });


    return (
        <Grid container justifyContent="center" alignItems="center" p={2} spacing={2} sx={{ flexDirection: 'column' }}>
            <FormControl>
                <TextField id="email-info" label="Email" variant="outlined" sx={{ m: 1 }} onChange={(e) => setEmail(e.target.value)} />
                <TextField id="password-info" label="Password" variant="outlined" sx={{ m: 1 }} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" sx={{ m: 1 }} onClick={createUserWithEmailAndPassword}>Register</Button>
            </FormControl>
        </Grid>
    );
};

export default Register;