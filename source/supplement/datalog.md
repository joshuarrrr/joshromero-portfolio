Inspiration:
- http://projects.newyorker.com/story/subway/
- http://ny.curbed.com/2017/4/17/15325470/nyc-median-rent-subway-stop-map
- http://legacy.wbur.org/2013/01/30/boston-apartments-heat-map

1. Data Aquisition & Cleaning
    1. Census Data: https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml -> Guided Search
        1. Determine topics: Income/Earnings (Households), Rent
        2. Determine geographies: Boston T serves 3 counties
            1. Block Groups for Suffolk, Norfolk, and Middlesex
        3. Choose Tables:
            1. (2015) B19013 - MEDIAN HOUSEHOLD INCOME IN THE PAST 12 MONTHS (IN 2015 INFLATION-ADJUSTED DOLLARS)
            2. (2015) B19001 - HOUSEHOLD INCOME IN THE PAST 12 MONTHS (IN 2015 INFLATION-ADJUSTED DOLLARS)
            3. (2015) B25061 - RENT ASKED
            4. (2015) B25064 - MEDIAN GROSS RENT (DOLLARS)
            5. (2015) B25063 - GROSS RENT
            4. (2015) B25077 - MEDIAN VALUE (DOLLARS)
            5. (2015) B25075 - VALUE
        4. Download (Choose "Data and annotations in separate files")
        5. Add to QGIS: Layer -> Add Layer -> Add Delimited Text Layer
            1. Choose CSV
            2. Set "Number of lines to discard" to 1 (tables have two header rows, we'll keep the first as field names)
            3. Choose "No geometry"
    2. Shapefiles
        1. Get block group shapefiles: https://www.census.gov/cgi-bin/geo/shapefiles/index.php
            1. Choose year: 2015 to match census data
            2. Choose type: block groups
        2. Get transit shapefiles: http://www.mass.gov/anf/research-and-tech/it-serv-and-support/application-serv/office-of-geographic-information-massgis/datalayers/mbta.html
        3. Set QGIS Project CRS: EPSG:26786
            1. Check distance and area units, make consistent with CRS
        3. Add to QGIS: Layer -> Add Layer -> Add Vector Layer
            1. Reproject all shapefiles: Reproject layer
                1. Make sure to choose same CRS as project!
                2. Save projected shapefiles as new files (*_proj)
                3. Rename projected layers
                4. Remove original layers
2. Data Processing
    1. Get rid of unneeded blockgroups:
        1. Make minimum convex hull of stops
        2. Buffer convex hull to max buffer size: 5280 ft
        3. Select by location from block groups that intersect buffered hull, greedy
        4. Choose block group layer, and invert feature selection
        5. Enter editing mode
        6. Delete selected features
        7. Save edits and exit editing
        8. Remove hull layers
    2. Block groups
        1. Join census data to blockgroup shapefiles: Id2, GEOID
        2. Change display to use data
    3. Routes
        1. Remove unneeded route: Silver
        2. Style routes
    4. Calculate center of transit system
        1. Make minimum convex hull of 4 central stops
        2. Find polygon centroid of hull
        3. Remove central hull
    5. Stops
        1. Remove unneeded rout: Silver
        2. Calculate distance to center
            1. Distance matrix: Stops/STATION, central_point/STATION, Standard
            2. Add CSV and join with ID to stops layer
        3. Ordering based on distance and direction (route included in shapefile for disambiguation)
            1. Select all stops by route
            2. Find dividing x/y coordinate for each line:
                - Red: y, 494348
                - Green, Orange: y, 494802
                - Blue: x, 719962
            3. Add new field (Real, 10, 0):
                ```
                CASE
                    WHEN $y > 494348 THEN  to_real( "distance_to_center_State") * -1
                    ELSE to_real( "distance_to_center_State" )
                END
                ```
        3. Create buffers: 1 mile, .5 mile, .25 mile, .125 mile, 300 ft
    6. Calculate buffer stats: https://gis.stackexchange.com/questions/136809/calculating-area-weighted-average-of-attribute-in-one-layer-by-shape-in-another
        1. Add area column to all block groups: $area
        4. Make sure joins in block group layer are saved so that they will transfer to intersect (resave layer if necessary)
        2. Create new layers by intersecting buffer layers with block groups
        5. For each census figure of interest, calculate the number (add field) of households in the segment:
            Weight = Households * $area / Area
        6. For each census figure of interest, calculate the total contribution (add field):
            WeightedMedian = Weight * Median
        7. Run "Statistics by categories" on each of the above: STATION as category
        8. From each summary stats file, join the sum field to stops or buffers
        9. Add a final column for each statistic
            WeightedAvOfMedians = sum(WeightedMedian) / sum(Weight)
3. Prepare for Presentation
    1. qgis2web: http://www.qgistutorials.com/en/docs/web_mapping_with_qgis2web.html
        1. Add title to project properties
        2. Set visible fields and layers
        3. Zoom to central point layer
        4. Set zoom range for output: 11-16
        5. Set search field
        1. Format numbers? https://gis.stackexchange.com/questions/55045/how-to-create-a-label-formatted-like-1-000-from-a-numeric-field
        1. Need legend? https://gis.stackexchange.com/questions/179403/how-to-add-legend-in-qgis2web-plugin-while-exporting-maps