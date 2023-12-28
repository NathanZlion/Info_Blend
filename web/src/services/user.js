import serverPath from './server-path'
import { getJwt, storeJwt, removeJwt } from './jwt'
import errorIfNotOk  from './error-if-not-ok'
// File level Utils

// Regestration
export async function sendVerificationCode(email) {
  const endPoint = `${serverPath}/user/sendcode`
  const res = await fetch(endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  await errorIfNotOk(res)

  const { message } = await res.json()
  return { message }
}

export async function verifyCode({ email, verificationCode }) {
  const endPoint = `${serverPath}/user/verifyemail`
  const res = await fetch(endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verificationCode }),
  })

  await errorIfNotOk(res)

  const { token, message } = await res.json()
  return { token, message }
}

export async function regester({
  userName,
  email,
  password,
  interests,
  country,
  signupToken,
}) {
  const endPoint = `${serverPath}/user/register`
  const res = await fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${signupToken}`,
    },
    body: JSON.stringify({ userName, email, password, interests, country }),
  })

  await errorIfNotOk(res)

  //user has userName, email, interests, country
  const { token, user } = await res.json()
  storeJwt(token)
}

//Session Management
export async function login({ email, password }) {
  const endPoint = `${serverPath}/user/login`
  const res = await fetch(endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  await errorIfNotOk(res)

  //user has userName, email, interests, country
  const { token, user } = await res.json()
  storeJwt(token)
}

export async function logout() {
  removeJwt()
}

//Profile Management
export async function getProfile() {
  const endPoint = `${serverPath}/user/getme`
  const res = await fetch(endPoint, {
    method: 'GET',
    headers: { Authorization: `Bearer ${getJwt()}` },
  })

  await errorIfNotOk(res)
  const { token, user } = await res.json()
  const { userName: name, email, password, interests, country } = user
  return { name, email, password, interests, country }
}

export async function updateProfile({ userName, interests, password, country }) {
  const endPoint = `${serverPath}/user`
  const res = await fetch(endPoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getJwt()}`,
    },
    body: JSON.stringify({ userName, interests, country, password}),
  })

  await errorIfNotOk(res)
  const { token, user } = await res.json()
  return {
    name: user.userName,
    email: user.email,
    interests: user.interests,
    country: user.country,
  }
}

//UNTESTED ON POSTMAN
export async function deleteUser() {
  const endPoint = `${serverPath}/user`
  const res = await fetch(endPoint, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getJwt()}` },
  })
  await errorIfNotOk(res)

  removeJwt()
  const { message } = await res.json()
  return message
}
