class _ItemStore {
  constructor() {
    this.lights = []
    this.switches = []
  }

  update(apiData) {
    if (apiData) {
      this.lights = apiData.lights
      this.switches = apiData.switches
    } else {
      this.lights = []
      this.switches = []
    }
  }

  light(id) {
    return this.lights.find(byIdFinder(id))
  }

  switch_(id) {
    return this.switches.find(byIdFinder(id))
  }
}

const byIdFinder = id => entry => entry.id == id

export const ItemStore = new _ItemStore()
