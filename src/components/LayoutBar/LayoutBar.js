import React from "react";
import './LayoutBar.css';

function LayoutBar() {
    return (
        <div>
            <nav className="layout">
                <a href="/" className="layout-item">Home</a>
                <a href="/about" className="layout-item">About</a>
                <a href="/projects" className="layout-item">Projects</a>
                <a href="/contact" className="layout-item">Contact</a>
            </nav>
        </div>
    )
}

export default LayoutBar;