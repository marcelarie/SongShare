import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateUserAvatarPhoto,
    updateUserCoverPhoto,
} from '../../redux/user/user-actions';
import { fileTypes } from '../../services/cloudinary';

function useChangePictures() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const fileType = fileTypes.IMAGE;

    const [coverFile, setCoverFile] = useState();
    const [coverPic, setCoverPic] = useState(
        user.coverImageUrl ||
            'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png',
    );

    const [avatarFile, setAvatarFile] = useState();
    const [avatarPic, setAvatarPic] = useState(
        user.imageUrl ||
            'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png',
    );

    const handleAvatarSubmit = e => {
        e.preventDefault();
        dispatch(updateUserAvatarPhoto({ file: avatarFile, fileType }));
    };

    const handleCoverSubmit = e => {
        e.preventDefault();
        dispatch(updateUserCoverPhoto({ file: coverFile, fileType }));
    };

    const pictureSubmits = {
        handleAvatarSubmit,
        handleCoverSubmit,
    };

    const onPictureChange = (e, mode) => {
        const files = e.target.files;
        if (files) {
            if (mode === 'cover') setCoverFile(files[0]);
            if (mode === 'avatar') setAvatarFile(files[0]);
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                if (mode === 'cover') setCoverPic(reader.result);
                if (mode === 'avatar') setAvatarPic(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return {
        pictureSubmits,
        onPictureChange,
        avatarPic,
        coverPic,
    };
}

export default useChangePictures;
