import React from 'react'
import { ItemStore } from '../item-store'
import { Item } from './item'
import './items.scss'

export const Group = ({ group }) => {

  return (
    <Item item={group}>
      {group.lights.length > 0 && <Lights lights={group.lights} />}
    </Item>
  )
}


const Lights = ({ lights }) => (
  <div className="member-lights">
    <h4>Lights</h4>
    <ul>
      {lights.map(id => (
        <Light key={id}>{ItemStore.light(id).name}</Light>
      ))}
    </ul>
  </div>
)

const Light = ({ children }) => <li className="member-light">{children}</li>
