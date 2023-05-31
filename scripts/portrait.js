import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


function init(){
    let container = document.getElementById('portraitCanvas')

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
    
    renderer.setSize( container.clientWidth, container.clientHeight );
    
    container.appendChild( renderer.domElement );
    
    //  SCENE -------
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
    const light = new THREE.DirectionalLight(0xffffff, 1)
    const light2 = new THREE.AmbientLight(0xffffff,0.1)
    // const cube = new THREE.Mesh( geometry, material );
     
    const loader = new GLTFLoader()
    loader.load('./assets/anesthesiekar.glb', function(glb){
        scene.add(glb.scene)
    })
    
    scene.add( light, light2 );
    camera.position.z = 5;

    // SCENE ---------

    const controls = new OrbitControls ( camera, renderer.domElement)
    controls.update()

    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );

    }
    
    animate();

}

export {init}