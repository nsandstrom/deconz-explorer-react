import React, { useState } from 'react'
import { Item } from './item'
import './items.scss'

export const Sensor = ({ sensor }) => {
  return <Item item={sensor}></Item>
}
