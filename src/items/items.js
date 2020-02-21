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
    {apiData.sensors.map(sensor => {
      return <Sensor key={sensor.id} sensor={sensor} />
    })}
    <h2>Groups</h2>
    {apiData.groups.map(group => {
      return <Group key={group.id} group={group} />
    })}
  </div>
)
