import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Iconicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'

const HeaderBtn = (props) => {
  return (
    <HeaderButton { ...props } IconComponent={ Iconicons } iconSize={ 23 } color={ Platform.OS === 'android' ? '#fff' : Colors.primary }/>
  )
}

export default HeaderBtn
