let DevStore 
if (process.env.NODE_ENV === 'development'){
  const { devStoreIsValid, devStore } = require('./dev-store')
    DevStore = devStore
}

import React from 'react'
import { MemoryStore } from './memory-store'

export const UrlStore = ({ setUrl }) => {
  return (
    <div>
      {DevStore && <DevStore setUrl={setUrl} />}
      <MemoryStore setUrl={setUrl} />
    </div>
  )
}
