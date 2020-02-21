import React, { useState } from 'react'
import { printValue } from './shared'
import { ItemStore } from '../item-store'
import './items.scss'

export const Group = ({ group }) => {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item" onClick={toggleExpanded}>
      <ExpandButton expanded={expanded} />
      <Header item={group} />

      {group.lights.length > 0 && <Lights lights={group.lights} />}

      {expanded && <ExtraInfo group={group} />}
    </div>
  )
}

const Header = ({ item }) => (
  <div>
    <Id>{item.id}</Id>
    <Title>{item.name}</Title>
    <Type>{item.type}</Type>
  </div>
)

const Id = ({ children }) => <span className="id">{children}</span>
const Title = ({ children }) => <h3 className="title">{children}</h3>
const Type = ({ children }) => <span className="type">{children}</span>

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

const ExpandButton = ({ expanded }) => {
  return <span className="arrow"> {expanded ? '/\\' : '\\/'}</span>
}

const ExtraInfo = ({ group }) => {
  return (
    <div className="details">
      {Object.entries(group).map(([key, value]) => {
        return (
          <div key={key}>
            {key} : {printValue(value)}
          </div>
        )
      })}
    </div>
  )
}
