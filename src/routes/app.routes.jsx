import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { AddDish } from '../pages/AddDish';
import { EditDish } from '../pages/EditDish';
import { DishPage } from '../pages/Dish';

import { useAuth } from '../hooks/auth';

export function AppRoutes() {

  const { user } = useAuth();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dish/:id' element={<DishPage />} />
      {user.isAdmin ? (
        <>
          <Route path='/add' element={<AddDish />} />
          <Route path='/edit/:id' element={<EditDish />} />
        </>
      ) : window.location.href = '/'}
    </Routes>
  )
}
