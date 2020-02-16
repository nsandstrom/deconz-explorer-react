let config
if (process.env.NODE_ENV === 'development') {
  config = require('../dev-settings.json')
} else {
  config = {}
}
const URL = config.API_URL

const fetchAll = () => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw { status: response.status }
        }
        return response
      })
      .then(response => response.json())
      .then(resolve)
      .catch(reject)
  })
}

export default { fetchAll }

class ApiError extends Error {
  constructor(message) {
    super()
    this.customMessage = message
  }
}
