import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

function LikeIcon({ likes, handleLike }) {
    const [active, setActive] = useState(false);
    const currentUser = useSelector(({ user }) => user);

    useEffect(() => {
        if (likes.findIndex(like => like === currentUser._id) >= 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [likes, currentUser._id]);

    return (
        <svg
            x="0"
            y="0"
            width="10px"
            height="10px"
            viewBox="0 0 60 60"
            className={
                active
                    ? 'icon is-hoverable is-transit is-activeable active'
                    : 'icon is-outlined is-hoverable is-transit is-activeable'
            }
            onClick={() => {
                handleLike();
                /*
         const str = `"${e.target.parentElement.className.baseVal}"`;
         console.log(e.target.parentElement.className.baseVal)

         if(e.target.parentElement.className.baseVal.includes('active')) {
            e.target.parentElement.className.baseVal.replace('active', '')
         } else {
            e.target.parentElement.className.baseVal.concat((' ', 'active'))
         } */
            }}
        >
            <path
                d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
  C30,20.335,16,28.261,16,28.261z"
            />
        </svg>
    );
}

export default LikeIcon;
