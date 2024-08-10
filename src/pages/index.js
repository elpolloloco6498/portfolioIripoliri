import * as React from "react"
import logo from "../images/icon.png"
import portrait from "../images/portrait.jpeg"

const IndexPage = () => {
  return (
    <main className="p-10">
      <nav className="flex justify-between">
        <p>Iripoliri</p>
        <ul>
          <li>HOME</li>
          <li>PROJECT</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <h1 className="flex items-center text-4xl font-bold text-center">
      CREA<img
        alt="Gatsby G Logo"
        src={portrait}
        width={100}
        className="rounded-t-full rounded-r-full"
      />TIVE LISA
      </h1>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
