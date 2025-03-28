import { createContext } from "react";

export const AppContext=createContext();

const ContextProvider=(props)=>{

    const phone="+91 12552222221"
    const name="Nilaj"
    return (
        <AppContext.Provider value={{phone,name}}>

            {props.children}
        </AppContext.Provider>



    )

}

export default ContextProvider;