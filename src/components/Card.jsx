import React from "react";

function card() {
  return (
    <main>
      <div className="container">
        <div className="top">
          <div className="quesNo">
            <h3>Question 1:</h3>
          </div>

          <div className="MarkMenu">
            <div className="gen">Marks: 4</div>
            <label className="burger" htmlFor="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>

        <div className="question">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laborum praesentium dolorum nisi officia consequuntur aliquam quis
            nihil, ex expedita?
          </p>
        </div>

        <div className="options">
          <div className="option">
            <input type="radio" name="answer" className="answer" />
            <span className="op">a. HEHE</span>
          </div>

          <div className="option">
            <input type="radio" name="answer" className="answer" />
            <span className="op">a. HEHE</span>
          </div>

          <div className="option">
            <input type="radio" name="answer" className="answer" />
            <span className="op">a. HEHE</span>
          </div>

          <div className="option">
            <input type="radio" name="answer" className="answer" />
            <span className="op">a. HEHE</span>
          </div>
        </div>

        <div className="bottom">
          <span className="leftbtn">
            <input type="button" className="button" value="&larr; Prev. Question" />
          </span>
          <span className="rightbtn">
            <input type="button" className="button" value="Next Question &rarr;" />
          </span>
        </div>
      </div>
    </main>
  );
}

export default card;
