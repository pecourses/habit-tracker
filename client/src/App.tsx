import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import NewHabit from './pages/NewHabit'
import HabitsList from './pages/HabitsList'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path='/habits' element={<HabitsList />} />
          <Route path='/habit/new' element={<NewHabit />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
