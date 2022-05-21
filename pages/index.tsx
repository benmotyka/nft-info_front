import { useWeb3 } from '@3rdweb/hooks'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import toast, { Toaster } from "react-hot-toast"

const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3()
  toast.success(`Your address: ${address} was connected successfully`)

  useEffect(() => {
    if (!address) return
    console.log(`${address} checked for history`)
  }, [address])

  return (
    <>
    <Toaster/>
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
