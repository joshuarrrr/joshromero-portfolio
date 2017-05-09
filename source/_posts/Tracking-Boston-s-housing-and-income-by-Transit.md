title: Tracking Boston's housing costs and income by transit stop
date: 2017-05-09 12:00:00
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

There have been a number of projects that have harnessed our familiarity with transit lines to explore demographic variations of cities. For New York, I've seen [subway rent maps](http://ny.curbed.com/2017/4/17/15325470/nyc-median-rent-subway-stop-map) and the *New Yorker's* [interesting exploration of income inequality](http://projects.newyorker.com/story/subway/). But New York's financial geography is unique, and I was curious to see what other kinds of patterns would emerge from a similar approach in a different city. So I decided to create a map of Boston that uses T stops to explore data from the [American Community Survey (ACS)](https://www.census.gov/programs-surveys/acs/).<!-- more -->

{% raw %}
<link rel="stylesheet" href="assets/css/leaflet.css" />
<link rel="stylesheet" type="text/css" href="assets/css/qgis2web.css">
<!-- <link rel="stylesheet" href="assets/css/MarkerCluster.css" />
<link rel="stylesheet" href="assets/css/MarkerCluster.Default.css" /> -->
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

Some of the results match what you might expect. Generally housing prices and income increase near Central Square, where the transit lines converge. But unlike New York, many of Boston's expensive and wealthy neighborhoods lie near the edges of the transit system, particularly on the D spur of the green line and the Alewife end of the Red Line. It's also interesting to note the variations along each line. Once you get past Aquarium, the stations along the Blue Line are all pretty similar in each of these metrics. Stations on the north half of the Orange Line tend to be in more expensive areas than those south of Central Square.

But all of these trends come with some **huge** caveats: both the sizes of the circles and the chart and the values in the tables aren't actually meaningful in a statistical sense. For one thing, reporting just the median value of often widely varying distribution can be misleading. I also made no attempt to distinguish between different types of rental units or homes--for instance, there's no way to tell if a high gross rent is due to lots of pricey one-bedroom apartments or an excess of modestly-priced three-bedroom rentals. And to make matters worse, what I've reported here are actually weighted averages of several different median values, which means that I deliberately assumed uniform distributions in a case where we know that's not the case.

Despite all that, I still think (and hope) that the map can be useful for finding geographic patterns or trends. For one thing, using T stops provides a familiar model of the city that should allow users to quickly spot potential anomalies or outliers. There are other common sense tests we can use. The fact that the different metrics track together for the most stations (particularly income and home values), for instance, seems like generally a good sign. I hope that the map might also be a spark further questions for investigation and research.

## <a name="methods"></a>How was this calculated?
The only other similar Boston maps I found were created by real estate companies, and used their own real estate data for mapping [rent](http://realestate.boston.com/renting/2016/06/30/map-median-rent-mbta-stop/) and [home prices](http://realestate.boston.com/buying/2016/05/03/map-how-much-costs-mbta-stops/). I decided to use data from the ACS instead. 

One major challenge was determining how to take a point location like a T station and define a geographic area of interest around it. In the *New Yorker's* graphic, they simply used the median income value for the census tract where the station was located. But census tracts are relatively large (especially compared to the distance between stops on the Green Line), and stations are often located right on the border of two tracts. I knew that I wanted to investigate a symmetrical area in the immediate vicinity of each station instead, so I created circles of consistent size. But what size? Superimposing geometric shapes on a human landscape is a process that inherently creates arbitrary borders, but I experimented with different sizes to see which felt right. The 1/8 mile-radius circles seemed to be an optimal size, but I included the data from 300 ft circles so that readers could see how sensitive the data was to this choice.

Once I had defined my circles, I needed a way to combine data from the regions they overlapped. Census data provides aggregate information about a given region, but it does not provide building-by-building information. Especially for tracking real estate, where small differences in location can mean huge differences in price, that's a big problem. First, I gathered data[census block groups](https://www.census.gov/geo/reference/gtc/gtc_bg.html), which are smaller subdivisions of census tracts and the smallest regions available for this type of data. For each block group I could get the median values for household income, gross rent, and home value. 

To combine these into a single value for each station, I used a weighted average that considered how many households in each block group were likely to fall within the portion that intersected the station circle. Doing so required me to make the assumptions that households are evenly distributed within the block group area, and that the median value holds across just a subset of households would be the same as across the entire block group. For more details, view the [full data log](/supplement/boston-transit-data-log.html).

{% raw %}
<!-- <script src="assets/js/qgis2web_expressions.js"></script>
 --><script src="assets/js/leaflet.js"></script>
<!-- <script src="assets/js/leaflet-heat.js"></script> -->
<!-- <script src="assets/js/leaflet.rotatedMarker.js"></script> -->
<!-- <script src="assets/js/OSMBuildings-Leaflet.js"></script> -->
<script src="assets/js/leaflet-hash.js"></script>
<!-- <script src="assets/js/leaflet-tilelayer-wmts.js"></script> -->
<script src="assets/js/Autolinker.min.js"></script>
<!-- <script src="assets/js/leaflet.markercluster.js"></script> -->
<script src="assets/js/leaflet-search.js"></script>
<script src="assets/data/eighthmile0.js"></script>
<script src="assets/data/300feet1.js"></script>
<script src="assets/data/Lines2.js"></script>
<script src="assets/data/Stops3.js"></script>
<script src="assets/data/centralpoint4.js"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="assets/js/map.js"></script>
{% endraw %}