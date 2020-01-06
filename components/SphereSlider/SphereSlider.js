import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import TG from './TG.json';
import textFragment from './fragment.glsl'
import textVertex from './vertex.glsl';

// import TRYGalien from './TRYGalien.woff2';

export default class SphereSlider extends React.PureComponent {
  componentDidMount() {
    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.camera.position.z = 5;

    this.canvas.appendChild( this.renderer.domElement );

    this.color = 0xff0000;

    this.material = new THREE.RawShaderMaterial({
      uniforms: {
          uTime: { value: 1.0 }
      },
      vertexShader: textVertex,
      fragmentShader: textFragment,
      side: THREE.DoubleSide,
      transparent: true,
      precision: 'highp'
      // flatShading: true,
    });


    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.25
    this.controls.enableZoom = true
    this.font = new THREE.Font(TG);

    const shapes = this.font.generateShapes( 'ODDAIP', 100 );
    this.geometry = new THREE.ShapeBufferGeometry( shapes );
    this.geometry.computeBoundingBox();
    this.xMid = - 0.5 * ( this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x );
    this.yMid = - 0.5 * ( this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y );
    this.geometry.translate( this.xMid, this.yMid, 0 );
    // make shape ( N.B. edge view not visible )
    console.log(this.geometry);
    
    this.text = new THREE.Mesh( this.geometry, this.material );
    // const s = this.prepareTextGeometry('ODDAIP');
    this.text.position.z = 0;
    this.camera.position.z = 200;
    this.scene.add(this.text);
    
    this.animate();
  }

  prepareTextGeometry = (text) => {
    const group = new THREE.Group();
    const glyphs = text.split('');
    let offset = 0;
    for (let i = 0; i < glyphs.length; i++) {
      const shapes = this.font.generateShapes( glyphs[i], 100 );
      const geometry = new THREE.ShapeBufferGeometry( shapes );
      geometry.computeBoundingBox();
      const xMid = (-0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x ) + offset);
      const yMid = - 0.5 * ( geometry.boundingBox.max.y - geometry.boundingBox.min.y );
      offset += geometry.boundingBox.max.x - geometry.boundingBox.min.x;
      // console.log();
      
      geometry.translate( xMid, yMid, 0 );
      group.add(new THREE.Mesh(geometry, this.material));
    };
    // group.computeBoundingBox();
    console.log(group);
    
    return group;
    
  }

  animate = () => {
    this.material.needsUpdate = true;
    requestAnimationFrame( this.animate );
    // this.cube.rotation.x += 0.01;
		// this.cube.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera );
  }
  
  render() {
    return (
      <div ref={(node) => { this.canvas = node}} />
    );
  }
}