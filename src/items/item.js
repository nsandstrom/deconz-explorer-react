import React, { useState } from 'react'
import { printValue } from './shared'
import './items.scss'

export const Item = ({ item, children }) => {

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item" onClick={toggleExpanded}>
      <ExpandButton expanded={expanded} />
      <Header item={item} />
      {children}

      {expanded && <ExtraInfo item={item} />}
    </div>
  )
}

const Header = ({ item }) => (
  <div>
    <Id>{item.id}</Id>
    <Title>{item.name}</Title>
    <Type>{item.type}</Type>
    <Type>{item.status}</Type>
  </div>
)

const Id = ({ children }) => <span className="id">{children}</span>
const Title = ({ children }) => <h3 className="title">{children}</h3>
const Type = ({ children }) => <span className="type">{children}</span>


const ExpandButton = ({ expanded }) => {
  return <span className="arrow"> {expanded ? '/\\' : '\\/'}</span>
}

const ExtraInfo = ({ item }) => {
  return (
    <div className="details">
      {Object.entries(item).map(([key, value]) => {
        return (
          <div key={key}>
            {key} : {printValue(value)}
          </div>
        )
      })}
    </div>
  )
}
