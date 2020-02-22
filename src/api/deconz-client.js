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

const updateGroup = (id, attributes) => {
  return new Promise((resolve, reject) => {
    const url = URL + '/groups/' + id

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attributes)
    }

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw { status: response.status }
        }
        return response
      })
      .then(resolve)
      .catch(reject)
  })
}

const client = { fetchAll, updateGroup }

export default { init, updateGroup }

class ApiError extends Error {
  constructor(message) {
    super()
    this.customMessage = message
  }
}
