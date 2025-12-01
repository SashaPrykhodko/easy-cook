import { useQuery } from '@tanstack/react-query'
import { fetchRecipes } from '../api/recipes.jsx'

export function useRecipes() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
    onSuccess: (data) => {
      console.log('useRecipes onSuccess:', data)
    },
    onError: (error) => {
      console.error('useRecipes onError:', error)
    }
  })

  return { data, isLoading, isError, error, refetch }
} 
