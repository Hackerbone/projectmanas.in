import React from "react";
import manasLogo from "../../assets/Logos/manas-with-border.png";
import manasMotto from "../../assets/Logos/manas-motto.svg";
import manasFull from "../../assets/Logos/manas-full-white.png";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Sprite } from "three";

export default function Landing() {
  const mountRef = useRef(null);

  var particles,
    particle,
    count = 0;

  // var windowHalfX = window.innerWidth / 2;
  // var windowHalfY = window.innerHeight / 2;
  var SEPARATION = 40,
    AMOUNTX = 130,
    AMOUNTY = 35;

  var container;
  var camera, scene, renderer;

  useEffect(() => {
    camera = new THREE.PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.y = 400; //changes how far back you can see i.e the particles towards horizon
    camera.position.z = 300; //This is how close or far the particles are seen

    camera.rotation.x = 0.35;

    scene = new THREE.Scene();
    particles = new Array();

    var PI2 = Math.PI * 2;
    // var material = new THREE.SpriteMaterial({
    //   color: 0x939393, //changes color of particles
    //   program: (context) => {
    //     context.beginPath();
    //     context.arc(0, 0, 0.1, 0, PI2, true);
    //     context.fill();
    //   },
    // });

    const map = new THREE.TextureLoader().load("disc.png");
    var material = new THREE.SpriteMaterial({ map: map, color: 0xffffff });

    // var material = new THREE.SpriteMaterial({
    //   uniforms: {
    //     color: { value: new THREE.Color(0xffffff) },
    //     pointTexture: {
    //       value: new THREE.TextureLoader().load("disc.png"),
    //     },
    //   },
    // });

    var i = 0;
    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++] = new THREE.Sprite(material);
        particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
        scene.add(particle);
      }
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x071013, 1);
    mountRef.current.appendChild(renderer.domElement);

    var animate = function () {
      requestAnimationFrame(animate);

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.5) * 20 +
            Math.sin((iy + count) * 0.5) * 20;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 2) * 2.5 +
            (Math.sin((iy + count) * 0.5) + 1) * 2.5;
        }
      }

      renderer.render(scene, camera);
      count += 0.2;
    };

    animate();
  }, []);

  return (
    <>
      <div className="landing-manas" id="landing">
        <div className="logo" ref={mountRef}>
          <img src={manasLogo} alt={"Project Manas"} />
          <img src={manasMotto} alt={"Project Manas"} />
          <img src={manasFull} alt={"Project Manas"} />
        </div>
      </div>
    </>
  );
}
