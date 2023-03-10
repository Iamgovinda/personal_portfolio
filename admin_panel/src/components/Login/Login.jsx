import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { getToken, setToken } from '../../utils/token';
import styles from './Login.module.scss';
import {InputLabel, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { get, loginPOST } from '../../API/axios';
import { toast } from 'react-toastify';
import config from '../../config';
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { setUserData } = useUserContext();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate();
    const onSubmit = (data) => {
        loginPOST("user/auth/obtain/", data)
            .then((res) => {
                if (res.data.group === "Admin") {
                    setToken({
                        name: config.tokenName,
                        value: JSON.stringify(res.data.token),
                    });
                    toast.success("Login Successful");  
                    if(getToken() != null){
                        get(`user/account/${"me"}/`).then((response) => {
                            setUserData(response.data);
                        });
                    }
                    navigate('/');
                } else {
                    toast.error(
                        "Make sure you are a admin user to login. Please try again!"
                    );
                }
            })
            .catch((err) => {
                if (err.data.code === "UNAUTHED") {
                    // setShowOtpModal(true);
                    toast.error("Your account is not activated.");
                } else if (err.data.detail) {
                    toast.error(err.data.detail?.[0]);
                } else if (err.data.non_field_errors) {
                    toast.error("Login Failed! Please try again.");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            });
    };
    return (
        <div className={styles["login-box"]}>
            <p className={styles['login-text']}>Admin Login</p>
            <div className={styles['login-fields']}>
                <form
                    component="form"
                    autoComplete="off"
                    className={styles['textfield-box']}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <InputLabel htmlFor="outlined-basic">Username</InputLabel>
                    <TextField id="outlined-basic" fullWidth size='medium' placeholder='Username' style={{ marginBottom: '0.5rem' }} {...register('username', {required:true}) }/>
                    {errors.username && <p>This field is required</p>}
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        fullWidth
                        size='medium'
                        placeholder='Password'
                        {...register('password', {required:true})}
                    />
                    {errors.password && <p>This field is required</p>}
                    <Button variant='contained' style={{ marginTop: '1rem', backgroundColor: 'green' }} type='submit'>Login</Button>
                </form>
            </div>

        </div>
    )
}

export default Login