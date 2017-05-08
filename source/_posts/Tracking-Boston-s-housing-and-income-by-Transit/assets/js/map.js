var highlightLayer;
var dispatch = d3.dispatch('stopSelect');

var classify = function(str) {
    return str.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

var colors = {
    blue: "#007DBE",
    green: "#008F4F",
    orange: "#E88A28",
    red: "#D23934"
};

function highlightFeature(e) {
    highlightLayer = e.target;
    dispatch.call('stopSelect', highlightLayer.feature.properties);
    highlightLayer.openPopup();
}
L.ImageOverlay.include({
    getBounds: function() {
        return this._bounds;
    }
});

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


var center = new L.LatLng(42.3171, -71.1046);
var map = L.map('map', {
    zoomControl: true,
    // center: center,
    maxZoom: 16,
    minZoom: 11
    // zoom: 11
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

function geoJson2heat(geojson, weight) {
    return geojson.features.map(function(feature) {
        return [
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
            feature.properties[weight]
        ];
    });
}

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
    }
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
    }
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
                        <th>Distance</th>\
                        <th class="number-col">300 ft</th>\
                        <th class="number-col">1/8 mile</th>\
                    </tr>\
                    </tr>\
                        <td>Income</td>\
                        <td class="number-col">' + (feature.properties['medIncCalc'] !== null ? '$' + Autolinker.link(feature.properties['medIncCalc'].toLocaleString()) : '-') + '</td>\
                        <td class="number-col">' + (feature.properties['eighth_mic'] !== null ? '$' + Autolinker.link(feature.properties['eighth_mic'].toLocaleString()) : '-') + '</td>\
                    </tr>\
                    <tr>\
                        <td>Gross Rent</td>\
                        <td class="number-col">' + (feature.properties['MedRenCalc'] !== null ? '$' + Autolinker.link(feature.properties['MedRenCalc'].toLocaleString()) : '-') + '</td>\
                        <td class="number-col">' + (feature.properties['eighth_mrc'] !== null ? '$' + Autolinker.link(feature.properties['eighth_mrc'].toLocaleString()) : '-') + '</td>\
                    </tr>\
                    <tr>\
                        <td>House Value</td>\
                        <td class="number-col">' + (feature.properties['MedHomCalc'] !== null ? '$' + Autolinker.link(feature.properties['MedHomCalc'].toLocaleString()) : '-') + '</td>\
                        <td class="number-col">' + (feature.properties['eighth_mhc'] !== null ? '$' + Autolinker.link(feature.properties['eighth_mhc'].toLocaleString()) : '-') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxWidth: 234 });
}

function style_Stops3(feature) {
    switch (feature.properties['LINE']) {
        case 'BLUE':
            return {
                pane: 'pane_Stops3',
                radius: 4.0,
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
                radius: 6.0,
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
                radius: 6.0,
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
                radius: 4.0,
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
                radius: 6.0,
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
                radius: 6.0,
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
                radius: 4.0,
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
                radius: 6.0,
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
                radius: 4.0,
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

function pop_centralpoint4(feature, layer) {
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
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['LINE'] !== null ? Autolinker.link(String(feature.properties['LINE'])) : '') + '</td>\
    //                 </tr>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['TERMINUS'] !== null ? Autolinker.link(String(feature.properties['TERMINUS'])) : '') + '</td>\
    //                 </tr>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['ROUTE'] !== null ? Autolinker.link(String(feature.properties['ROUTE'])) : '') + '</td>\
    //                 </tr>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['area'] !== null ? Autolinker.link(String(feature.properties['area'])) : '') + '</td>\
    //                 </tr>\
    //                 <tr>\
    //                     <td colspan="2">' + (feature.properties['perim'] !== null ? Autolinker.link(String(feature.properties['perim'])) : '') + '</td>\
    //                 </tr>\
    //             </table>';
    // layer.bindPopup(popupContent);
}

function style_centralpoint4() {
    return {
        pane: 'pane_centralpoint4',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fillOpacity: 1,
        fillColor: 'rgba(182,22,148,1.0)',
    }
}
map.createPane('pane_centralpoint4');
map.getPane('pane_centralpoint4').style.zIndex = 404;
map.getPane('pane_centralpoint4').style['mix-blend-mode'] = 'normal';
var layer_centralpoint4 = new L.geoJson(json_centralpoint4, {
    attribution: '<a href=""></a>',
    pane: 'pane_centralpoint4',
    onEachFeature: pop_centralpoint4,
    pointToLayer: function(feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_centralpoint4(feature))
    }
});
bounds_group.addLayer(layer_centralpoint4);
map.addLayer(layer_centralpoint4);
var title = new L.Control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
title.update = function() {
    this._div.innerHTML = '<h2>Income and Housing by T Stop</h2>';
};
if ( !isMobile ) {
    title.addTo(map);
}
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
map.addControl(new L.Control.Search({
    layer: layer_Stops3,
    initial: false,
    hideMarkerOnCollapse: true,
    propertyName: 'STATION',
    textPlaceholder: "Search for Station..."
}));
