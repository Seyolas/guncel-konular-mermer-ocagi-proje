import React, { useState, useContext, useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { user, error, isLoading } = useUser();


  return <AppContext.Provider value={{ user, error, isLoading }}>{children}</AppContext.Provider>

}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }