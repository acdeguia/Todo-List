import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div className="side-nav">
            <Link to={"/"}>
                <h1 className="logo">ToDue</h1>
            </Link>
            <div>
                <h2>Home</h2>
                <ul>
                    <li>Inbox</li>
                    <li>Today</li>
                    <li>This Week</li>
                </ul>
            </div>

            <div>
                Projects
            </div>
        </div>
    )
}

export default SideNav