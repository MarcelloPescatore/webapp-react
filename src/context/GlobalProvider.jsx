import { createContext, useContext, useState } from 'react'

const LoadingContext = createContext();

export const GlobalProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)

    return(
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)