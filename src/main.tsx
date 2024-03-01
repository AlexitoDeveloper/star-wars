import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.scss'
import Background from './components/background/Background.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PlanetDetail from './pages/planet-detail/PlanetDetail.tsx'
import Home from './pages/home/Home.tsx'

const router = createBrowserRouter([
	{path: '/', element: <Home />},
	{path: '/:name', element: <PlanetDetail />}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Background />
		<RouterProvider router={router} />
	</React.StrictMode>,
)
