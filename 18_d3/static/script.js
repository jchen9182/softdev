/*
Justin Chen and Saad Bhuiyan
SoftDev2 pd02 and pd09
K18 -- Come Up For Air
2020-04-21

TY:
    https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0
    https://www.d3-graph-gallery.com/graph/line_basic.html
    https://www.dashingd3js.com/svg-paths-and-d3js
*/

// Get json data
var data;

fetch("/data")
    // Get the json data
    .then((response) => {
        return response.json();
    })
    // Get the data and store it in a variable
    .then((returnedJSON) => {
        data = returnedJSON["data"];
    });

// Variables
var loaded = false;

// Buttons
var loadButton = document.getElementById("load");
loadButton.addEventListener("click", load);

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", next);

// Helper functions for getting data into proper format
function getYears() {
    var years = [];

    for (i = 0; i <= 136; i++) {
        // Parse integer to year
        var format = d3.timeParse(("%Y"));
        years[i] = format(i + 1880);
    }

    return years;
}

function getAnomalies() {
    var anomalies = [];

    for (i = 0; i <= 136; i++) {
        anomalies[i] = parseFloat(data[i + 1880]);
    }

    return anomalies;
}

function createDataObject(years, anomalies) {
    var dataObject = [];

    for (i = 0; i <= 136; i++) {
        dataObject[i] = {
            "year": years[i],
            "anom": anomalies[i]
        };
    }
    return dataObject;
}

// Create the SVG and graph
function load(e) {
    // Should only load once
    if (loaded) {
        return;
    }
    else {
        // Variables
        var svgHeight = 500;
        var svgWidth = 500;

        var margins = {top: 30, bottom: 30, left: 30, right: 30};
        var height = svgHeight - margins.top - margins. bottom;
        var width = svgWidth - margins.left - margins.right;

        var years = getYears();
        var anomalies = getAnomalies();
        var myData = createDataObject(years, anomalies);

        // Create SVG
        var svg = d3.select("#svg")
        .append("svg")
            .attr("height", svgHeight)
            .attr("width", svgWidth)
        .append("g")
            .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

        // Set axes
        // Domain: min, max of our values
        // Range: size of our graph
        var xAxis = d3.scaleTime()
            .domain(d3.extent(years))
            .range([0, width]);
        var yAxis = d3.scaleLinear()
            .domain(d3.extent(anomalies))
            // Height on top, 0 on bottom
            .range([height, 0]);
        
        // Add axes to SVG
        svg.append("g")
        // Move x-axis to middle
        .attr("transform", "translate(0," + height / 2 + ")")
        .call(d3.axisBottom(xAxis));
        svg.append("g").call(d3.axisLeft(yAxis));

        // Generate the line's path
        var line = d3.line()
            // Set x/y values to that in years/anomalies
            .x(d => xAxis(d.year))
            .y(d => yAxis(d.anom));
        
        // Add the line
        svg.append("path")
        // Pass data to line generator
        .attr("stroke", "steelblue")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("d", line(myData));
        console.log(myData);

        loaded = true;
    }
}

function next(e) {
    return;
}