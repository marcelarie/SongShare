import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    sendPasswordResetEmail,
    resetAuthState,
} from '../../redux/auth/auth-actions';
import { authSelector } from '../../redux/auth/auth-selectors';
import Button from '../../styles/components/Button/GenericButton';
import './styles.scss';

function buttonText(loading, sent) {
    if (loading) {
        return 'Sending...';
    }

    if (sent) {
        return 'Email Sent!';
    }

    return 'Send password reset email';
}

function ResetPassword() {
    const dispatch = useDispatch();
    const {
        isSendingPasswordReset,
        passwordResetError,
        passwordResetSent,
    } = useSelector(authSelector);

    const [email, setEmail] = useState('');

    useEffect(() => {
        dispatch(resetAuthState());
    }, [dispatch]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(sendPasswordResetEmail(email));
        setEmail('');
    }

    function handleSetEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <>
            <main className="resetPassword">
                <section>
                    <p>Password Reset</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={handleSetEmail}
                            placeholder="mail@recover.pass"
                        />
                        <Button
                            type="submit"
                            className="btn btn-primary w-full"
                            disabled={
                                isSendingPasswordReset || passwordResetSent
                            }
                        >
                            {buttonText(
                                isSendingPasswordReset,
                                passwordResetSent,
                            )}
                        </Button>
                    </form>
                    {passwordResetError && (
                        <section className="mt-4">{passwordResetError}</section>
                    )}
                </section>
            </main>
        </>
    );
}

export default ResetPassword;
