"use client"

import React, { Children } from 'react'
import store from "../redux/store";
import { Provider } from "react-redux";

const ProviderWrapper = ({ children }: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderWrapper
