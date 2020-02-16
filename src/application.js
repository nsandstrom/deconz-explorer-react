import React, { useState, useEffect } from 'react'
import DeconzClient from './api/deconz-client'
import { UrlStore } from './api-url-store'
import { parseData } from './data-scrubber'
import { Light } from './light'
import { Sensor } from './sensor'
import { Group } from './group'

export const Application = () => {
  const [apiUrl, setApiUrl] = useState('')
  const [apiData, setApiData] = useState()

  useEffect(() => {
    if (!apiUrl) return

    const client = DeconzClient.init(apiUrl)
    client.fetchAll().then(data => {
      const prettyData = parseData(data)
      setApiData(prettyData)
    })
  }, [apiUrl])

  const shouldShowContent = !!apiData
  const hasApiUrl = !!apiUrl

  return (
    <div>
      {!hasApiUrl && <UrlStore setUrl={setApiUrl} />}

      {shouldShowContent && <Content apiData={apiData} />}
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
