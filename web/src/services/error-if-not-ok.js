export default async function errorIfNotOk(res) {
  if (!res.ok) {
    const { message } = await res.json()
    throw new Error(message)
  }
}

