import React from "react";

function Header(){
    return(
        <nav>
            <div className="back">
            &larr; &nbsp; Back
            </div>
            <div >
                Time Left:
            </div>
            <div className="time">
                <input className="minutes" id="minutes" type="text" />
                <span style={{size: 5}}>:</span>
                <input className="seconds" id="seconds" type="text" />
            </div>
            <div className="marks">
                Max Marks: 100
            </div>
        </nav>
    );
}

export default Header;  