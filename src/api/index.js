export * from './user'

export const getConfig = () => {
  const token = localStorage.getItem('access')
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  return config
}
