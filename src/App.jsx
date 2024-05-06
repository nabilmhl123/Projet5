import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([

  {
    path: '/',
    // eslint-disable-next-line react/no-unescaped-entities
    element: <div>Accueil</div>
  },
  {
    path: '/',
    element: <div>A propos</div>
  },
  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
