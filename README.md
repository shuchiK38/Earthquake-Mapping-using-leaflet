# Earthquake mappping : Visualizing Data with Leaflet

## Background

![1-Logo](https://user-images.githubusercontent.com/81253160/138190137-605920d9-4b66-4c5f-9a3b-4ce395397f52.png)


Welcome to the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.


### Level 1: Basic Visualization

1.First we need to get dataset from USGS website.The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example "All Earthquakes from the Past 7 Days", you will be given a JSON representation of that data. You will use the URL of this JSON to pull in the data for our visualization.

![3-Data](https://user-images.githubusercontent.com/81253160/138190687-3df355e8-d422-4e74-b97d-91d659366513.png)

2. Then Import & Visualize the Data.

   Created a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

   * Data markers reflects the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes  appears larger and earthquakes with greater depth  appears darker in color.

![streetearthqauke](https://user-images.githubusercontent.com/81253160/138191128-2e1a4806-4e1b-4997-bed2-065995f4bfc4.png)

   * The depth of the earth can be found as the third coordinate for each earthquake.Included popups that provide additional information about the earthquake when a marker is clicked.Created a legend that will provide context for map data.

![popupmarker](https://user-images.githubusercontent.com/81253160/138191359-ba997ad9-d977-4d41-aefd-b0ec65651b14.png)


# Level 2: Adding Tectonic Plates to Map

IN this I took the second data set on map to illustrate the relationship between tectonic plates and seismic activity. I pulled in a second data set and visualize it alongside  original set of data. Data on tectonic plates was found at <https://github.com/fraxen/tectonicplates>.

In this step, 

* Plotted second data set on our map.I took the second data set of all months data from USGS website.
* Added a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.
* Added layer controls to map.

![tectonicplates](https://user-images.githubusercontent.com/81253160/138197519-081e529e-a8cd-4f7f-bc41-85a3bb02fb17.png)



___
© 2021  Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.	
