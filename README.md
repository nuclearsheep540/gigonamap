# 48hr Hackathon
## Breif
### Gig-on-a-map
In 48 hours, build a ReactJS front-end web-app that utilises a third-party API, allowing users to find music related gigs in their local vicinity, visually on a map opposed to a web page item list view.

You can find our app live at gigonamap.herokuapp.com
# How did we do it?
We used two APIs, Skiddle API to gather event data and MapboxGL to display the data on an interactive map.

We fed every events' venue Lat & Lon data into mapbox to determine where events needed to be displayed, then replaced MapboxGL markers with images from the Skiddle API. When you click on an event marker we display the full info regarding the event.

# Design
![gigonamap](/screen.png)
We kept our design simple and went with the full-screen app approach. As theres no need for data-input, theres no need to type anything or preserve screen space for this.

