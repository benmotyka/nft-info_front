import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

const RINKEBY_NETWORK_ID = 4
const supportedChains = [RINKEBY_NETWORK_ID]
const connectors = {
  injected: {}
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChains} connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
