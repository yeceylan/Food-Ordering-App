import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showChechout: () => {},
    hideChecout: () => {}
});

export function UserprogressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideChecout() {
        setUserProgress('');
    }

    const userProgresCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideChecout
    }
    return (
        <UserProgressContext.Provider value={userProgresCtx}>
            {children}
        </UserProgressContext.Provider>
    );

}

export default UserProgressContext;