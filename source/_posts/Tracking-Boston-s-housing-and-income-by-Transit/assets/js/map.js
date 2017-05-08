var highlightLayer;
// var dispatch = d3.dispatch('stopSelect');

var colors = {
    blue: "#007DBE",
    green: "#008F4F",
    orange: "#E88A28",
    red: "#D23934"
};

var metrics = {
    "eighth_mile": {income: "eighth_mic", rent: "eighth_mrc", home: "eighth_mhc"},
    "300_ft": {income: "medIncCalc", rent: "MedRenCalc", home: "MedHomCalc"}
};

var sizeByAttr = 'eighth_mic';
var buffer =  "eighth_mile";
var metric = "income";

var isMobile = false;
var isDesktop = false;
var isHuge = false;

function determineSize() {
    var viewportWidth = window.innerWidth;
    
    if (viewportWidth < 1024) {
        isMobile = true;
    } else if (viewportWidth >= 1024 && viewportWidth < 1600) {
        isDesktop = true;
    }
    else {
        isHuge = true;
    }
}

var classify = function(str) {
    return str.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

function highlightFeature(e) {
    highlightLayer = e.target;
    // dispatch.call('stopSelect', highlightLayer.feature.properties);
    highlightLayer.openPopup();
}

// Polyfill for includes method
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

determineSize();

if ( isMobile ) {
    d3.selectAll(".hover-instruction").text("Touch");
}
if ( isDesktop ) {
    d3.select("#map").style('height', 600 + 'px');
}
if ( isHuge ) {
    d3.select("#map").style('height', 700 + 'px');
}

L.ImageOverlay.include({
    getBounds: function() {
        return this._bounds;
    }
});

var center = new L.LatLng(42.3171, -71.1046);
var map = L.map('map', {
    zoomControl: true,
    maxZoom: 16,
    minZoom: 11
}).fitBounds([
    [42.40, -71.15],
    [42.30, -70.98]
]);

map.panTo(new L.LatLng(42.3574, -71.0601));

var hash = new L.Hash(map);
map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
var bounds_group = new L.featureGroup([]);
var basemap0 = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 16
});
basemap0.addTo(map);

function setBounds() {}

// function geoJson2heat(geojson, weight) {
//     return geojson.features.map(function(feature) {
//         return [
//             feature.geometry.coordinates[1],
//             feature.geometry.coordinates[0],
//             feature.properties[weight]
//         ];
//     });
// }

function pop_eighthmile0(feature, layer) {
    // layer.on({
    //     mouseout: function(e) {
    //         if (typeof layer.closePopup == 'function') {
    //             layer.closePopup();
    //         } else {
    //             layer.eachLayer(function(feature) {
    //                 feature.closePopup()
    //             });
    //         }
    //     },
    //     mouseover: highlightFeature,
    // });
    // var popupContent = '<table>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['STATION'] !== null ? Autolinker.link(String(feature.properties['STATION'])) : '') + '</td>\
    //                 </tr>\
    //             </table>';
    // layer.bindPopup(popupContent);
}

function style_eighthmile0() {
    return {
        pane: 'pane_eighthmile0',
        opacity: 1,
        color: 'rgba(0,0,0,0.45)',
        dashArray: '10,5',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.0)',
    };
}
map.createPane('pane_eighthmile0');
map.getPane('pane_eighthmile0').style.zIndex = 400;
map.getPane('pane_eighthmile0').style['mix-blend-mode'] = 'normal';
var layer_eighthmile0 = new L.geoJson(json_eighthmile0, {
    attribution: '<a href=""></a>',
    pane: 'pane_eighthmile0',
    onEachFeature: pop_eighthmile0,
    style: style_eighthmile0
});
bounds_group.addLayer(layer_eighthmile0);
map.addLayer(layer_eighthmile0);

function pop_300feet1(feature, layer) {
    // layer.on({
    //     mouseout: function(e) {
    //         if (typeof layer.closePopup == 'function') {
    //             layer.closePopup();
    //         } else {
    //             layer.eachLayer(function(feature) {
    //                 feature.closePopup()
    //             });
    //         }
    //     },
    //     mouseover: highlightFeature,
    // });
    // var popupContent = '<table>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['STATION'] !== null ? Autolinker.link(String(feature.properties['STATION'])) : '') + '</td>\
    //                 </tr>\
    //             </table>';
    // layer.bindPopup(popupContent);
}

function style_300feet1() {
    return {
        pane: 'pane_300feet1',
        opacity: 1,
        color: 'rgba(0,0,0,0.45)',
        dashArray: '10,5',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.0)',
    };
}
map.createPane('pane_300feet1');
map.getPane('pane_300feet1').style.zIndex = 401;
map.getPane('pane_300feet1').style['mix-blend-mode'] = 'normal';
var layer_300feet1 = new L.geoJson(json_300feet1, {
    attribution: '<a href=""></a>',
    pane: 'pane_300feet1',
    onEachFeature: pop_300feet1,
    style: style_300feet1
});
bounds_group.addLayer(layer_300feet1);
map.addLayer(layer_300feet1);

function pop_Lines2(feature, layer) {
    // layer.on({
    //     mouseout: function(e) {
    //         if (typeof layer.closePopup == 'function') {
    //             layer.closePopup();
    //         } else {
    //             layer.eachLayer(function(feature) {
    //                 feature.closePopup()
    //             });
    //         }
    //     },
    //     mouseover: highlightFeature,
    // });
    // var popupContent = '<table>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['LINE'] !== null ? Autolinker.link(String(feature.properties['LINE'])) : '') + '</td>\
    //                 </tr>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['ROUTE'] !== null ? Autolinker.link(String(feature.properties['ROUTE'])) : '') + '</td>\
    //                 </tr>\
    //             </table>';
    // layer.bindPopup(popupContent);
}

function style_Lines2(feature) {
    switch (feature.properties['LINE']) {
        case 'BLUE':
            return {
                pane: 'pane_Lines2',
                opacity: 1,
                color: colors.blue,
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 6.0,
                fillOpacity: 0,
            }
            break;
        case 'GREEN':
            return {
                pane: 'pane_Lines2',
                opacity: 1,
                color: colors.green,
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 6.0,
                fillOpacity: 0,
            }
            break;
        case 'ORANGE':
            return {
                pane: 'pane_Lines2',
                opacity: 1,
                color: colors.orange,
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 6.0,
                fillOpacity: 0,
            }
            break;
        case 'RED':
            return {
                pane: 'pane_Lines2',
                opacity: 1,
                color: colors.red,
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 6.0,
                fillOpacity: 0,
            }
            break;
    }
}
map.createPane('pane_Lines2');
map.getPane('pane_Lines2').style.zIndex = 402;
map.getPane('pane_Lines2').style['mix-blend-mode'] = 'normal';
var layer_Lines2 = new L.geoJson(json_Lines2, {
    attribution: '<a href=""></a>',
    pane: 'pane_Lines2',
    onEachFeature: pop_Lines2,
    style: style_Lines2
});
bounds_group.addLayer(layer_Lines2);
map.addLayer(layer_Lines2);

function pop_Stops3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            // if (typeof layer.closePopup == 'function') {
            //     layer.closePopup();
            // } else {
            //     layer.eachLayer(function(feature) {
            //         feature.closePopup()
            //     });
            // }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<div><h2 class="' + classify(feature.properties['LINE']) + '">' + (feature.properties['STATION'] !== null ? Autolinker.link(String(feature.properties['STATION'])) : '') + '</h2>\
                    <div class="' + classify(feature.properties['LINE']) + '">' + (feature.properties['ROUTE'] !== null ? Autolinker.link(String(feature.properties['ROUTE'])) : '') + '</div>\
                    <table class="stats-table">\
                    <tr>\
                        <th>Area Radius:</th>\
                        <th class="number-col ' + (buffer == "eighth_mile" ? "active" : "") + '">1/8 mile</th>\
                        <th class="number-col ' + (buffer == "300_ft" ? "active" : "") + '">300 ft</th>\
                    </tr>\
                    <tr>\
                        <td class="' + (metric === "income" ? "active" : "") + '">Income</td>\
                        <td class="number-col ' + (metric === "income" && buffer === "eighth_mile" ? "active" : "") + '">' + (feature.properties['eighth_mic'] !== null ? '$' + Autolinker.link(feature.properties['eighth_mic'].toLocaleString()) : '-') + '</td>\
                        <td class="number-col ' + (metric === "income" && buffer === "300_ft" ? "active" : "") + '">' + (feature.properties['medIncCalc'] !== null ? '$' + Autolinker.link(feature.properties['medIncCalc'].toLocaleString()) : '-') + '</td>\
                    </tr>\
                    <tr>\
                        <td class="' + (metric === "rent" ? "active" : "") + '">Gross Rent</td>\
                        <td class="number-col rent  ' + (metric === "rent" && buffer === "eighth_mile" ? "active" : "") + '">' + (feature.properties['eighth_mrc'] !== null ? '$' + Autolinker.link(feature.properties['eighth_mrc'].toLocaleString()) : '-') + '</td>\
                        <td class="number-col rent  ' + (metric === "rent" && buffer === "300_ft" ? "active" : "") + '">' + (feature.properties['MedRenCalc'] !== null ? '$' + Autolinker.link(feature.properties['MedRenCalc'].toLocaleString()) : '-') + '</td>\
                    </tr>\
                    <tr>\
                        <td class="' + (metric === "home" ? "active" : "") + '">Home Value</td>\
                        <td class="number-col home  ' + (metric === "home" && buffer === "eighth_mile" ? "active" : "") + '">' + (feature.properties['eighth_mhc'] !== null ? '$' + Autolinker.link(feature.properties['eighth_mhc'].toLocaleString()) : '-') + '</td>\
                        <td class="number-col home  ' + (metric === "home" && buffer === "300_ft" ? "active" : "") + '">' + (feature.properties['MedHomCalc'] !== null ? '$' + Autolinker.link(feature.properties['MedHomCalc'].toLocaleString()) : '-') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
        maxWidth: isMobile ? 194 : 280,
        autoPanPaddingTopLeft: isMobile ? [46,10] : [46,69]
    });
}

json_Stops3.features.sort(function (a,b) { return b.properties[sizeByAttr] - a.properties[sizeByAttr]; });

var rscale = d3.scaleSqrt()
    .range([0,15])
    .domain([0,d3.max(json_Stops3.features, function(d) {
        return +d.properties[sizeByAttr];
    })]);

// console.log(rscale(40654));

function style_Stops3(feature) {
    // console.log(feature);
    // console.log(sizeByAttr);
    // console.log(feature.properties[sizeByAttr]);
    var areaAttr = feature.properties[sizeByAttr];
    // console.log(areaAttr);
    // console.log(feature.properties.medIncCalc);
    // console.log(json_Stops3.features);
    // console.log(d3.map(json_Stops3.features, function(d) {
    //         return +d.properties.medIncCalc;
    //     }));

    // var quantile = d3.scale.quantile()
    //     .range(d3.range(5))
    //     .domain()
    // console.log(rscale(+feature.properties.medIncCalc));


    switch (feature.properties['LINE']) {
        case 'BLUE':
            return {
                pane: 'pane_Stops3',
                radius: rscale(areaAttr),
                // radius: 4,
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: colors.blue,
            }
            break;
        case 'BLUE/GREEN':
            return {
                pane: 'pane_Stops3',
                // radius: 6.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: 'rgba(191,191,191,1.0)',
            }
            break;
        case 'BLUE/ORANGE':
            return {
                pane: 'pane_Stops3',
                // radius: 6.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: 'rgba(191,191,191,1.0)',
            }
            break;
        case 'GREEN':
            return {
                pane: 'pane_Stops3',
                // radius: 4.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: colors.green,
            }
            break;
        case 'GREEN/ORANGE':
            return {
                pane: 'pane_Stops3',
                // radius: 6.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: 'rgba(191,191,191,1.0)',
            }
            break;
        case 'GREEN/RED':
            return {
                pane: 'pane_Stops3',
                // radius: 6.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: 'rgba(191,191,191,1.0)',
            }
            break;
        case 'ORANGE':
            return {
                pane: 'pane_Stops3',
                // radius: 4.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: colors.orange,
            }
            break;
        case 'ORANGE/RED':
            return {
                pane: 'pane_Stops3',
                // radius: 6.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: 'rgba(191,191,191,1.0)',
            }
            break;
        case 'RED':
            return {
                pane: 'pane_Stops3',
                // radius: 4.0,
                radius: rscale(areaAttr),
                opacity: 1,
                color: 'rgba(255,255,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fillOpacity: 1,
                fillColor: colors.red,
            }
            break;
    }
}
map.createPane('pane_Stops3');
map.getPane('pane_Stops3').style.zIndex = 403;
map.getPane('pane_Stops3').style['mix-blend-mode'] = 'normal';
var layer_Stops3 = new L.geoJson(json_Stops3, {
    attribution: '<a href=""></a>',
    pane: 'pane_Stops3',
    onEachFeature: pop_Stops3,
    pointToLayer: function(feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Stops3(feature))
    }
});
bounds_group.addLayer(layer_Stops3);
map.addLayer(layer_Stops3);

function changeMetric(metric) {
    sizeByAttr = metric;

    rscale.domain([0,d3.max(json_Stops3.features, function(d) {
        return +d.properties[sizeByAttr];
    })]);

    json_Stops3.features.sort(function (a,b) { return b.properties[sizeByAttr] - a.properties[sizeByAttr]; });

    map.removeLayer(layer_Stops3);
    layer_Stops3 = new L.geoJson(json_Stops3, {
        attribution: '<a href=""></a>',
        pane: 'pane_Stops3',
        onEachFeature: pop_Stops3,
        pointToLayer: function(feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Stops3(feature))
        }
    });

    map.addLayer(layer_Stops3);
}

// function pop_centralpoint4(feature, layer) {
//     // layer.on({
//     //     mouseout: function(e) {
//     //         if (typeof layer.closePopup == 'function') {
//     //             layer.closePopup();
//     //         } else {
//     //             layer.eachLayer(function(feature) {
//     //                 feature.closePopup()
//     //             });
//     //         }
//     //     },
//     //     mouseover: highlightFeature,
//     // });
//     // var popupContent = '<table>\
//     //                 <tr>\
//     //                     <td colspan="2">' + (feature.properties['STATION'] !== null ? Autolinker.link(String(feature.properties['STATION'])) : '') + '</td>\
//     //                 </tr>\
//     //                 <tr>\
//     //                     <td colspan="2">' + (feature.properties['LINE'] !== null ? Autolinker.link(String(feature.properties['LINE'])) : '') + '</td>\
//     //                 </tr>\
//     //                 <tr>\
//     //                     <td colspan="2">' + (feature.properties['TERMINUS'] !== null ? Autolinker.link(String(feature.properties['TERMINUS'])) : '') + '</td>\
//     //                 </tr>\
//     //                 <tr>\
//     //                     <td colspan="2">' + (feature.properties['ROUTE'] !== null ? Autolinker.link(String(feature.properties['ROUTE'])) : '') + '</td>\
//     //                 </tr>\
//     //                 <tr>\
//     //                     <td colspan="2">' + (feature.properties['area'] !== null ? Autolinker.link(String(feature.properties['area'])) : '') + '</td>\
//     //                 </tr>\
//     //                 <tr>\
//     //                     <td colspan="2">' + (feature.properties['perim'] !== null ? Autolinker.link(String(feature.properties['perim'])) : '') + '</td>\
//     //                 </tr>\
//     //             </table>';
//     // layer.bindPopup(popupContent);
// }

// function style_centralpoint4() {
//     return {
//         pane: 'pane_centralpoint4',
//         radius: 4.0,
//         opacity: 1,
//         color: 'rgba(0,0,0,1.0)',
//         dashArray: '',
//         lineCap: 'butt',
//         lineJoin: 'miter',
//         weight: 1,
//         fillOpacity: 1,
//         fillColor: 'rgba(182,22,148,1.0)',
//     }
// }
// map.createPane('pane_centralpoint4');
// map.getPane('pane_centralpoint4').style.zIndex = 404;
// map.getPane('pane_centralpoint4').style['mix-blend-mode'] = 'normal';
// var layer_centralpoint4 = new L.geoJson(json_centralpoint4, {
//     attribution: '<a href=""></a>',
//     pane: 'pane_centralpoint4',
//     onEachFeature: pop_centralpoint4,
//     pointToLayer: function(feature, latlng) {
//         var context = {
//             feature: feature,
//             variables: {}
//         };
//         return L.circleMarker(latlng, style_centralpoint4(feature))
//     }
// });
// bounds_group.addLayer(layer_centralpoint4);
// map.addLayer(layer_centralpoint4);


// var title = new L.Control();
// title.onAdd = function(map) {
//     this._div = L.DomUtil.create('div', 'info');
//     this.update();
//     return this._div;
// };
// title.update = function() {
//     this._div.innerHTML = '<h2>Income and Housing by T Stop</h2>';
// };
// if ( !isMobile ) {
//     title.addTo(map);
// }

// var methods = new L.Control({
//         position: "bottomright"
//     });
// methods.onAdd = function(map) {
//     this._div = L.DomUtil.create('div', 'methods');
//     this.update();
//     return this._div;
// };
// methods.update = function() {
//     this._div.innerHTML = '<a href="#methods">How was this calculated?</a>';
// };
// methods.addTo(map);

var metricControlBox = 
    '<div id="map-controls">\
        Size stations by \
        <select name="metric" id="metric" class="control">\
            <option value="income">median household income</option>\
            <option value="rent">median gross rent</option>\
            <option value="home">median home value</option>\
        </select>\
        of area \
        <select name="buffer" id="buffer" class="control">\
            <option value="eighth_mile">1/8 mile</option>\
            <option value="300_ft">300 ft</option>\
        </select>\
        away\
        <div class="methods-link"><a href="#methods">How was this calculated?</a></div>\
    </div>';

if ( isMobile ) {
    d3.select('.pre-map').append('div').html(metricControlBox);
}
else {
    var metricControls = new L.Control({
        // position: "bottomright"
    });
    metricControls.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'selector');
        this.update();
        return this._div;
    }
    metricControls.update = function() {
        this._div.innerHTML = metricControlBox;
        
    };
    metricControls.addTo(map);
}

metric = d3.select("#metric").property("value");
buffer = d3.select("#buffer").property("value");

setBounds();
if (map.hasLayer(layer_Stops3)) {
    if (map.getZoom() <= 19 && map.getZoom() >= 10) {
        layer_Stops3.eachLayer(function(layer) {
            layer.openTooltip();
        });
    } else {
        layer_Stops3.eachLayer(function(layer) {
            layer.closeTooltip();
        });
    }
}

var searchControl = new L.Control.Search({
    layer: layer_Stops3,
    initial: false,
    hideMarkerOnCollapse: false,
    openPopup: true,
    propertyName: 'STATION',
    textPlaceholder: "Search for Station...",
    tipAutoSubmit: true,
    autoCollapse: true
});

searchControl.on('search:locationfound', function(e) {
    // console.log(e);
    e.layer.openPopup();
});

map.addControl( searchControl );

d3.selectAll("#map-controls select").on("change", function() {
    metric = d3.select("#metric").property("value");
    buffer = d3.select("#buffer").property("value");

    changeMetric(metrics[buffer][metric]);
})

// // set the dimensions and margins of the graph
// var margin = {top: 20, right: 20, bottom: 30, left: 50}

// /* Find the new window dimensions */
// var width = parseInt(d3.select("#chart").style("width")) - margin.left - margin.right,
// // height = parseInt(d3.select("#chart").style("height")) - margin.top - margin.bottom;
// height = 500 - margin.top - margin.bottom;

// var data = json_Stops3.features;
// // console.log(data);

// // var lines = [
// //     { line: "", keyword: functio}
// // ];

// // set the ranges
// var x = d3.scaleLinear().range([0, width]);
// var y = d3.scaleLinear().range([height, 0]);

// var splitData = [];

// data.forEach(function(d) {

//     // console.log(d.properties.LINE.split('/'));

//     d.properties.LINE.split('/').forEach(function(line, i) {
//         // var point = d;
//         // point.x = d.properties.dir_dist;
//         // point.y = d.properties[sizeByAttr];
//         // point.line = line;
//         // point.route = d.properties.ROUTE.split('/')[i].replace(line, '').trim();

//         // console.log(i);
//         // console.log(line + ' ' + point.route);
//         // console.log(point.properties.STATION);

//         // console.log(point);
//         // splitData.push(point);
//         // console.log(splitData[splitData.length - 1]);


//         if ( 
//                 line === 'BLUE' && d.properties.STATION == 'State'  ||
//                 line ==='RED' && d.properties.STATION =="Park Street" ||
//                 line ==='GREEN' && d.properties.STATION =="Government Center"
//             ) {
//             d.properties.dir_dist = -d.properties.dir_dist;
//         }

//         var connection = d.properties.ROUTE.split('/')[i].replace(line, '').trim()

//         if ( connection.includes('Mattapan') ) {
//             connection = 'A - Ashmont  C - Alewife';
//         }

//         if ( connection.includes('E - Lechmere') || connection.includes('C E') ) {
//             connection = 'B C D E';
//         }

//         if ( connection.includes('B C D') ) {
//             connection.split(' ').forEach(function (branch) {
//                 splitData.push({
//                     properties: d.properties,
//                     geometry: d.geometry,
//                     x: d.properties.dir_dist,
//                     y: d.properties[sizeByAttr],
//                     line: line,
//                     route: branch
//                 });
//             });
//         }
//         else if ( connection.includes('Ashmont') && connection.includes('Braintree') ) {
//             splitData.push({
//                 properties: d.properties,
//                 geometry: d.geometry,
//                 x: d.properties.dir_dist,
//                 y: d.properties[sizeByAttr],
//                 line: line,
//                 route: 'A - Ashmont C - Alewife'
//             });
//             splitData.push({
//                 properties: d.properties,
//                 geometry: d.geometry,
//                 x: d.properties.dir_dist,
//                 y: d.properties[sizeByAttr],
//                 line: line,
//                 route: 'B - Braintree C - Alewife'
//             });
//         }
//         else {
//             splitData.push({
//                 properties: d.properties,
//                 geometry: d.geometry,
//                 x: d.properties.dir_dist,
//                 y: d.properties[sizeByAttr],
//                 line: line,
//                 route: connection
//             });
//         }
//     })

// })

// // console.log(data);
// // console.log(splitData);



// // define the line
// var valueline = d3.line()
//     .x(function(d) { return x(d.x); })
//     .y(function(d) { return y(d.y); })
//     .curve(d3.curveCardinal);

// // append buttons for choosing the line
// var lineButton = d3.select("#chart").append("div")
//     .attr("class", "line-buttons")
//     .selectAll(".button")
//     .data(["RED","ORANGE", "BLUE", "GREEN"])
//     .enter()
//     .append("div")
//         .attr("class", function(d) { return classify(d) + " button" })
//         .text(function(d) { return d[0] + "L"; });

// // append the svg obgect to the body of the page
// // appends a 'group' element to 'svg'
// // moves the 'group' element to the top left margin
// var svg = d3.select("#chart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// // Scale the range of the data
// x.domain(d3.extent(splitData, function(d) { return d.x; }));
// y.domain([0, d3.max(splitData, function(d) { return d.y; })]);

// // console.log(data);

// var connectedRoutes = [
//     {color: 'ORANGE' , route: 'Forest Hills to Oak Grove'},
//     {color: 'BLUE' , route: 'Bowdoin to Wonderland'},
//     {color: 'RED' , route: 'A - Ashmont'},
//     {color: 'RED' , route: 'B - Braintree'},
//     {color: 'GREEN' , route: 'E'},
//     {color: 'GREEN' , route: 'D'},
//     {color: 'GREEN' , route: 'C'},
//     {color: 'GREEN' , route: 'B'},
// ];

// connectedRoutes.forEach

// var nestedData = d3.nest()
//     .key(function(d) {
//         var key;
//         connectedRoutes.some(function(connectedRoute) {
//             // console.log(d.route);
//             // console.log(connectedRoute.route);
//             // console.log(connectedRoute.color);
//             // console.log(d.line);
//             // console.log(d.route.includes(connectedRoute.route));
//             if ( d.route.includes(connectedRoute.route) && connectedRoute.color === d.line ) {
//                 key = connectedRoute.route;
//                 return;
//             }
//         });
//         return key;
//     })
//     .sortValues(function(a,b) {
//         return a.x - b.x;
//     })
//     .entries(splitData.filter(function(d) { return d.y !== null; }));
// console.log(nestedData);

// var line = svg.append('g')
//     .attr('class', 'lines')
//     .selectAll('path')
//         .data(nestedData)
//         .enter()
//         .append('path')
//             .attr('class', 'line')
//             .attr('stroke', function(d) { return colors[classify(d.values[0].line)]; })
//             .attr('fill', 'none')
//             .attr('stroke-width', 3)
//             .attr('d', function(d) { 
//                 return valueline(d.values);
//             });

// var points = svg
//     .selectAll('g.points')
//     .data(nestedData)
//     .enter()
//     .append('g')
//         .attr('class', 'points')
//         .attr('id', function(d) { return classify(d.key); });

// var point = points.selectAll('circle')
//     .data(function(d) { return d.values; })
//     .enter()
//     .append('circle')
//         .attr('class', 'point')
//         .attr('id', function(d) { return classify(d.properties.STATION); })
//         .attr('cx', function(d) { return x(d.x); })
//         .attr('cy', function(d) { return y(d.y); })
//         .attr('r', 3)
//         .attr('stroke-width', 1)
//         .attr('stroke', 'white')
//         .attr('fill', function(d) { return colors[classify(d.line)]; });


// dispatch.on('stopSelect.chart', function(feature) {
//     return;
// });

// // Add the valueline paths.
// // nestedData.forEach(function(d) {
// //     svg.append("path")
// //       .attr("class", "line")
// //       .attr("d", valueline(d.values.sort(function(a, b) {
// //         return a.x - b.x
// //       })));

// //     svg.appent("circle")
// // });

// // Add the X Axis
// svg.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x));

// // Add the Y Axis
// svg.append("g")
//   .call(d3.axisLeft(y));
