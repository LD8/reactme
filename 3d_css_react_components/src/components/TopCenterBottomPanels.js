import React from 'react';
import './TopCenterBottomPanels.css'

export const TopCenterBottomPanels = () => {
    return (
        <div className="scene">
            <div className="panels">
                <div className="panel top-panel">
                    <ul>
                        <li>About Me</li>
                    </ul>
                </div>
                <div className="panel center-panel">
                    <ul>
                        <li>Portfolio</li>
                    </ul></div>
                <div className="panel bottom-panel">
                    <ul>
                        <li>Blogs</li>
                    </ul></div>
            </div>
        </div>
    )
}
