export const USER_SELECTED = 'USER_SELECTED'

// action creator qui…
export function selectUser(user) {
  // console.log(`selected: ${user.name}`);
  // …retourne une action
  return {
    type: USER_SELECTED,
    payload: user
  }
}