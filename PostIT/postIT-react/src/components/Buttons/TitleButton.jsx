import React from "react";
import './TitleButton.css';

const TitleButton = ({onclick, children}) => {
   return (
    <button className="title-button" onClick={onclick}>
        {children} {}
    </button>
   )
}

export default TitleButton