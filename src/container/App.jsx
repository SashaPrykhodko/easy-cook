import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RecipeListPage from '../component/pages/RecipeListPage.jsx'
import ProfilePage from '../component/pages/ProfilePage.jsx'

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {path: '/', element: <RecipeListPage/>},
    {path: '/profile', element: <ProfilePage/>},
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
}

export default App;