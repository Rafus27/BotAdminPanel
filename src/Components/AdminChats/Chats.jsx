import React from 'react'

import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

function ChatItem(props) {
    const itemStyle = {
        width: "300px",
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "4px 4px 8px 0px #223c5033",
        borderRadius: "10px",
        margin: "10px",
        marginTop: "0"
    }

    const imgStyle = {
        width: "50px",
        height: "50px",
        backgroundImage: `url('${props.img}')`,
        backgroundSize: "cover",
        borderRadius: "50%"
    }

    return (
        <NavLink to="testchat">
            <div style={itemStyle}>
                <div style={imgStyle}></div>
                <div>
                    <p style={{ width: "140px" }}>{props.name}</p>
                    <p>{props.lastMessage}</p>
                </div>
                <p>{props.lastTime}</p>
            </div>
        </NavLink>

    )
}

function MyMessage(props) {

    const messageStyle = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#838383",
        margin: "0 10px 10px auto",
        marginLeft: "auto",
        width: "auto",
        maxWidth: "500px",
        boxSizing: "border-box",
        padding: "10px",
        borderRadius: "15px 15px 0 15px",
        color: "#fff"
    }

    const textStyle = {
        margin: "0",

    }

    const timeStyle = {
        margin: "0",
        //height: "10px",
        display: "flex",
        justifyContent: "end",
        alignItems: "flex-end",
        color: "#ccc",
    }

    return (
        <div style={messageStyle}>
            <p style={textStyle}>{props.text}</p>
            <p style={timeStyle}>{props.time}</p>
        </div>
    )
}

function OuterMessage(props) {
    const messageStyle = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        margin: "0 auto 10px 0",
        marginRight: "auto",
        width: "auto",
        maxWidth: "500px",
        boxSizing: "border-box",
        padding: "10px",
        borderRadius: "15px 15px 15px 0",
    }

    const textStyle = {
        margin: "0",

    }

    const timeStyle = {
        margin: "0",
        //height: "10px",
        display: "flex",
        justifyContent: "end",
        alignItems: "flex-end",
        color: "#ccc",
    }

    return (
        <div style={messageStyle}>
            <p style={textStyle}>{props.text}</p>
            <p style={timeStyle}>{props.time}</p>
        </div>
    )
}

function Chat(props) {

    const containerStyle = {
        margin: "0 10px",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    }

    const inputContainerStyle = {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",

    }

    const btnStyle = {
        margin: "10px 0",
        minWidth: "40px",
        minHeight: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#838383",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
    }

    const textInputStyle = {
        width: "100%",
        height: "40px",
        outline: "none",
        border: "none",
        borderRadius: "20px",
        boxSizing: "border-box",
        padding: "0 15px",
        fontSize: "22px",
        margin: "0 10px"
    }

    const messageContainerStyle = {
        display: "flex",
        maxHeight: "calc(100vh - 130px)",
        overflow: "hidden",
        flexDirection: "column",
        overflowY: "scroll",
    }


    return (
        <div style={containerStyle}>
            <div style={messageContainerStyle}>
                <MyMessage text="hello" time="15:06" />
                <OuterMessage text="hello" time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <OuterMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <OuterMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <OuterMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
                <MyMessage text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui at, fugit praesentium et reiciendis quo ipsum expedita facere porro! Dolorem dolor molestiae architecto repudiandae unde perferendis ratione, voluptatibus asperiores." time="15:06" />
            </div>
            <div style={inputContainerStyle}>
                <label style={btnStyle} htmlFor={props.id + '-fileInput'}>
                    <img src="src/img/paperclip.svg" alt="send" />
                </label>
                <input type="file" id={props.id + '-fileInput'} hidden />
                <input style={textInputStyle} type="text" id={props.id + '-textInput'} />
                <button style={btnStyle}>
                    <img style={{ padding: "2px 2px 0 0 " }} src="src/img/send.svg" alt="send" />
                </button>
            </div>
        </div>
    )
}


function Chats() {

    const headerStyle = {
        padding: "10px",
        margin: "0",
        marginBottom: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px 0px #223c5033",
    }

    const chatListStyle = {
        height: "calc(100vh - 70px)",
        minWidth: "334px",
        overflow: "hidden",
        overflowY: "scroll"
    }

    const containerStyle = {
        display: "flex",
        width: "100%",
        marginRight: "10px"
    }

    return (
        <div>
            <h1 style={headerStyle}>{`in development {Chats module}`}</h1>
            <div style={containerStyle}>
                <div style={chatListStyle}>
                    <div>
                        <ChatItem img="src/img/img0.jpg" name="Lorem ipsum" lastMessage="hello" lastTime="15:54" />
                        <ChatItem img="src/img/img0.jpg" name="Legate Lanius" lastMessage="error log" lastTime="16:24" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                        <ChatItem img="src/img/img0.jpg" name="Donald Knuth" lastMessage="lorem ipsum" lastTime="04:31" />
                    </div>
                </div>

                <Routes>
                    <Route exact path="/" element={<div></div>} />
                    <Route path="testchat" element={<Chat id="testChat" />} />
                </Routes>
            </div>
        </div>


    )
}

export default Chats