import React from 'react'

import ErrorBoundary from 'components/ErrorBoundary'
import UI from 'pages/Guide/UI'

function App() {
  return (
    <ErrorBoundary location="app">
      <UI />
    </ErrorBoundary>
  )
}

export default App
