export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error('Nu s-au putut încărca utilizatorii')
  }

  const users = await response.json()
  return users
}