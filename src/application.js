import React, { useState, useEffect } from 'react'
import DeconzClient from './api/deconz-client'
import { UrlStore } from './api-url-store'
import { parseData } from './data-scrubber'
import { Items } from './items'
import { ItemStore } from './item-store'
import AppControls from './app-controls'

export const Application = () => {
  const [apiUrl, setApiUrl] = useState('')
  const [apiData, setApiData] = useState()

  useEffect(() => {
    if (!apiUrl) return
    updateItems()
  }, [apiUrl])

  const updateItems = () => {
    const client = DeconzClient.init(apiUrl)
    client.fetchAll().then(data => {
      const prettyData = parseData(data)

      ItemStore.update(prettyData)

      setApiData(prettyData)
    })
  }

  AppControls.init({ reloadAll: updateItems })

  const shouldShowContent = !!apiData
  const hasApiUrl = !!apiUrl

  return (
    <div>
      {hasApiUrl && <button onClick={() => setApiUrl('')}>Clear API path</button>}
      {hasApiUrl && <button onClick={() => updateItems()}>Reload</button>}

      {!hasApiUrl && <UrlStore setUrl={setApiUrl} />}

      {shouldShowContent && <Items apiData={apiData} />}
    </div>
  )
}
