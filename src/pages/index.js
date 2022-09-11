import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div>
    <h1>Hello People</h1>
    <div>
    <Link to="/about">about</Link>
    </div>
    <a href="/about">reg Link</a>


  </div>
}
