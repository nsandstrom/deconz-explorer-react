import React, { useEffect } from 'react'
const devSettings = require('../../dev-settings.json')
const url = devSettings.API_URL

let isFirstLoad = true

export const devStoreIsValid = () => url !== undefined

export const DevStore = props => {
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
