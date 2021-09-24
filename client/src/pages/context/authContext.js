import React, { createContext ,useContext} from 'react'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    return (
        <AuthContext.Provider>
           {children} 
        </AuthContext.Provider>
    )
}
