import { AfterViewInit, Component } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-star-background',
  template: '<canvas id="star-background-canvas"></canvas>',
  styles: [
    `
      canvas {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class StarBackgroundComponent implements AfterViewInit {
  canvas!: HTMLCanvasElement;
  scene: THREE.Scene = new THREE.Scene();
  camera!: THREE.PerspectiveCamera;
  stars!: THREE.Points;
  fov: number = 75;
  renderer!: THREE.WebGLRenderer;
  starCount: number = 20000;
  rotationSpeed: number = 0.001;
  loaderGLTF: GLTFLoader = new GLTFLoader();

  ngAfterViewInit(): void {
    this.initStarBackground();
  }

  initStarBackground(): void {
    const canvas: HTMLElement | null = document.getElementById(
      'star-background-canvas'
    );
    if (!canvas) throw new Error('Canvas not found');
    this.canvas = canvas as HTMLCanvasElement;

    // camera
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight
    );
    this.scene.add(this.camera);

    // renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // objects
    this.addParticles();

    // start animation
    this.animateFrame();
  }

  animateFrame(): void {
    this.stars.rotation.y += this.rotationSpeed;
    this.stars.rotation.x += this.rotationSpeed;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.animateFrame.bind(this));
  }

  addParticles(): void {
    const bufferGeometry = new THREE.BufferGeometry();
    const points = Float32Array.from(
      { length: this.starCount },
      () => (Math.random() - 0.5) * 100
    );

    bufferGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(points, 3)
    );

    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load(
      '../../assets/images/star-no-bg.png'
    );

    this.stars = new THREE.Points(
      bufferGeometry,
      new THREE.PointsMaterial({
        map: starTexture,
        size: 0.5,
        sizeAttenuation: true,
        transparent: true,
      })
    );
    this.scene.add(this.stars);
  }

  addStarDestroyer(): void {
    this.loaderGLTF.load(
      '../../assets/models/star-destroyer.glb',
      (gltf) => {
        const starDestroyer = gltf.scene;
        starDestroyer.scale.set(0.002, 0.002, 0.002);
        starDestroyer.rotation.set(0, 1, 0.5);
        starDestroyer.position.set(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        );
        this.scene.add(starDestroyer);
      },
      undefined,
      (error) => console.log(error)
    );
  }
}
