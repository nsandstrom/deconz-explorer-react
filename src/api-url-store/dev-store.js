let url
try {
  const devSettings = require('../../dev-settings.json')
  url = devSettings.API_URL
} catch (error) {}

import React, { useEffect } from 'react'
let isFirstLoad = true

const devStoreIsValid = () => url !== undefined

const DevStore = props => {
  useEffect(() => {
    if (isFirstLoad) setUrl()
  }, [])

  const setUrl = () => {
    isFirstLoad = false
    props.setUrl(url)
  }

  return (
    <div>
      <h3>Dev config</h3>
      <button onClick={setUrl}>USE DEV URL</button>
    </div>
  )
}

export const devStore = devStoreIsValid() ? DevStore : undefined
