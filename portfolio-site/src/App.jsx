import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Utils
import { resume, projects } from "./utils/content"

// Layouts
import RootLayout from './layouts/RootLayout'
import ResumeLayout from './layouts/ResumeLayout'
import ProjectsLayout from './layouts/ProjectsLayout'

// Pages
import Home from './pages/Home'
import Resume from './pages/resume/Resume'
import Projects from './pages/projects/Projects'
import Contact from './pages/Contact'
import Education from './pages/resume/Education'
import Experience from './pages/resume/Experience'
import Skills from './pages/resume/Skills'
import ProjectDetails from './pages/projects/ProjectDetails'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route index element={<Home />} />

      <Route path="resume" element={<ResumeLayout resume={resume} />}>
        <Route index element={<Resume />} />
        <Route path="education" element={<Education items={resume.education} />} />
        <Route path="experience" element={<Experience items={resume.experience} />} />
        <Route path="skills" element={<Skills items={resume.skills} />} />
      </Route>

      <Route path="projects" element={<ProjectsLayout projects={projects} />}>
        <Route index element={<Projects projects={projects} />} />
        <Route path=":projKey" element={<ProjectDetails />} />
      </Route>

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
