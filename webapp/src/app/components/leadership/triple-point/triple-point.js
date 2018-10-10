const data = [{
    date: '1-May-12',
    close: 58.13
  },
  {
    date: '30-Apr-12',
    close: 53.98
  },
  {
    date: '27-Apr-12',
    close: 67.00
  },
  {
    date: '26-Apr-12',
    close: 89.70
  },
  {
    date: '25-Apr-12',
    close: 99.00
  },
  {
    date: '24-Apr-12',
    close: 130.28
  },
  {
    date: '23-Apr-12',
    close: 166.70
  },
  {
    date: '20-Apr-12',
    close: 234.98
  },
  {
    date: '19-Apr-12',
    close: 345.44
  }
]

const triplePoint = function () {

  // set the dimensions and margins of the graph
  var margin = {
      top: 20,
      right: 20,
      bottom: 100,
      left: 50
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // parse the date / time
  var parseDate = d3.timeParse("%d-%b-%y");

  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  // define the line
  var valueline = d3.line()
    .x(function (d) {
      return x(d.date);
    })
    .y(function (d) {
      return y(d.close);
    });

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#triplePoint").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  // format the data
  data.forEach(function (d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function (d) {
    return d.date;
  }));
  y.domain([0, d3.max(data, function (d) {
    return d.close;
  })]);

  // Add the valueline path.
  svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", valueline);

  // Add the X Axis
  //   svg.append("g")
  //     .attr("class", "axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(d3.axisBottom(x)
  //       .tickFormat(d3.timeFormat("%Y-%m-%d")))
  //     .selectAll("text")
  //     .style("text-anchor", "end")
  //     .attr("dx", "-.8em")
  //     .attr("dy", ".15em")
  //     .attr("transform", "rotate(-65)");

  // Add the Y Axis
  //   svg.append("g")
  //     .attr("class", "axis")
  //     .call(d3.axisLeft(y));

  // Add the x Axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // text label for the x axis
  svg.append("text")
    .attr("transform",
      "translate(" + (width / 2) + " ," +
      (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("TIME");

  // Add the y Axis
  svg.append("g")
    .call(d3.axisLeft(y));

  // text label for the y axis
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("PRESSURE");
}

export default triplePoint;
