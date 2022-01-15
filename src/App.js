import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { fireToast } from 'components/ui/Toast'
import { useIsOnline } from 'hooks/useIsOnline'

import Routes from 'routes'
import ErrorBoundary from 'components/ErrorBoundary'
import 'styles/main.scss'

function App() {
  const isOnline = useIsOnline()

  if (!isOnline) {
    fireToast('warning', 'You are offline')
  }

  // make it not fire on start of app
  // if (isOnline) {
  //   fireToast('success', 'You are online')
  // }

  if (!isOnline) {
    return <h1>Sorry. You are offline</h1>
  }

  return (
    <ErrorBoundary location="app">
      <Provider store={store}>
        <ErrorBoundary location="routes">
          <Routes />
        </ErrorBoundary>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
