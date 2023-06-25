import React from 'react'
import { NavLink } from "react-router-dom";

function BotItem(props) {
    const containerStyle = {
        backgroundColor: "#fff",
        width: "220px",
        height: "140px",
        boxShadow: "4px 4px 8px 0px #223c5033",
        borderRadius: "10px",
        boxSizing: "border-box",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }

    const nameStyle = {
        fontSize: "24px",
        margin: "0",

    }

    const idStyle = {
        fontSize: "12px",
        color: "#888",
        margin: "0",
    }

    const btnStyle = {
        width: "100%",
        backgroundColor: "#888",
        color: "#fff",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
    }

    return (
        <div style={containerStyle}>
            <p style={nameStyle}>{props.name}</p>
            <p style={idStyle}>{props.id}</p>
            <NavLink to="/constructor"><button style={btnStyle}>Редактировать</button></NavLink>
            <button style={btnStyle}>Удалить</button>
        </div>
    )
}

function AddBot () {
    const containerStyle = {
        backgroundColor: "#fff",
        width: "220px",
        height: "140px",
        boxShadow: "4px 4px 8px 0px #223c5033",
        borderRadius: "10px",
        boxSizing: "border-box",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    const nameStyle = {
        fontSize: "24px",
        margin: "0",
        color: "#888",
        textAlign: "center"
    }
    
    return (
        <div style={containerStyle}>
            <p style={nameStyle}>add new bot <br /> (nonactive)</p>
        </div>
    )
}

function Bots() {
    const containerStyle = {
        display: "flex",
        
    }

    const headerStyle = {
        padding: "10px",
        margin: "0",
        marginBottom: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px 0px #223c5033",
    }
    return (
        <div>
            <h1 style={headerStyle}>Боты</h1>
            <div style={containerStyle}>
                <BotItem name="TestItemBot" id="138829840" />
                <BotItem name="TestItemBot0" id="138825248" />
                <AddBot />
            </div>

        </div>

    )
}

export default Bots