import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from './components/Header.jsx';
import Profile from './pages/Profile.jsx';
import Projects from './pages/Projects.jsx';
import Project from './pages/ProjectDetail.jsx'
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
 `

function Root() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path='/*' element={<Profile/>} />
                <Route path='/projects/*' element={<Projects/>}/>
                <Route path='projects/:name/*' element={<Project/>}/>
            </Routes>
        </>
    )
}

const router = createBrowserRouter([
    {path:'*', Component: Root}
])

function App() {
    return (
       <RouterProvider router={router}/>
    );
}
export default App;