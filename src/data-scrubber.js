export const parseData = data => {
  const lights = parseLights(data.lights)
  const sensors = parseSensors(data.sensors)
  const switches = parseSwitches(data.sensors)
  const groups = parseGroups(data.groups)
  return { lights, sensors, groups, switches }
}

const parseLights = raw => {
  return dictionaryToArray(raw)
}

const parseSensors = raw => {
  const sensors = dictionaryToArray(raw)
  return selectSensors(sensors)
}

const parseSwitches = raw => {
  const sensors = dictionaryToArray(raw)
  return selectSwitches(sensors)
}

const parseGroups = raw => {
  const groups = dictionaryToArray(raw)
  return cleanupGroups(groups)
}

const dictionaryToArray = dict => Object.entries(dict).map(([id, entry]) => ({ id, ...entry }))

const cleanupGroups = groups => groups.map(cleanupGroup)
const cleanupGroup = group => {
  if (group.devicemembership.length > 0) group.type = 'DeviceGroup'
  return group
}

const selectSwitches = sensors => sensors.filter(detectSwitch)
const detectSwitch = sensor => {
  return sensor.type === 'ZHASwitch'
}

const selectSensors = sensors => sensors.filter(detectSensor)
const detectSensor = sensor => {
  return sensors.includes(sensor.type)
}

const sensors = ['ZHATemperature', 'ZHAHumidity', 'ZHAPressure', 'ZHAOpenClose', 'ZHALightLevel', 'ZHAPresence']
