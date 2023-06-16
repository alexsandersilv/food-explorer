import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AddDish } from '../pages/AddDish';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddDish />} />
    </Routes>
  )
}
