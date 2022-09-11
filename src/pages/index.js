import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return <div>
    <Navbar  />
    <h1>Hello People</h1>
    <div>
    <Link to="/about">about</Link>
    <div>
    <Link to="/company/history">history</Link>
    </div>
    </div>
    <a href="/about">reg Link</a>
    <a href="https://www.gatsbyjs.com/docs/how-to/">gatsby docs</a>
  </div>
}
