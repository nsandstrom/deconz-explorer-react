import React from 'react'
import { Light } from './light'
import { Sensor } from './sensor'
import { Group } from './group'

export const Items = ({ apiData }) => (
  <div>
    <h2>Lights</h2>
    {apiData.lights.map(light => {
      return <Light key={light.id} light={light} />
    })}
    <h2>Sensors</h2>
    {Object.entries(apiData.sensors).map(([id, sensor]) => {
      return <Sensor key={id} id={id} sensor={sensor} />
    })}
    <h2>Groups</h2>
    {Object.entries(apiData.groups).map(([id, group]) => {
      return <Group key={id} id={id} group={group} />
    })}
  </div>
)
