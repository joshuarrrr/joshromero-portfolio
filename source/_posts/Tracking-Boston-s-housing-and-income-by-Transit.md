title: Tracking Boston's housing costs and income by transit stop
date: 2017-05-02 18:50:33
tags:
- maps
- D3
- JavaScript
- charts
- data
- QGIS
- census data
- transit
category: Projects
---
I've been fascinated with subway maps ever since my first experience on the London Underground at age three (and I know [I'm not alone](https://niemann.blogs.nytimes.com/2008/07/01/the-boys-and-the-subway)). The simplified arrangement of lines and circles create a powerful visual metaphor that can have a huge influence on how we mentally model the city they represent. When I lived in New York, the subway map was the primary way that I anchored myself spatially, even though it's full of geographic distortions.

There have been a number of projects that have harnessed our familiarity with transit lines to explore demographic variations of cities. For New York, I've seen [subway rent maps](http://ny.curbed.com/2017/4/17/15325470/nyc-median-rent-subway-stop-map) and the *New Yorker's* [interesting exploration of income inequality](http://projects.newyorker.com/story/subway/). But New York's financial geography is very unique, and I was curious to see what other kinds of patterns would emerge from a similar approach in a different city. So I decided to create a map of Boston that uses T stops to explore data from the [American Community Survey (ACS)](https://www.census.gov/programs-surveys/acs/).<!-- more -->

{% raw %}
<link rel="stylesheet" href="assets/css/leaflet.css" />
<link rel="stylesheet" type="text/css" href="assets/css/qgis2web.css">
<link rel="stylesheet" href="assets/css/MarkerCluster.css" />
<link rel="stylesheet" href="assets/css/MarkerCluster.Default.css" />
<link rel="stylesheet" href="assets/css/leaflet-search.css" />
<link rel="stylesheet" href="assets/css/custom.css" />
<style>
#map {
    width: 100%;
    height: 500px;
}
</style>
<!-- <div id="map-controls" class="pre-map">
	Size stops by 
	<select name="metric" id="metric" class="control">
		<option value="income">median household income</option>
		<option value="rent">median gross rent</option>
		<option value="home">median home value</option>
	</select>
	in the area 
	<select name="buffer" id="buffer" class="control">
		<option value="eighth_mile">1/8 mile</option>
		<option value="300_ft">300 ft</option>
	</select>
	from stop
</div> -->
<div class="pre-map">
	<div class="instructions"><span class="hover-instruction">Hover</span> a station to see its demographic estimates. Use the search button to find a station by name. Zoom in to see the sampling area around each station.
	</div>
</div>
<div id="map">
</div>
<!-- <div id="chart"></div> -->
{% endraw %}

<!-- I think part of their power comes from the way they reflect the experience of traversing the city by subway. When you're traveling by train, you disappear into one underground portal, and reappear at another, without really having a sense of the above-ground landscape you've crossed. In this way, the areas surrounding stations you've been to can seem to be more closely connected than other nearby locations that aren't train accessible. Several projects have used transit lines as a way of making spatial comparisons. New York -->

First, some **huge** caveats: both the sizes of the circles and the chart and the values in the tables aren't actually meaningful in a statistical sense. For one thing, reporting just the median value of of an often widely varying distribution can be misleading. I also made no attempt to distinguish between different types of rental units or homes--for instance, there's no way to tell if a high gross rent is due to lots of pricey one-bedroom apartments or an excess of modestly-priced three-bedroom rentals. And to make matters worse, what I've reported here are actually weighted averages of several different median values, which means that I deliberately assumed uniform distributions in a case where we know that's not the case.

Despite all that, I still think (and hope) that the map can be useful. For one thing, it provides a different way to search for geographic patterns or trends in these figures. The fact that the different metrics track together for the most part (particularly income and home values), seems like generally a good sign. I hope that the map makes it easier to make comparisons that might spark further questions for investigation and research.

## <a name="methods"></a>How was this calculated?
One challenge was that it's hard to define a geographic area of interest. In the New Yorker's graphic, they simply used the median value for the census tract that the station was located in. But census tracts are relatively large, especially compared to the distance between stops on the Green Line, and stations are often located right on the border of two tracts. I knew I wanted to investigate the area in the immediate vicinity of each station, instead.

First, I used [census block groups](https://www.census.gov/geo/reference/gtc/gtc_bg.html), which are smaller subsdivisions of census tracts. Then, I created uniform circles around each station. For each block group that fell within a station's regional circle, I collected the median values for household income, gross rent, and 

In addition, census data provides aggregate information about a given region, but it does not provide building-by-building information. Especially for tracking real estate, where small differences in location can mean huge differences in price, that's a problem.

The only other similar Boston maps I found were created by real estate companies, and used their own real estate data for mapping [rent](http://realestate.boston.com/renting/2016/06/30/map-median-rent-mbta-stop/) and [home prices](http://realestate.boston.com/buying/2016/05/03/map-how-much-costs-mbta-stops/). I decided to use data from the ACS instead. 

 
Methodology

{% raw %}
<script src="assets/js/qgis2web_expressions.js"></script>
<script src="assets/js/leaflet.js"></script>
<script src="assets/js/leaflet-heat.js"></script>
<script src="assets/js/leaflet.rotatedMarker.js"></script>
<script src="assets/js/OSMBuildings-Leaflet.js"></script>
<script src="assets/js/leaflet-hash.js"></script>
<script src="assets/js/leaflet-tilelayer-wmts.js"></script>
<script src="assets/js/Autolinker.min.js"></script>
<script src="assets/js/leaflet.markercluster.js"></script>
<script src="assets/js/leaflet-search.js"></script>
<script src="assets/data/eighthmile0.js"></script>
<script src="assets/data/300feet1.js"></script>
<script src="assets/data/Lines2.js"></script>
<script src="assets/data/Stops3.js"></script>
<script src="assets/data/centralpoint4.js"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="assets/js/map.js"></script>
{% endraw %}