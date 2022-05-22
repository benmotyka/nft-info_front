import React from 'react'

const faqItems = [{
    title: "Explore"
}, {
    title: "Faq"
}, {
    title: "Contact"
}]

const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full border-b border-zinc-200 bg-zinc-50 px-52 py-5 flex justify-between">
      <div>Nft Info</div>
      <ul className="flex">
        {faqItems.map(item => (
        <li className="text-xl text-zinc-400 mx-8 pointer hover:text-sky-400 transition-colors">{item.title}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
