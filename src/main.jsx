import React from 'react'
import ReactDOM from 'react-dom/client'
//import { BrowserRouter, Route, } from 'react-router-dom';
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Menu from './Components/Sidebar/Menu.jsx'
import BotScriptPanel from "./Components/BotScriptPanel/BotScriptPanel.jsx";
import Home from "./Components/Home/Home.jsx"
import Bots from "./Components/Bots/Bots.jsx"
import Help from "./Components/Help/Help.jsx"
import Settings from "./Components/Settings/Settings.jsx"
import Chats from "./Components/AdminChats/Chats.jsx"
import Stats from "./Components/Stats/Stats.jsx"
import Mailing from "./Components/Mailing/Mailing.jsx"

import styles from './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>

      <HashRouter>
        <Menu />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/bots' element={<Bots />} />
            <Route path='/chats/*' element={<Chats />} />
            <Route path='/help' element={<Help />} />
            <Route path='/stats' element={<Stats />} />
            <Route path='/mailing' element={<Mailing />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/constructor' element={<BotScriptPanel />} />
          </Routes>

        </div>


      </HashRouter>
    </div >

    {/* <div className='content-cont'>
      <Menu />
      <div className="content-wrapper">
        <div className="content">
          <BotScriptPanel />
        </div>
      </div>
      <Router>
        <div>
        <Switch>
          <Route path="/">
            <BotScriptPanel />
          </Route>
        </Switch>
        </div>
      </Router>
    </div> */}
  </React.StrictMode >,
)
