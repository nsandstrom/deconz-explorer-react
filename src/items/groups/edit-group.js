import React, { useState } from 'react'
import DeconzClient from '../../api/deconz-client'
import './group.scss'

export const EditGroup = ({ group }) => {
  const [visible, setVisible] = useState(false)
  const [attributes, setAttributes] = useState({ name: group.name })

  const nameHasChanged = () => group.name !== attributes.name
  const updateName = event => {
    setAttributes({ ...attributes, name: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newAttributes = {}
    Object.entries(attributes).forEach(([key, value]) => {
      if (group[key] !== value) newAttributes[key] = value
    })

    if (Object.keys(newAttributes).length < 1) return

    DeconzClient.updateGroup(group.id, newAttributes).then(setVisible(false))
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
              {nameHasChanged() && '*'}
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
