import React, { FC, PropsWithChildren, createContext, useState } from 'react'

type AuthContextType = {
isLoggedIn : boolean
setLogeedin : (isLoggedIn: boolean) => void
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn : false,
    setLogeedin : () => {}
})

export const AuthContextProvider:FC<PropsWithChildren> = ({children}) =>{
    const [isLoggedIn , setLogeedin] = useState(false)
    const defaultValue = {
    isLoggedIn ,
    setLogeedin
    }
    return (
        <AuthContext.Provider value={defaultValue}>
            {children}
        </AuthContext.Provider>
    )
}