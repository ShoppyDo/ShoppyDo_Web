import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const { isAuthenticated, user } = useSelector(state => state.authState);

    const handleCartItemsCount = () => {
        console.log("Just an API call");
        console.log(userCartItemsCount);
    }

    useEffect(() => {
        if (isAuthenticated) {
            setUserCartItemsCount(user.userCartItems.length);
        } else {
            setUserCartItemsCount(0);
        }
    }, [isAuthenticated, user])

    const [userCartItemsCount, setUserCartItemsCount] = useState(isAuthenticated ? user.userCartItems.length : 0);
    console.log(user?.userCartItems?.length);

    return (
        <UserContext.Provider value={{ userCartItemsCount, handleCartItemsCount }}>
            {children}
        </UserContext.Provider>
    )
}