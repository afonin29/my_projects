import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import '../App.css';
import { getAuth } from 'firebase/auth';

const Profile = () => {
    

    function getProfilePicUrl() {
        return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
    }

    function getUserName() {
        return getAuth().currentUser.displayName;
    }



    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    return (
        <Container>
            <Grid container>
                <Grid container md={4} justifyContent={"space-around"} alignItems={"center"} sx = {{flexDirection: "column"}} p={3}>
                    <img src={profilePicUrl} width={200} height={200}></img>
                    <Button variant="contained" style={{width: "30%"}} sx={{ m: 0.5 }}>Upload</Button>
                </Grid>
                <Grid container md={8} justifyContent={"space-around"}>
                    <Grid container >
                        <Grid container md={2} alignItems={"center"} justifyContent={"center"}>Name</Grid>
                        <Grid container md={10} alignItems={"center"}>
                            <TextField
                                disabled
                                id="user-name"
                                label="Name"
                                defaultValue={userName}
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid container md={2} alignItems={"center"} justifyContent={"center"}>Password</Grid>
                        <Grid container md={10} alignItems={"center"}>
                            <TextField
                                disabled
                                id="user-name"
                                label="Password"
                                defaultValue="************"
                            />
                        </Grid>
                        <Grid item md={4}>
                    <Button></Button>
                </Grid>
                <Grid container md={8} alignItems={"flex-start"}>
                    <Button variant="contained">Change</Button>
                </Grid>
                </Grid>
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Profile;