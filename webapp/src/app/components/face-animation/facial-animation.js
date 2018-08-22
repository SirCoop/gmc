import * as THREE from 'three';

const renderFacialAnimation = function () {
  return new Promise((resolve, reject) => {
    THREE.Cache.enabled = true;

    var scene, renderer, container;
    var camera, light;
    var fnh, vnh;
    init();
    animate();

    function init() {
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth - 20, window.innerHeight - 20);
      container = document.getElementById('facial-animation-canvas');
      container.appendChild(renderer.domElement);
      // document.body.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 400;
      scene = new THREE.Scene();
      light = new THREE.PointLight();
      light.position.set(200, 100, 150);
      scene.add(light);
      scene.add(new THREE.PointLightHelper(light, 15));

      /* Square and Circular grids on the bottom of the animation */
      // var gridHelper = new THREE.GridHelper(400, 40, 0x0000ff, 0x808080);
      // gridHelper.position.y = -150;
      // gridHelper.position.x = -150;
      // scene.add(gridHelper);
      // var polarGridHelper = new THREE.PolarGridHelper(200, 16, 8, 64, 0x0000ff, 0x808080);
      // polarGridHelper.position.y = -150;
      // polarGridHelper.position.x = 200;
      // scene.add(polarGridHelper);

      var loader = new THREE.JSONLoader();
      loader.load('/api/threejs/lps_head.json', function (geometry, materials) {
        var material = new THREE.MeshLambertMaterial();
        var group = new THREE.Group();
        group.scale.multiplyScalar(50);
        scene.add(group);
        // To make sure that the matrixWorld is up to date for the boxhelpers
        group.updateMatrixWorld(true);
        var mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
        fnh = new THREE.FaceNormalsHelper(mesh, 5);
        scene.add(fnh);
        vnh = new THREE.VertexNormalsHelper(mesh, 5);
        scene.add(vnh);

        /* A BoxHelper is a cube around the head scan */
        // scene.add(new THREE.BoxHelper(mesh));

        var wireframe = new THREE.WireframeGeometry(geometry);
        var line = new THREE.LineSegments(wireframe);
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = true;
        line.position.x = 4;
        group.add(line);

        /* A BoxHelper is a cube around the head scan */
        // scene.add(new THREE.BoxHelper(line));

        var edges = new THREE.EdgesGeometry(geometry);
        var line = new THREE.LineSegments(edges);
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = true;
        line.position.x = -4;
        group.add(line);

        /* A BoxHelper is a cube around the head scan */
        // scene.add(new THREE.BoxHelper(line));
        // scene.add(new THREE.BoxHelper(group));
        // scene.add(new THREE.BoxHelper(scene));

        resolve();

      });

      window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      var time = -performance.now() * 0.0003;
      camera.position.x = 400 * Math.cos(time);
      camera.position.z = 400 * Math.sin(time);
      camera.lookAt(scene.position);
      light.position.x = Math.sin(time * 1.7) * 300;
      light.position.y = Math.cos(time * 1.5) * 400;
      light.position.z = Math.cos(time * 1.3) * 300;
      if (fnh) fnh.update();
      if (vnh) vnh.update();
      renderer.render(scene, camera);
    }
  });
}

export default renderFacialAnimation;
