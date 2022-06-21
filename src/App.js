import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritePage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/new-meet-up" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  )
}
export default App
