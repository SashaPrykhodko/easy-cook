import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RecipeListPage from './components/RecipeListPage'
import ProfilePage from './components/ProfilePage'

import './index.css'

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <RecipeListPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
