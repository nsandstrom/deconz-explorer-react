import React, { useState } from 'react'
import './items.scss'

export const Sensor = ({ id, sensor }) => {
  const state = sensor.state

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item" onClick={toggleExpanded}>
      {id} <span className="title">{sensor.name}</span> {sensor.type}{' '}
      <ExpandButton expanded={expanded} />
      {expanded && <ExtraInfo sensor={sensor} />}
    </div>
  )
}

const ExpandButton = ({ expanded }) => {
  return <span className="arrow"> {expanded ? '/\\' : '\\/'}</span>
}

const ExtraInfo = ({ sensor }) => {
  const { config, state, ...rest } = sensor

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
