import React, { useState, useEffect } from "react"
import DeconzClient from "./deconz-client"
import { parseData } from "./data-scrubber"
import { Light } from "./light"
import { Sensor } from "./sensor"
import { Group } from "./group"

let config
if (process.env.NODE_ENV === 'development') {
  config = require('../dev-settings.json')
} else {
  config = {}
}

export const Application = () => {
  const [apiData, setApiData] = useState({
    lights: {},
    sensors: {},
    groups: {}
  })

  useEffect(() => {
    const client = DeconzClient.init(config.API_URL)
    client.fetchAll().then(data => {
      const prettyData = parseData(data)
      setApiData(prettyData)
    })
  }, [])

  return (
    <div>
      <Content apiData={apiData} />
    </div>
  )
}

const Content = ({ apiData }) => (
  <div>
    <h2>Lights</h2>
    {Object.entries(apiData.lights).map(([id, light]) => {
      return <Light key={id} id={id} light={light} />
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
