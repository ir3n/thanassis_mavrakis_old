import { createContext } from 'react';
const MainContext = createContext({
    openCart: () => {},
    closeCart: () => {},
    toggleCart: () => {},
    cartState: false
});
export const MainProvider = MainContext.Provider;
export default MainContext;
