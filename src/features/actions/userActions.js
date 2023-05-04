import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {
    clearError,
    loginFail,
    loginRequest,
    loginSuccess,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    // logoutSuccess,
    // logoutFail,
    // updateProfileRequest,
    // updateProfileSuccess,
    // updateProfileFail,
    // updatePasswordFail,
    // updatePasswordRequest,
    // updatePasswordSuccess,
    // forgotPasswordRequest,
    // forgotPasswordSuccess,
    // forgotPasswordFail,
    // resetPasswordRequest,
    // resetPasswordSuccess,
    // resetPasswordFail
} from "../slices/authSlice";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, shoppyDoData, storage } from "../../firebase/config";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

export const login = ({ userEmailId, userPassword }) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const q = query(collection(shoppyDoData, "users"), where("userEmailId", "==", userEmailId));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs[0].data();
        const res = await signInWithEmailAndPassword(auth, userEmailId, userPassword);
        localStorage.setItem('shoppyDo_userKey', JSON.stringify(`${res.user.uid}-shoppydo`));
        dispatch(loginSuccess(userData))
    } catch (error) {
        dispatch(loginFail(error.messages));
    }
}

export const register = ({
    userName,
    userEmailId,
    userPhoneNumber,
    userDateOfBirth,
    userProfileImg,
    userPassword,
    userRole,
    userPremium,
    userCartItems,
    userCartItemsCount
}) => async (dispatch) => {

    let getDateValue = new Date();
    let getMonth = getDateValue.getMonth() + 1
    let userJoinedOn = getDateValue.getDate() + '/' + getMonth + '/' + getDateValue.getFullYear();

    try {
        dispatch(registerRequest());


        const res = await createUserWithEmailAndPassword(auth, userEmailId, userPassword)

        const storageRef = ref(storage, `user_image/${userName}`);

        const uploadTask = uploadBytesResumable(storageRef, userProfileImg);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default: return;
                }
            },
            (error) => {
                dispatch(registerFail(error.message))
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                    await setDoc(doc(shoppyDoData, 'users', `${res.user.uid}-shoppydo`), {
                        userName,
                        userEmailId,
                        userPhoneNumber,
                        userDateOfBirth,
                        userProfileImg: downloadURL,
                        userRole,
                        userPremium,
                        userCartItems,
                        userCartItemsCount,
                        userJoinedOn
                    })

                    localStorage.setItem('shoppyDo_userKey', JSON.stringify(`${res.user.uid}-shoppydo`));

                    const q = query(collection(shoppyDoData, "users"), where("userEmailId", "==", userEmailId));
                    const querySnapshot = await getDocs(q);
                    const userData = querySnapshot?.docs[0]?.data();
                    dispatch(registerSuccess(userData));
                });
            }
        );
    } catch (error) {
        dispatch(registerFail(error.message))
    }

}
export const loadUser = async (dispatch) => {

    const userLocalId = JSON.parse(localStorage.getItem('shoppyDo_userKey')) ? JSON.parse(localStorage.getItem('shoppyDo_userKey')) : null;

    try {
        dispatch(loadUserRequest())
        if (userLocalId) {
            const userDocRef = doc(shoppyDoData, "users", userLocalId);
            const snap = await getDoc(userDocRef);
            const userData = snap?.data();
            dispatch(loadUserSuccess(userData))
            console.log(snap);
        } else if (!userLocalId || userLocalId === undefined || userLocalId === null) {
            dispatch(loadUserFail("User Key Not Found"));
        }
    } catch (error) {
        dispatch(loadUserFail(error.message))
    }
}
export const logout = async () => {
    // try {
    //     await axios.get(`/api/v1/logout`)
    //     dispatch(logoutSuccess())
    // } catch (error) {
    //     dispatch(logoutFail(error.response.data.message))
    // }
}
export const updateProfile = async () => {
    // try {
    //     dispatch(updateProfileRequest())
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }
    //     const { data } = await axios.put('/api/v1/update', userData, config)
    //     dispatch(updateProfileSuccess(data))
    // } catch (error) {
    //     dispatch(updateProfileFail(error.response.data.message))
    // }
}
export const updatePassword = async () => {
    // try {
    //     dispatch(updatePasswordRequest())
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }

    //     await axios.put('/api/v1/password/change', formData, config)
    //     dispatch(updatePasswordSuccess())
    // } catch (error) {
    //     dispatch(updatePasswordFail(error.response.data.message))
    // }
}
export const forgotPassword = async () => {
    // try {
    //     dispatch(forgotPasswordRequest())
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }

    //     const { data } = await axios.post('/api/v1/password/forgot', formData, config)
    //     dispatch(forgotPasswordSuccess(data))
    // } catch (error) {
    //     dispatch(forgotPasswordFail(error.response.data.message))
    // }
}
export const resetPassword = async () => {
    // try {
    //     dispatch(resetPasswordRequest())
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }

    //     const { data } = await axios.post(`/api/v1/password/reset/${token}`, formData, config)
    //     dispatch(resetPasswordSuccess(data))
    // } catch (error) {
    //     dispatch(resetPasswordFail(error.response.data.message))
    // }
}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const getUsers = async () => {
    // try {
    //     dispatch(usersRequest())

    //     const { data } = await axios.get(`/api/v1/admin/users`)
    //     dispatch(usersSuccess(data))
    // } catch (error) {
    //     dispatch(usersFail(error.response.data.message))
    // }
}
export const getUser = async () => {
    // try {
    //     dispatch(userRequest())

    //     const { data } = await axios.get(`/api/v1/admin/user/${id}`)
    //     dispatch(userSuccess(data))
    // } catch (error) {
    //     dispatch(userFail(error.response.data.message))
    // }
}
export const deleteUser = async () => {
    // try {
    //     dispatch(deleteUserRequest())

    //     await axios.delete(`/api/v1/manager/users/${id}`)
    //     dispatch(deleteUserSuccess())
    // } catch (error) {
    //     dispatch(deleteUserFail(error.response.data.message))
    // }
}
export const updateUser = async () => {
    // try {
    //     dispatch(updateUserRequest())
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }

    //     await axios.put(`/api/v1/manager/users/${id}`, formData, config)
    //     dispatch(updateUserSuccess())
    // } catch (error) {
    //     dispatch(updateUserFail(error.response.data.message))
    // }
}