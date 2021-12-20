import React from 'react'
import { AnimatedButton } from 'components/ui/Buttons'

const Home = () => {
  const [status, setStatus] = React.useState(null)

  React.useEffect(() => {
    const time = setTimeout(() => setStatus('loading'), 1000)
    const time2 = setTimeout(() => setStatus('success'), 5000)
    return () => {
      clearTimeout(time)
      clearTimeout(time2)
    }
  }, [])

  console.log(status)
  return (
    <div>
      <div>---------------------- This is the home page ----------------------</div>

      <AnimatedButton status={status}>Submit</AnimatedButton>
    </div>
  )
}

export default Home
