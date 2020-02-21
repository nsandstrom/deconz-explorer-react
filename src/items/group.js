import React from 'react'
import { ItemStore } from '../item-store'
import { Item, List } from './item'
import './items.scss'

export const Group = ({ group }) => {
  const isDeviceMember = () => group.type === 'DeviceGroup'

  return (
    <Item item={group}>
      {isDeviceMember() && <Devices devices={group.devicemembership} />}
      {group.lights.length > 0 && <Lights lights={group.lights} />}
    </Item>
  )
}

const makeLightList = lights => lights.map(getLightName)
const makeDeviceList = devices => devices.map(getSwitchName)

const getLightName = id => {
  const light = ItemStore.light(id)
  if (!light) return 'Unknown light, id: ' + id
  return light.name
}

const getSwitchName = id => {
  const switch_ = ItemStore.switch_(id)
  if (!switch_) return 'Missing switch, id: ' + id
  return switch_.name
}

const Lights = ({ lights }) => <List title="Lights" items={makeLightList(lights)} />
const Devices = ({ devices }) => <List title="Device membership" items={makeDeviceList(devices)} />
