export * from './post'
export * from './user'
export * from './comments'

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
