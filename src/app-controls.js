let reloadAll = () => {}

const init = controls => {
  try {
    App.reloadAll = controls.reloadAll
    App.hej = 'hejhej'
  } catch (error) {
    console.log(error)
  }
}

export const App = { reloadAll: () => {} }

export default { init, reloadAll }
