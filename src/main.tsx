import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.scss'
import Background from './components/background/Background.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PlanetDetail from './pages/planet-detail/PlanetDetail.tsx'
import Home from './pages/home/Home.tsx'
import {ConfigProvider, theme} from 'antd'

const router = createBrowserRouter([
	{path: '/', element: <Home />},
	{path: '/:name', element: <PlanetDetail />},
	{path: '*', element: <Home />}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ConfigProvider theme={{ algorithm: theme.darkAlgorithm, components: {
			Input: {
				colorBgContainer: 'transparent'
			}
		}}}>
			<Background />
			<RouterProvider router={router} />
		</ConfigProvider>
	</React.StrictMode>,
)
