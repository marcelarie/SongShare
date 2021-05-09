import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { updateUserInfoMidleware } from '../../redux/user/user-actions';

function MainInfoForm() {
    const dispatch = useDispatch();

    const history = useHistory();

    const currentUser = useSelector(store => store.user);

    const [username, setUsername] = useState(currentUser.username);
    const [name, setName] = useState(currentUser.name);
    const [lastname, setLastName] = useState(currentUser.lastname);
    const [email, setEmail] = useState(currentUser.email);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            updateUserInfoMidleware({
                username,
                name,
                lastname,
            }),
        );
        history.push(`/${username}/Info`);
    };

    return (
        <form className="user__main__edit__form" onSubmit={handleSubmit}>
            <div className="user__main__edit__form__data">
                <div className="user__main__edit__form__data__inputs">
                    <div className="inputs">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="given-name"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="inputs">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="inputs">
                        <label htmlFor="lastname">Last name</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            autoComplete="given-name"
                            value={lastname}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="given-name"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleSubmit}
            >
                Save
            </button>
        </form>
    );
}
export default MainInfoForm;
