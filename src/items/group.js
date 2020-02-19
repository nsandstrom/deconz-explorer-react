import React, { useState } from 'react'
import { printValue } from './shared'
import './items.scss'

export const Group = ({ id, group }) => {
  const state = group.state

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item" onClick={toggleExpanded}>
      {id} <span className="title">{group.name}</span> {group.type}{' '}
      <ExpandButton expanded={expanded} />
      {expanded && <ExtraInfo group={group} />}
    </div>
  )
}

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
