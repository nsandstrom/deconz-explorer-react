import React from 'react'
import { devStoreIsValid, DevStore } from './dev-store'
import { MemoryStore } from './memory-store'

export const UrlStore = ({ setUrl }) => {
  return (
    <div>
      {devStoreIsValid() && <DevStore setUrl={setUrl} />}
      <MemoryStore setUrl={setUrl} />
    </div>
  )
}
