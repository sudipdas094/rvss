(function() {
  var globe = planetaryjs.planet();
  // Load our custom `autorotate` plugin; see below.
  globe.loadPlugin(autorotate(10));
  // The `earth` plugin draws the oceans and the land; it's actually
  // a combination of several separate built-in plugins.
  globe.loadPlugin(planetaryjs.plugins.earth({
    oceans:   { fill:   '#b6d0e4' },
    land:     { fill:   '#ffffff' },
    borders:  { stroke: '#7fadcb' }
  }));

  // The `pings` plugin draws animated pings on the globe.
  globe.loadPlugin(planetaryjs.plugins.pings());
  
  // Set up the globe's initial scale, offset, and rotation.
  globe.projection.scale(250).translate([250, 250]).rotate([0, -10, 0]);

  // Every few hundred milliseconds, we'll draw another random ping.
  //var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
  // setInterval(function() {
  //   var lat = Math.random() * 170 - 85;
  //   var lng = Math.random() * 360 - 180;
  //var color = colors[Math.floor(Math.random() * colors.length)];
  //   globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 10 });
  // }, 150);

  setInterval(function() {
    //HK
    globe.plugins.pings.add(114.1743642344263, 22.314384714710563, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //JP
    globe.plugins.pings.add(138.3997113979168, 36.563111477021934, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //South Korea
    globe.plugins.pings.add(127.97271040957453, 36.25398160034596, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Australia
    globe.plugins.pings.add(132.22285245799392, -24.590490964460322, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Macau
    globe.plugins.pings.add(113.54521962177452, 22.203259313318277, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Taiwan
    globe.plugins.pings.add(121.13596790131014, 23.439455472333886, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //China (Mainland)
    globe.plugins.pings.add(104.50462709560524, 34.19663143654558, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Malaysia
    globe.plugins.pings.add(102.19558063790413, 3.826352664984158, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Thailand
    globe.plugins.pings.add(101.36489852166544, 15.428316641596517, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //India
    globe.plugins.pings.add(79.56173483575947, 22.632013905158637, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Philippines
    globe.plugins.pings.add(123.28959309207961, 12.63068382459527, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Vietnam
    globe.plugins.pings.add(108.64776470690612, 14.461593282599031, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Indonesia
    globe.plugins.pings.add(122.56808527951137, -4.337773812138566, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Singapore
    globe.plugins.pings.add(103.86483806623353, 1.3544972506141095, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //Europe
    //globe.plugins.pings.add(-2.3090429597292146, 54.77857595631826, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //New Zealand
    globe.plugins.pings.add(173.757088, -41.581167, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
    //UAE- Dubai
    globe.plugins.pings.add(55.270782, 25.204849, { color: '#D61145', ttl: 2000, angle: Math.random() * 10 });
  }, 500);


  // The `zoom` and `drag` plugins enable
  // manipulating the globe with the mouse.
  globe.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [100, 300]
  }));
  globe.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function() {
      this.plugins.autorotate.pause();
    },
    onDragEnd: function() {
      this.plugins.autorotate.resume();
    }
  }));


  var canvas = document.getElementById('rotatingGlobe');
  // Special code to handle high-density displays (e.g. retina, some phones)
  // In the future, Planetary.js will handle this by itself (or via a plugin).
  if (window.devicePixelRatio == 2) {
    canvas.width = 1048;
    canvas.height = 1048;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  // Draw that globe!
  globe.draw(canvas);

  // This plugin will automatically rotate the globe around its vertical
  // axis a configured number of degrees every second.
  function autorotate(degPerSec) {
    // Planetary.js plugins are functions that take a `planet` instance
    // as an argument...
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      // ...and configure hooks into certain pieces of its lifecycle.
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          // This plugin uses the built-in projection (provided by D3)
          // to rotate the globe each time we draw it.
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 1000;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  };

})();