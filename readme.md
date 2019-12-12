# 48hr Hackathon
## Gig-on-a-map
In 48 hours, I built a ReactJS front-end web-app that utilises a third-party API, allowing users to find music related gigs in their local vicinity, visually on a map opposed to a web page item list view.

You can find our app live at gigonamap.herokuapp.com
# How did we do it?
We used two APIs, Skiddle API to gather event data and MapboxGL to display the data on an interactive map.

We fed every events' venue Lat & Lon data into mapbox to determine where events needed to be displayed, then replaced MapboxGL markers with images from the Skiddle API. When you click on an event marker we display the full info regarding the event.

# Design
![gigonamap](/screen.png)
We kept our design simple and went with the full-screen app approach. As theres no need for data-input, theres no need to type anything or preserve screen space for this.

# Instructions
To use the app, simply click around to see events on the map. To see more information about an event, click on the Image marker, and the info panel in the top left will expand down and tell you about the event, including how to purchase tickets.

## Installation

We use `npm` to manage our packages, so be sure to run `$ npm run install` before starting.

As all API's are external, there is no express server to handle requests.

Be sure to get an access token from Mapbox and Skiddle.

# Challenges

As my first hackathon, the biggest challenge for me was the time-pressure; understanding how much time to allocate each task was a cruicial part of making sure an MVP was met.

Researching API's and being granted access took a fair amount of time, and until I knew I had access to the right API, could I determine if I had the right resource/tool to deliver my MVP.

# Further Features
Given more time, I would add pagination to the calls I'm making to Skiddle, as currently a response only returns 100 results out of thousands.

I would also like to enable access to the user device's location, as currently the starting Lat and Lon co-ordinates are hard-coded.

