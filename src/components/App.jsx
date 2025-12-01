import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../App.css'
import RecipeListPage from './RecipeListPage.jsx'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RecipeListPage />
      </div>
    </QueryClientProvider>
  );
}

export default App

