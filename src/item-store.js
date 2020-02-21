class _ItemStore {
  constructor() {
    this.lights = []
  }

  update(apiData) {
    if (apiData) {
      this.lights = apiData.lights
    } else {
      this.lights = []
    }
  }

  light(id) {
    return this.lights.find(byIdFinder(id))
  }
}

const byIdFinder = id => entry => entry.id == id

export const ItemStore = new _ItemStore()
