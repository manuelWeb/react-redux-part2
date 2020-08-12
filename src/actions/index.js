export const USER_SELECTED = 'USER_SELECTED'
export const DEV_SELECTED = 'DEV_SELECTED'

// action creator qui…
export function selectUser(user) {
  // console.log(`selected: ${user.name}`);
  // …retourne une action
  return {
    type: USER_SELECTED,
    payload: user
  }
}

export function devUser(dev) {
  return {
    type: DEV_SELECTED,
    payload: dev
  }

}