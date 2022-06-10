import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className="border border-primary  col-4">
        
        <h1>Logo</h1>
        <ul>
            <a href="/"><li>create</li></a>
            <li><a href="/blogs">delete blog</a></li>

            <li><a href="/contact">updated blog</a></li>

        </ul>
        <ul>
            {/* view display as a table */}
            <a href="/"><li>view blogs</li></a> 
            <li><a href="/blogs">blogs</a></li>

            <li><a href="/contact">contact</a></li>

        </ul> 

    </div>
  )
}
