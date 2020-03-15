import * as d3 from 'd3'
import topojson from '../data/world-110m.json'

const main = () => {
    var width = 1600;
    var height = 900;

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);


    /* JavaScript goes here. */
    d3.json("C:/Users/tyobe/workspace/projects/pros/Geometry/data/world-110m.json", function (error, worldmap) {
        console.log(error);
        svg.append("path")
            .datum(topojson.object(worldmap, worldmap.objects.countries))
            .attr("d", d3.geo.path().projection(d3.geo.mercator()));
    });
}
main()
export default main;