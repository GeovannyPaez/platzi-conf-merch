import React, { createContext } from 'react'
import useInitialState from '../hoocks/useInitialState';
const  AppContext= createContext();

function AppContextProvider({children}) {
    const [state,{addToCar,removeFromCar,removeOneCount,addToBuyer,addNewOrder}]= useInitialState();
    
    const values= {
        state,
        addToCar,
        removeFromCar,
        removeOneCount,
        addToBuyer,
        addNewOrder
    }
  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )
}

export {AppContext,AppContextProvider}