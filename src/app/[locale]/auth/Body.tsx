'use client'
import React, { useEffect } from 'react'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../store";
import { setCookie } from 'cookies-next';

interface Props {
  children: React.ReactNode
  className: string
}
const Body = ({children, className}: Props) => {
  useEffect(() => {
    const fetchIp = async () => {
      const response : any = await fetch("https://api.ipify.org/?format=json")
      const data : any = await response.json()
      setCookie("user-ip", data.ip)
    }
    fetchIp();
  }, []);
  return (
    <body className={className}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </body>
  )
}

export default Body