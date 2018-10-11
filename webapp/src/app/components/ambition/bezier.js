const bezier = function () {
  /* based on the work of Jason Davies. */
  // set dimensions of drawing
  var w = 1100,
    h = 600,
    t = .5,
    delta = .01,
    padding = 10,
    // starting location of dots
    // .style("font-family", function(d) { return d['font-family'];})
    // .style("font-size", function(d) { return d['font-size'];})
    // .style("stroke", 'red')
    // .style('fill', function(d) { return d.color;})   
    points = [{
      x: 250,
      y: 550,
      'font-family': 'Heebo',
      'font-size': '22px',
      'color': '#000'
    }, {
      x: 400,
      y: 301,
      'font-family': 'Heebo',
      'font-size': '22px',
      'color': '#000'
    }, {
      x: 730,
      y: 436,
      'font-family': 'Heebo',
      'font-size': '22px',
      'color': '#000'
    }, {
      x: 900,
      y: 276,
      'font-family': 'Heebo',
      'font-size': '22px',
      'color': '#000'
    }, {
      x: 978,
      y: 65,
      'font-family': 'Heebo',
      'font-size': '22px',
      'color': '#000'
    }],
    bezier = {},
    line = d3.line().x(x).y(y),
    n = 4,
    orders = d3.range(5, n + 2);
  var vis = d3.select("#bezier").selectAll("svg")
    .data(orders)
    .enter().append("svg:svg")
    .classed("svg-container", true)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 1200 800")
    //class to make it responsive
    .classed("svg-content-responsive", true)
    .attr("width", w + 2 * padding)
    .attr("height", h + 2 * padding)
    .append("svg:g")
    .attr("transform", "translate(" + padding + "," + padding + ")");

  update();

  vis.selectAll("circle.control")
    .data(function (d) {
      return points.slice(0, d)
    })
    .enter().append("svg:circle")
    .attr("class", "control")
    .attr("r", 10)
    .attr("cx", x)
    .attr("cy", y)
    // Milestones (large circles)
    .style('fill', '#01518C')
    .call(d3.drag()
      .on("start", function (d) {
        this.__origin__ = [d.x, d.y];
      })
      .on("drag", function (d) {
        d.x = Math.min(w, Math.max(0, this.__origin__[0] += d3.event.dx));
        d.y = Math.min(h, Math.max(0, this.__origin__[1] += d3.event.dy));
        bezier = {};
        update();
        vis.selectAll("circle.control")
          .attr("cx", x)
          .attr("cy", y);
      })
      .on("end", function () {
        delete this.__origin__;
      }));

  const milestoneLabels = [
    {
      id: 0,
      label: 'Duke MBA'      
    },
    {
      id: 1,
      label: 'Technology Consulting'
    },
    {
      id: 2,
      label: 'Launch Tech Startup'
    },
    {
      id: 3,
      label: 'Found UN Chartered Elementary School'
    },
    {
      id: 4,
      label: 'Motivational Speaking Platform'
    }
  ]

  vis.append("svg:text")
    .attr("class", "t")
    .attr("x", w / 2)
    .attr("y", h)
    .attr("text-anchor", "middle");

  vis.selectAll("text.controltext")
    .data(function (d) {
      return points.slice(0, d);
    })
    .enter().append("svg:text")
    .attr("class", "controltext")
    .attr("dx", "22px")
    .attr("dy", ".4em")
    .style("font-family", function(d) { 
      console.log('d: ', d);
      return d['font-family'];})
    .style("font-size", function(d) { return d['font-size'];})
    .style('fill', function(d) { return d['color'];})   
    .text(function (d, i) {      
      return milestoneLabels[i].label;
    });


  var last = 0;
  d3.timer(function (elapsed) {
    t = (t + (elapsed - last) / 5000) % 1;
    last = elapsed;
    update();
  });

  function update() {
    var interpolation = vis.selectAll("g")
      .data(function (d) {
        return getLevels(d, t);
      });
    interpolation.enter().append("svg:g")
      .style("fill", color)
      .style("stroke", color);

    var circle = interpolation.selectAll("circle")
      .data(Object);
    circle.enter().append("svg:circle")
      .attr("r", 3);
    circle
      .attr("cx", x)
      .attr("cy", y);

    var path = interpolation.selectAll("path")
      .data(function (d) {
        return [d];
      });
    path.enter().append("svg:path")
      .attr("class", "line")
      .attr("d", line);
    path.attr("d", line)
      .style('fill', 'rgba(204, 204, 204, 0)')
      .style('stroke', '#565656');

    var curve = vis.selectAll("path.curve")
      .data(getCurve);
    curve.enter().append("svg:path")
      .attr("class", "curve")
      // fill should be zero so that we don't see the 2-d planes
      .style('fill', 'rgba(255, 255, 255, 0)')
      // stroke is the actual line that we wish to see
      .style('stroke', 'white');
    curve.attr("d", line);

    vis.selectAll("text.controltext")
      .attr("x", x)
      .attr("y", y)
      // milestone labels
      .style('stroke', 'white')
      .style('font-weight', 'lighter')
      .style('font-family', 'Arial');
  }

  function interpolate(d, p) {
    if (arguments.length < 2) p = t;
    var r = [];
    for (var i = 1; i < d.length; i++) {
      var d0 = d[i - 1],
        d1 = d[i];
      r.push({
        x: d0.x + (d1.x - d0.x) * p,
        y: d0.y + (d1.y - d0.y) * p
      });
    }
    return r;
  }


  function getLevels(d, t_) {
    if (arguments.length < 2) t_ = t;
    var x = [points.slice(0, d)];
    for (var i = 1; i < d; i++) {
      x.push(interpolate(x[x.length - 1], t_));
    }
    return x;
  }

  function getCurve(d) {
    var curve = bezier[d];
    if (!curve) {
      curve = bezier[d] = [];
      for (var t_ = 0; t_ <= 1; t_ += delta) {
        var x = getLevels(d, t_);
        curve.push(x[x.length - 1][0]);
      }
    }
    return [curve.slice(0, t / delta + 1)];
  }

  function x(d) {
    return d.x;
  }

  function y(d) {
    return d.y;
  }

  function color(d, i) {
    return d.length > 1 ? ["#ccc", "yellow", "blue", "green"][i] : "red";
  }
}

export default bezier;
