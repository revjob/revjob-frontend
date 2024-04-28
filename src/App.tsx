// Importing useState hook from React to manage state in functional components
import { useState } from 'react'
// Importing necessary components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Importing custom components for the application
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Pdb from './pages/Pdb'

// Define the main component of the application
function App() {

	// Render the application UI
	return (
		// Using BrowserRouter to enable routing in the application
		<BrowserRouter>
			{/* Defining routes for different paths in the application */}
			<Routes>
				{/* The main layout of the application */}
				<Route path="/" element={<Layout />} >
					{/* Route for the home page */}
					<Route path="/" element={<Home />} />
					{/* Route for the about page */}
					<Route path="/about" element={<About />} />
					<Route path="/pdb" element={<Pdb texto="tchau" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

// Exporting the main component to be used in other parts of the application
export default App
