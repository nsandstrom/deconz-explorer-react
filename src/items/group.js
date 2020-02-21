import React from 'react'
import { ItemStore } from '../item-store'
import { Item } from './item'
import './items.scss'

export const Group = ({ group }) => {
  const isDeviceMember = () => group.type === 'DeviceGroup'

  return (
    <Item item={group}>
      {isDeviceMember() && <Device devices={group.devicemembership} />}
      {group.lights.length > 0 && <Lights lights={group.lights} />}
    </Item>
  )
}

const getSwitchName = id => {
  const switch_ = ItemStore.switch_(id)
  if (!switch_) return 'Missing switch, id: ' + id
  return switch_.name
}

const Lights = ({ lights }) => (
  <div className="sub-items">
    <h4>Lights</h4>
    <ul>
      {lights.map(id => (
        <li key={id}>{ItemStore.light(id).name}</li>
      ))}
    </ul>
  </div>
)

const Device = ({ devices }) => (
  <div className="sub-items">
    <h4>Device membership</h4>
    <ul>
      {devices.map(id => (
        <li key={id}> {getSwitchName(id)} </li>
      ))}
    </ul>
  </div>
)
