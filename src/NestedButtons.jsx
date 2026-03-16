import React from "react";



function NestedButtons() {
    function handleOuterClick() {
        alert("Outer container clicked")
        console.log("Outer container clicked")

    }

    function handleInnerClick(e) {
        alert("Inner container clicked")
        console.log("Inner container clicked")

    }

    return (

        <div onClick={handleOuterClick} 
        style={{
            padding: "40px",
            backgroundColor: "#dbeafe",
            textAlign: "center",
            borderRadius: "10px",

        }}
    
        > 
        <h3>Outer Container</h3>

        <button
        onClick={handleInnerClick}
        style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",

        }}
        
        >
            Inner Button

        </button>
        </div>

    );

}

export default NestedButtons;