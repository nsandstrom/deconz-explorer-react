import React from 'react'
import { Light } from './light'
import { Sensor } from './sensor'
import { Switch } from './switch'
import { Group } from './groups/group'

export const Items = ({ apiData }) => (
  <div>
    <h2>Lights</h2>
    {apiData.lights.map(light => {
      return <Light key={light.id} light={light} />
    })}
    <h2>Switches</h2>
    {apiData.switches.map(switch_ => {
      return <Switch key={switch_.id} switch_={switch_} />
    })}
    <h2>Groups</h2>
    {apiData.groups.map(group => {
      return <Group key={group.id} group={group} />
    })}
    <h2>Sensors</h2>
    {apiData.sensors.map(sensor => {
      return <Sensor key={sensor.id} sensor={sensor} />
    })}
  </div>
)
