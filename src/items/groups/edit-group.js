import React, { useState } from 'react'
import DeconzClient from '../../api/deconz-client'
import { App } from '../../app-controls'
import './group.scss'

export const EditGroup = ({ group }) => {
  const [visible, setVisible] = useState(false)
  const [attributes, setAttributes] = useState({ name: group.name, lights: [...group.lights] })

  const nameHasChanged = () => group.name !== attributes.name
  const updateName = event => {
    setAttributes({ ...attributes, name: event.target.value })
  }

  const lightsHasChanged = () => group.lights.sort().join() !== attributes.lights.sort().join()
  const updateLights = members => {
    setAttributes({ ...attributes, lights: members })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newAttributes = {}
    Object.entries(attributes).forEach(([key, value]) => {
      if (group[key] !== value) newAttributes[key] = value
    })

    if (Object.keys(newAttributes).length < 1) return

    DeconzClient.updateGroup(group.id, newAttributes)
      .then(() => App.reloadAll())
      .then(() => setVisible(false))
      .catch(error => console.log(error))
  }

  return (
    <div className="edit">
      <button onClick={() => setVisible(true)}>*</button>
      {visible && (
        <div className="container">
          <div className="content">
            <h3>Edit '{group.name}'</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" value={attributes.name} onChange={updateName} />
              {nameHasChanged() && ' *'}
              <br />
              <label>Lights</label>
              {lightsHasChanged() && ' *'}
              <LightsList members={attributes.lights} updateMembers={updateLights} />
              <br />
              <button type="submit">OK</button>
            </form>
            <button onClick={() => setVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

const LightsList = ({ members, updateMembers }) => {
  const lights = ItemStore.lights
  const isMember = id => members.includes(id)

  const handleClick = id => {
    if (isMember(id)) {
      members = members.filter(member => member !== id)
    } else {
      members.push(id)
    }
    updateMembers(members)
  }
  return (
    <ul>
      {lights.map(light => (
        <li key={light.id}>
          <input type="checkbox" onChange={() => handleClick(light.id)} checked={isMember(light.id)} />
          {light.name}
        </li>
      ))}
    </ul>
  )
}
