export function storeJwt(jwtToken) {
  localStorage.setItem('jwt', jwtToken)
}

export function removeJwt() {
  localStorage.removeItem('jwt')
}

export function getJwt() {
  return localStorage.getItem('jwt')
}