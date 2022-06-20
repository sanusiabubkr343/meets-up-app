import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritePage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <div className='wrapper'>
           <Routes >
        <Route path="/"  element={<AllMeetupsPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/new-meet-up" element={<NewMeetupPage />} />
      </Routes>
      </div>
      
    </div>
  )
}
export default App
