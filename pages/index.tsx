import { useWeb3 } from '@3rdweb/hooks'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import toast from "react-hot-toast"
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3()

  useEffect(() => {
    if (!address) return
  toast.success(`Address connected successfully`, {position: 'bottom-center'})
  }, [address])

  return (
    <>
    <Navbar/>
      {address ? (
        <div>{address}</div>
      ) : (
        <button
          className="border border-indigo-500 text-xl"
          onClick={() => connectWallet('injected')}
        >
          Connect wallet
        </button>
      )}
    </>
  )
}

export default Home
