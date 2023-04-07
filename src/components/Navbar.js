import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const logged = localStorage.getItem("isLoggedIn") === "true"
  console.log(logged)
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false)
    window.location.reload()
    window.location.href = "/"
  }

  return (
    <nav className="flex justify-between bg-gray-800 text-white p-4">
      <Link to="/" className="text-xl font-bold">
        Create Your Form
      </Link>
      <div className="flex">
        <Link to="/CreateForm" className="mx-2">
          Create Form
        </Link>
        <Link to="/GetForm" className="mx-2">
          Get Form
        </Link>
        {logged && (
          <Link to="/" className="mx-2" onClick={handleLogout}>
            Log out
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
