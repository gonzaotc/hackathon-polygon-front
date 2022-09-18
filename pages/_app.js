import '@rainbow-me/rainbowkit/styles.css'
import '../styles/globals.css'

import {
	darkTheme,
	getDefaultWallets,
	RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
	[chain.mainnet, chain.polygon],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
	appName: 'Wooy',
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				showRecentTransactions={true}
				chains={chains}
				theme={darkTheme()}
			>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default MyApp
