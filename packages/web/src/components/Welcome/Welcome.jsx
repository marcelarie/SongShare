import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../styles/GenericForm.scss';
import '../../styles/flex.scss';
import './styles.scss';

import { signUpWithGoogleRequest } from '../../redux/auth/auth-actions';
import * as ROUTES from '../../routes';
import Button from '../../styles/components/Button/GenericButton';
import DarkLightToggle from '../DarkLightToggle';

function Welcome() {
    const dispatch = useDispatch();
    const { theme } = useSelector(store => store.changeTheme);

    function handleLoginWithGoogle(e) {
        e.preventDefault();
        dispatch(signUpWithGoogleRequest());
    }

    return (
        <main>
            <div className="welcomePage form-container">
                <h2 className="form-titles">
                    <span>Ready to share in?</span>
                    <span>Start your sharing today.</span>
                </h2>
                    <div className="welcomePage__theme">
                        <DarkLightToggle theme={theme} />
                    </div>
                <div className="flex-column">
                    <NavLink to={ROUTES.SIGN_UP}>
                        <Button className="form-submit" type="button">
                            Sign Up
                        </Button>
                    </NavLink>
                    <NavLink to={ROUTES.LOGIN}>
                        <Button className="form-login" type="button">
                            Login
                        </Button>
                    </NavLink>
                    <Button
                        type="button"
                        className="form-submit"
                        onClick={handleLoginWithGoogle}
                    >
                        Login with Google
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default Welcome;
