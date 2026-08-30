import { useState } from 'react'
// No App.css import — all styles via Tailwind CDN in index.html
import Home from './screens/Home'
import ExploreTrips from './screens/ExploreTrips'
import TripDetail from './screens/TripDetail'
import Checkout from './screens/Checkout'
import MyDashboard from './screens/MyDashboard'
import AdminDashboard from './screens/AdminDashboard'
import BottomNav from './components/BottomNav'
import TopNav from './components/TopNav'

export default function App() {
  const [screen, setScreen] = useState('home')

  const navigate = (to) => { setScreen(to); window.scrollTo(0, 0) }

  const renderScreen = () => {
    switch (screen) {
      case 'home':    return <Home navigate={navigate} />
      case 'trips':   return <ExploreTrips navigate={navigate} />
      case 'detail':  return <TripDetail navigate={navigate} />
      case 'checkout':return <Checkout navigate={navigate} />
      case 'my-trips':return <MyDashboard navigate={navigate} />
      case 'admin':   return <AdminDashboard navigate={navigate} />
      default:        return <Home navigate={navigate} />
    }
  }

  return (
    <div className="bg-surface min-h-screen font-body-md text-on-surface">
      <TopNav current={screen} navigate={navigate} overlay={screen === 'home'} />
      {renderScreen()}
      <BottomNav current={screen} navigate={navigate} />
    </div>
  )
}
