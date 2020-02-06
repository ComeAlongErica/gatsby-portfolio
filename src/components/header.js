import React from "react"
import { Link } from 'gatsby'

const Header = () => (
  <div style={{ color: `teal` }}>
    <Link to='/contact/'>Contact</Link>
    <Link to='/blog/'> Blog</Link>
    <Link to='/'> Home</Link>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
  </div>
)
export default Header
