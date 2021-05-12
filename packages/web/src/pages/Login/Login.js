import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as ROUTES from '../../routes';

import {
    resetAuthState,
    signInWithEmailRequest,
} from '../../redux/auth/auth-actions';

import { authSelector } from '../../redux/auth/auth-selectors';
import DarkLightToggle from '../../components/DarkLightToggle';
import ResetPassword from '../ResetPassword';
import Input from '../../styles/components/Input/GenericInput';
import Button from '../../styles/components/Button/GenericButton';
import '../../styles/GenericForm.scss';
import '../../styles/flex.scss';
import '../../styles/margin.scss';

function Login() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(authSelector);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetPass, setResetPass] = useState(false);
    const { theme } = useSelector(store => store.changeTheme);

    const handleResetPassword = () => {
        setResetPass(!resetPass);
    };

    useEffect(() => {
        dispatch(resetAuthState());
    }, [dispatch]);

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(signInWithEmailRequest(email, password));

        setEmail('');
        setPassword('');
    }

    function handleSetEmail(e) {
        setEmail(e.target.value);
    }

    function handleSetPassword(e) {
        setPassword(e.target.value);
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="form-container welcomePage">
            <h2 className="form-titles">
                <span>Sign in to your account</span>
            </h2>
            <div className="welcomePage__theme">
                <DarkLightToggle theme={theme} />
            </div>
            <form action="#" method="POST" onSubmit={handleSubmit}>
                <Input type="hidden" name="remember" value="true" />
                <div>
                    <label htmlFor="email-address">Email address</label>
                    <Input
                        type="text"
                        id="email"
                        autoComplete="email"
                        required
                        placeholder="Email address"
                        value={email}
                        onChange={handleSetEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={handleSetPassword}
                        placeholder="Password"
                    />
                </div>
                <div className="flex-column">
                    <div className="flex">
                        <input
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            style={{ margin: '1rem' }}
                        />
                        <label htmlFor="remember_me">Remember me</label>
                    </div>
                    <div className="reset-password">
                        <Button type="button" onClick={handleResetPassword}>
                            Reset password
                        </Button>
                    </div>
                    <div hidden={resetPass}>
                        <ResetPassword />
                    </div>
                    <Button type="submit">Sign in</Button>
                    <div>
                        <p>You aren´t sharing yet?</p>
                    </div>
                    <Link to={ROUTES.SIGN_UP}>
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
