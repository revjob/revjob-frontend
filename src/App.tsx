import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import ExploreCompanies from './pages/ExploreCompanies'
import About from './pages/About'
import Pdb from './pages/Pdb'
import { connectMetamask } from "./utils/connectMetamask";
import { ThemeProvider } from "@/components/theme-provider";


function App() {

	const [account, setAccount] = React.useState<string | null>(null);
  	const [provider, setProvider] = React.useState<any>(null);
	const [signer, setSigner] = React.useState<any>(null);

	React.useEffect(() => {
		if ((window as any).ethereum) {
		//check if Metamask wallet is installed
		// setIsMetamaskInstalled(true);
		setAccount((window as any).ethereum.selectedAddress);
		}
	}, []);

	async function connectWallet(): Promise<void> {
		const connection = await connectMetamask();
		setAccount(connection?.address);
		setProvider(connection?.web3Provider);
		setSigner(connection?.web3Signer);
	}

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route 
						path="/" 
						element={
							<Layout 
								connectWallet={connectWallet}
								account={account}
								signer={signer}
							/>
						} 
					>
						<Route path="/" element={<Home />} />
						<Route path="/exploreCompanys" element={<ExploreCompanies />} />
						<Route path="/about" element={<About />} />
						<Route path="/pdb" element={<Pdb texto="tchau" />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
