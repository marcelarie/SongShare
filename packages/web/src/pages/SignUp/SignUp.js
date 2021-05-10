import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
    resetAuthState,
    signUpWithEmailRequest,
} from '../../redux/auth/auth-actions';
import { authSelector } from '../../redux/auth/auth-selectors';
import * as ROUTES from '../../routes';
import '../../styles/GenericForm.scss';
import Button from '../../styles/components/Button/GenericButton';
import Input from '../../styles/components/Input/GenericInput';
import DarkLightToggle from '../../components/DarkLightToggle';

function SignUp() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(authSelector);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const { theme } = useSelector(store => store.changeTheme);

    useEffect(() => {
        dispatch(resetAuthState());
    }, [dispatch]);

    async function handleSubmit(e) {
        e.preventDefault();

        dispatch(
            signUpWithEmailRequest({
                name,
                lastname,
                email,
                username,
                password,
            }),
        );

        setEmail('');
        setPassword('');
        setName('');
        setLastname('');
        setUsername('');
    }

    if (isAuthenticated) {
        return <Redirect to={ROUTES.HOME} />;
    }

    return (
        <div className="form-container welcomePage">
            <h2 className="header">Create your account </h2>
            <div className="welcomePage__theme">
                <DarkLightToggle theme={theme} />
            </div>
            <form action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">First name</label>
                    <Input
                        type="text"
                        id="Name"
                        required
                        placeholder="First name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Name">Last name</label>
                    <Input
                        type="text"
                        id="lastName"
                        required
                        placeholder="Last name"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Name">User name</label>
                    <Input
                        type="text"
                        id="username"
                        required
                        placeholder="User name"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email-address">Email address</label>
                    <Input
                        type="text"
                        id="email"
                        autoComplete="email"
                        required
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-login">
                    <Button type="submit">Sign up</Button>
                    <h3>Are you already sharing?</h3>
                    <Link to={ROUTES.LOGIN}>
                        <Button>Log in</Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default SignUp;
