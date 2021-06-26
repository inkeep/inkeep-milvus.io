export const MILVUS_INDEX_SCENE = {
  asset: { generator: 'Khronos glTF Spline I/O v0.0.1', version: '2.0' },
  scenes: [{ nodes: [0] }],
  nodes: [
    {
      name: 'Untitled',
      children: [1, 2, 3],
      extensions: {
        SPE_node_3d: {
          uuid: 'AF6F4ED7-FE7C-4FD7-96B3-F48BA6C2410F',
          type: 'scene',
        },
      },
    },
    {
      name: '167c56fc066c4dabac291bc2161c7d40',
      translation: [27.09824244472395, 12.077084741963517, 96.02091506909049],
      rotation: [0, 0.1305261922200516, 0, 0.9914448613738103],
      scale: [1.0000000000000002, 1, 1.0000000000000002],
      extensions: {
        SPE_node_3d: {
          uuid: '81BF0861-2F3D-41BF-99FC-F0D38DA11BAB',
          type: 'mesh_3d',
          visible: true,
          interaction: 0,
          hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          castShadow: true,
          receiveShadow: true,
          isCloner: false,
        },
      },
      mesh: 0,
    },
    {
      name: 'Default Camera',
      camera: 0,
      translation: [194.01813816991154, 27.79360447406956, 1030.0460955593837],
      rotation: [
        -0.012400965708657147,
        0.08077830177541802,
        0.001005091544877978,
        0.9966544395138961,
      ],
      extensions: {
        SPE_node_3d: {
          uuid: '8C3B0FA2-8A8B-4063-8A4D-8764C3F04665',
          type: 'camera',
          visible: true,
          interaction: 1,
        },
      },
      children: [4],
    },
    {
      name: 'Default Ambient Light',
      extensions: {
        KHR_lights_punctual: { light: 0 },
        SPE_node_3d: {
          uuid: '9E5AD53E-9983-4A32-B7EA-0437CC9BC3E3',
          type: 'light',
          visible: true,
        },
      },
    },
    {
      name: 'Default Directional Light',
      translation: [850000, 1300000, 1000000],
      rotation: [
        -0.45895513091666534,
        0.1367267597249462,
        -0.25064115022945466,
        0.8413352451859125,
      ],
      extensions: {
        KHR_lights_punctual: { light: 1 },
        SPE_node_3d: {
          uuid: '7595F36F-20AA-459C-80EF-36537ADD2F72',
          type: 'light',
          visible: true,
          interaction: -1,
          hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        },
      },
    },
  ],
  cameras: [
    {
      type: 'orthographic',
      orthographic: { xmag: 1792, ymag: 1010, zfar: 50000, znear: -50000 },
      extensions: { SPE_camera_options: { zoom: 3.889249637722969 } },
    },
  ],
  meshes: [
    {
      primitives: [{ attributes: { POSITION: 0, NORMAL: 1 }, material: 0 }],
      extensions: {
        SPE_primitive: {
          parameters: { width: 198, height: 100, depth: 210, subdivisions: 0 },
          type: 'NonParametricGeometry',
        },
        SPE_material: [0],
      },
    },
  ],
  materials: [
    {
      name: '',
      alphaMode: 'BLEND',
      alphaCutoff: 1,
      doubleSided: true,
      extensions: {
        KHR_materials_common: {
          technique: 'LAMBERT',
          ambient: [
            0.34901960784313724,
            0.34901960784313724,
            0.34901960784313724,
          ],
          diffuse: [
            0.34901960784313724,
            0.34901960784313724,
            0.34901960784313724,
          ],
          emission: [0.22745098039215686, 1, 1],
        },
        SPE_materials_options: {
          side: 2,
          wireframe: true,
          visible: true,
          shadingMode: 1,
        },
        SPE_materials_layers: {
          layers: [
            {
              id: 1,
              type: 'light',
              uniforms: {
                alpha: { name: 'alpha', value: 0.1, type: 2 },
                mode: { name: 'mode', value: 3, type: 1 },
              },
            },
            {
              id: 3,
              type: 'gradient',
              uniforms: {
                alpha: { name: 'alpha', value: 0.4, type: 2 },
                mode: { name: 'mode', value: 0, type: 1 },
                gl_type: { name: 'gl_type', value: 0, type: 1 },
                num: { name: 'num', value: 2, type: 1 },
                smooth: { name: 'smooth', type: 0, value: false },
                colors: {
                  name: 'colors',
                  value: [
                    0.07058823529411765,
                    0.7647058823529411,
                    0.9568627450980393,
                    1,
                    0.303921568627451,
                    1,
                    0.7016806722689074,
                    1,
                    0.303921568627451,
                    1,
                    0.7016806722689074,
                    1,
                    0.303921568627451,
                    1,
                    0.7016806722689074,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                  ],
                  type: 11,
                },
                steps: {
                  name: 'steps',
                  value: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  type: 7,
                },
                offset: { name: 'offset', value: [0, 0], type: 3 },
                morph: { name: 'morph', value: [0, 0], type: 3 },
                angle: { name: 'angle', value: 0, type: 1 },
              },
            },
          ],
        },
      },
    },
  ],
  buffers: [
    {
      uri:
      byteLength: 1474560,
    },
  ],
  bufferViews: [
    { buffer: 0, byteOffset: 0, byteLength: 1474560, target: 34962 },
  ],
  accessors: [
    {
      bufferView: 0,
      byteOffset: 0,
      componentType: 5126,
      count: 61440,
      type: 'VEC3',
      min: [-113.902099609375, -49.97806167602539, -105.01197052001953],
      max: [84.097900390625, 50.02193832397461, 104.98802947998047],
    },
    {
      bufferView: 0,
      byteOffset: 737280,
      componentType: 5126,
      count: 61440,
      type: 'VEC3',
      min: [-0.9985067844390869, -0.9999923706054688, -0.9994351267814636],
      max: [0.9978138208389282, 0.9999895691871643, 0.9998148679733276],
    },
  ],
  extensions: {
    SPE_export_options: {
      generatorFormat: 1,
      useOrbitControls: true,
      bgColor: [1, 1, 1],
      bgAlpha: 0,
      orbitDamped: true,
      orbitTarget: [33.02696021974853, 2.912270242235948, 43.40393153583932],
      cameraType: 'OrthographicCamera',
      cameraRotate: true,
      cameraPan: true,
      cameraZoom: true,
      viewMode: 1,
      viewWidth: 512,
      viewHeight: 512,
      quality: 'high',
    },
    SPE_scene_options: {
      camera: { mainCameraIndex: 2 },
      fog: { color: [1, 1, 1], near: 840, far: 1040 },
      postProcessing: {
        enabled: false,
        data: {
          enabled: false,
          bloom: {
            enabled: false,
            opacity: 1,
            blendFunction: 16,
            intensity: 1,
            luminanceThreshold: 0.9,
            luminanceSmoothing: 0.025,
            blurScale: 1,
            kernelSize: 3,
          },
          chromaticAberration: {
            enabled: false,
            opacity: 1,
            blendFunction: 13,
            offset: [10, 10],
          },
          vignette: {
            enabled: false,
            opacity: 1,
            blendFunction: 13,
            eskil: false,
            darkness: 0.5,
            offset: 0.5,
          },
          noise: { enabled: false, opacity: 1, blendFunction: 14 },
          colorAverage: { enabled: false, opacity: 1, blendFunction: 13 },
          hueSaturation: {
            enabled: false,
            opacity: 1,
            blendFunction: 13,
            _hue: 0,
            hue: 0,
            saturation: 0,
          },
          brightnessContrast: {
            enabled: false,
            opacity: 1,
            blendFunction: 13,
            contrast: 0,
            brightness: 0,
          },
          depthOfField: {
            enabled: false,
            opacity: 1,
            blendFunction: 13,
            focalLength: 0.1,
            focusDistance: 0,
            bokehScale: 1,
          },
          pixelation: {
            enabled: false,
            opacity: 1,
            blendFunction: 13,
            granularity: 30,
          },
        },
      },
    },
    SPE_interactions: {
      interactions: [
        {
          uuid: '45E0115A-5704-4DDD-9A92-CDCA28A34283',
          selectedState: 0,
          states: ['11996FFE-125C-49D4-9BFB-E38775678DE8'],
          events: [
            {
              type: 9,
              ui: { isCollapsed: false },
              distance: 600,
              targets: [
                {
                  easing: 4,
                  duration: 1000,
                  delay: 0,
                  cubicControls: [0.5, 0.05, 0.1, 0.3],
                  springParameters: {
                    mass: 1,
                    stiffness: 80,
                    damping: 10,
                    velocity: 0,
                  },
                  object: '81BF0861-2F3D-41BF-99FC-F0D38DA11BAB',
                  state: '11996FFE-125C-49D4-9BFB-E38775678DE8',
                },
              ],
            },
          ],
        },
        { uuid: 'A5D60953-570D-479A-9E5C-A9C6B8815780' },
      ],
    },
    SPE_interaction_states: {
      states: {
        '11996FFE-125C-49D4-9BFB-E38775678DE8': {
          uuid: '11996FFE-125C-49D4-9BFB-E38775678DE8',
          name: 'State 1',
          position: [27.09824244472395, 12.077084741963517, 96.02091506909049],
          rotation: [0, 0.2617993877991494, 0, 'XYZ'],
          scale: [1.0000000000000002, 1, 1.0000000000000002],
          hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          geometry: { width: 198, height: 100, depth: 210 },
          material: {
            layersList: [
              {
                id: 1,
                type: 'light',
                defines: {},
                uniforms: { f1_alpha: { value: 0.1 }, f1_mode: { value: '3' } },
              },
              {
                id: 3,
                type: 'gradient',
                defines: { USE_UV: '', GRAD_MAX: '10' },
                uniforms: {
                  f3_alpha: { value: 0.4 },
                  f3_mode: { value: '0' },
                  f3_gl_type: { value: 0 },
                  f3_num: { value: 2 },
                  f3_smooth: { value: false },
                  f3_colors: {
                    value: [
                      {
                        x: 0.07058823529411765,
                        y: 0.7647058823529411,
                        z: 0.9568627450980393,
                        w: 1,
                      },
                      {
                        x: 0.303921568627451,
                        y: 1,
                        z: 0.7016806722689074,
                        w: 1,
                      },
                      {
                        x: 0.303921568627451,
                        y: 1,
                        z: 0.7016806722689074,
                        w: 1,
                      },
                      {
                        x: 0.303921568627451,
                        y: 1,
                        z: 0.7016806722689074,
                        w: 1,
                      },
                      { x: 0, y: 0, z: 0, w: 1 },
                      { x: 0, y: 0, z: 0, w: 1 },
                      { x: 0, y: 0, z: 0, w: 1 },
                      { x: 0, y: 0, z: 0, w: 1 },
                      { x: 0, y: 0, z: 0, w: 1 },
                      { x: 0, y: 0, z: 0, w: 1 },
                    ],
                  },
                  f3_steps: { value: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                  f3_offset: { value: { x: 0, y: 0 } },
                  f3_morph: { value: { x: 0, y: 0 } },
                  f3_angle: { value: 0 },
                },
              },
            ],
          },
        },
      },
    },
    SPE_textures_uuid_map: {},
    KHR_lights_punctual: {
      lights: [
        {
          type: 'hemispheric',
          name: 'Default Ambient Light',
          color: [0.8274509803921568, 0.8274509803921568, 0.8274509803921568],
          intensity: 0.75,
        },
        {
          type: 'directional',
          name: 'Default Directional Light',
          color: [1, 1, 1],
          intensity: 0.75,
          extensions: {
            SPE_light_parameters: {
              shadows: {
                castShadow: false,
                shadowmapSize: [512, 512],
                shadowmapBias: 0,
                shadowmapViewRight: 5,
                shadowmapViewLeft: -5,
                shadowmapViewTop: 5,
                shadowmapViewBottom: -5,
                shadowmapViewNear: 0.5,
                shadowmapViewFar: 500,
              },
            },
          },
        },
      ],
    },
  },
  extensionsUsed: [
    'SPE_node_3d',
    'SPE_camera_options',
    'SPE_light_parameters',
    'SPE_materials_options',
    'SPE_materials_layers',
    'SPE_primitive',
    'SPE_material',
    'SPE_export_options',
    'SPE_scene_options',
    'SPE_interactions',
    'SPE_interaction_states',
    'SPE_textures_uuid_map',
    'KHR_lights_punctual',
    'KHR_materials_common',
  ],
};