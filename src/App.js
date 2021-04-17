import React from 'react'
import { Routes } from 'routes'
import SnackBar from 'components/SnackBar'

import { StateContextProvider, StateReducer, InitialState } from 'context'

export default function App() {
  return (
    <StateContextProvider reducer={StateReducer} initialState={InitialState}>
      <Routes />
      <SnackBar />
    </StateContextProvider>
  )
}
