import React, { useState } from 'react'
import { printValue } from './shared'
import './items.scss'

export const Group = ({ id, group }) => {
  group.id = id
  const state = group.state

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item" onClick={toggleExpanded}>
      <ExpandButton expanded={expanded} />
      <Header item={group} />

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
const Title = ({ children }) => <span className="title">{children}</span>
const Type = ({ children }) => <span className="type">{children}</span>

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
