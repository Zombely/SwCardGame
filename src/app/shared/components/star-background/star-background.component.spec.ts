import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarBackgroundComponent } from './star-background.component';
import * as THREE from 'three';

describe('StarBackgroundComponent', () => {
  let component: StarBackgroundComponent;
  let fixture: ComponentFixture<StarBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarBackgroundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create canvas', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('canvas#star-background-canvas')
    ).toBeTruthy();
  });

  it('ngAfterViewInit should call initStarBackground', () => {
    spyOn(component, 'initStarBackground');
    component.ngAfterViewInit();
    expect(component.initStarBackground).toHaveBeenCalled();
  });

  it('initStarBackground should initialize star background', () => {
    component.initStarBackground();
    expect(component.canvas).toBeDefined();
    expect(component.camera).toBeInstanceOf(THREE.PerspectiveCamera);
    expect(component.renderer).toBeInstanceOf(THREE.WebGLRenderer);
    expect(component.stars).toBeInstanceOf(THREE.Points);
  });

  it('should throw an error if canvas is not found', () => {
    spyOn(document, 'getElementById').and.returnValue(null);
    expect(() => component.initStarBackground()).toThrowError(
      'Canvas not found'
    );
  });

  it('animateFrame should update star rotation and render scene', () => {
    spyOn(component.renderer, 'render');
    spyOn(window, 'requestAnimationFrame');

    let oldRotationY = component.stars.rotation.y;
    let oldRotationX = component.stars.rotation.x;
    component.animateFrame();
    expect(component.stars.rotation.y).toBe(
      component.rotationSpeed + oldRotationY
    );
    expect(component.stars.rotation.x).toBe(
      component.rotationSpeed + oldRotationX
    );
    expect(component.renderer.render).toHaveBeenCalledWith(
      component.scene,
      component.camera
    );
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it('addParticles should add particles to scene', () => {
    spyOn(component.scene, 'add');
    component.addParticles();
    expect(component.scene.add).toHaveBeenCalledWith(component.stars);
  });
});
