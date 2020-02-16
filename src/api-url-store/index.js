import React from 'react'
import { devStoreIsValid, DevStore } from './dev-store'
import { MemoryStore } from './memory-store'

export const UrlStore = ({ setUrl }) => {
  return (
    <div>
      {showDevStore() && <DevStore setUrl={setUrl} />}
      <MemoryStore setUrl={setUrl} />
    </div>
  )
}

const showDevStore = () =>
  process.env.NODE_ENV === 'development' && devStoreIsValid()
