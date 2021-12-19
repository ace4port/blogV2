import React, { useEffect } from 'react'
import 'styles/main.scss'

import ErrorBoundary from 'components/ErrorBoundary'
import UI from 'pages/Guide/UI'
import { fireToast } from 'components/ui/Toast'

const useIsOnline = () => {
  const [isOnline, setIsOnline] = React.useState(window.navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    function handleOnload() {
      if (navigator.onLine) {
        console.log("We're online!")
        handleOnline()
      } else {
        console.log("We're offline...")
        handleOffline()
      }
    }

    window.addEventListener('load', handleOnload)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('load', handleOnload)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

function App() {
  const isOnline = useIsOnline()
  console.log(isOnline)

  if (!isOnline) {
    fireToast('warning', 'You are offline')
  }
  // make it not fire on start of app
  if (isOnline) {
    fireToast('success', 'You are online')
  }

  return (
    <ErrorBoundary location="app">
      <UI />
    </ErrorBoundary>
  )
}

export default App
