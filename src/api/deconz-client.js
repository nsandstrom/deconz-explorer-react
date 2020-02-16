let URL

const init = url => {
  URL = url
  return client
}

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

const client = { fetchAll }

export default { init }

class ApiError extends Error {
  constructor(message) {
    super()
    this.customMessage = message
  }
}

