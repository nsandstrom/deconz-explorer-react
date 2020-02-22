import React, { useState } from 'react'
import { printValue } from './shared'
import './items.scss'

export const Item = ({ item, children }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="item">
      <ExpandButton expanded={expanded} toggleExpanded={toggleExpanded} />
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
  </div>
)

const Id = ({ children }) => <span className="id">{children}</span>
const Title = ({ children }) => <h3 className="title">{children}</h3>
const Type = ({ children }) => <span className="type">{children}</span>

const ExpandButton = ({ expanded, toggleExpanded }) => {
  return (
    <span className="arrow">
      <button onClick={toggleExpanded}>{expanded ? '/\\' : '\\/'}</button>
    </span>
  )
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

export const List = ({ title, items }) => (
  <div className="sub-items">
    <h4>{title}</h4>
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)
