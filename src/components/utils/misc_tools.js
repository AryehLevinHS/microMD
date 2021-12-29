import React from 'react'
import {ActivityIndicator } from 'react-native'

//=============================================================================
// Loading  - determinins if its loading
// need to pass in if loading 
//=============================================================================
export const loading = (isLoading) => {
     return (isLoading ?  <ActivityIndicator size="small" color="#0000ff" /> : null )
}
//=============================================================================r