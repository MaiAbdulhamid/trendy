'use client'
import React, { useEffect } from 'react'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import axiosInstance from './lib/axios';
import cache from '@mongez/cache';

interface Props {
  children: React.ReactNode
  className: string
}
const Body = ({children, className}: Props) => {
  useEffect(() => {
    const getGuestToken = async () => {
      const response = await axiosInstance.post('create_account_random');
      cache.set("guestToken", response.data.data.jwt_token)
    }

    getGuestToken()
  }, [])
  return (
    <body className={className}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </body>
  )
}

export default Body