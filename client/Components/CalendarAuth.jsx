import React from 'react'
import CalendarService from '../Services/CalendarService.js'


var CalendarAuth = ({calserv}) => (


<div>
  <button id="authorize-button" onClick={calserv.handleAuthClick.bind(calserv)}>See Google Calendar events</button>
    <button id="signout-button">Hide other Google calendar events</button>

    <pre id="content"></pre>
</div>
)

module.exports = CalendarAuth;