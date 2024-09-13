import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout'

// Pages
import Home from './pages/Home'
import ResumeLayout from './layouts/ResumeLayout'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="resume" element={<ResumeLayout />}>
      </Route>
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {

  return (   
    <RouterProvider router={router} />
  )
}

export default App
