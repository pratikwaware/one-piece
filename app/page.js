"use client"
import React from 'react'
import '../styles/globals.css'
import OnePiece from './OnePiece'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const page = () => {
    
  return (
    <Provider store={store}>
      <div>
          <OnePiece />
      </div>
    </Provider>
  )
}

export default page;
