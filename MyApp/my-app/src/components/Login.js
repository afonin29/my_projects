import React from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import '../App.css'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword  } from 'firebase/auth';
import { Link } from '@mui/material';
import { useState } from 'react';

const Login = () => {

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Grid container justifyContent="center" alignItems="center" p={2} spacing={2} sx={{ flexDirection: 'column' }}>
            <FormControl>
                <TextField id="outlined-basic" label="Login" variant="outlined" sx={{ m: 1 }} onChange={(e) => setEmail(e.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ m: 1 }} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" sx={{ m: 1 }}>Login</Button>
            </FormControl>
            <Grid container justifyContent="center" alignItems="center" >
                <Button onClick={signInWithGoogle}>
                    <GoogleIcon sx={{ mr: 2 }} />
                </Button>
                <FacebookIcon />
            </Grid>
            <Link href="./register">Register</Link>
        </Grid>
    );
};

export default Login;