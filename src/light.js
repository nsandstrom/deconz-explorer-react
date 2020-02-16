import React, { useState } from 'react'
import './items.scss'

export const Light = ({ id, light }) => {
  const state = light.state

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item" onClick={toggleExpanded}>
      {id} <span className="title">{light.name}</span> {light.type},{' '}
      {state.on ? 'on' : 'off'} <ExpandButton expanded={expanded} />
      {expanded && <ExtraInfo light={light} />}
    </div>
  )
}

const ExpandButton = ({ expanded }) => {
  return <span className="arrow"> {expanded ? '/\\' : '\\/'}</span>
}

const ExtraInfo = ({ light }) => {
  const { state, ...rest } = light

  return (
    <div className="details">
      {Object.entries(rest).map(([key, value]) => {
        return (
          <div key={key}>
            {key} : {printValue(value)}
          </div>
        )
      })}
    </div>
  )
}

const printValue = value => {
  if (typeof value == 'boolean') {
    return value ? 'true' : 'false'
  }

  return value
}
