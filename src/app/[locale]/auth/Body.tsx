'use client'
import React from 'react'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../store";

interface Props {
  children: React.ReactNode
  className: string
}
const Body = ({children, className}: Props) => {
  return (
    <body className={className}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </body>
  )
}

export default Body