import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine, IOptions } from 'tsparticles-engine';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const ParticlesComponent: React.FC = () => {
  const options: DeepPartial<IOptions> = {
    fullScreen: {
      enable: false,
    },
    // interactivity: {
    //   events: {
    //     onHover: {
    //       enable: true,
    //       mode: 'repulse',
    //       parallax: {
    //         force: 10,
    //       },
    //     },
    //     onClick: {
    //       enable: true,
    //       mode: 'push'
    //     }
    //   },

    //   modes: {
    //     push: {
    //       quantity: 4
    //     },
    //     repulse: {
    //       distance: 150,
    //       duration: 1
    //     }
    //   }
    // },
    particles: {
      color: {
        value: "#ffffff",

      },
      shadow: {
        blur: 100
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        path: {},
        spin: {},
      },
      number: {
        density: {
          enable: true,
        },
        value: 30,
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      // links: {
      //   blink: false,
      //   color: {
      //     value: '#ffffff',
      //   },
      //   consent: false,
      //   distance: 100,
      //   enable: true,
      //   frequency: 1,
      //   opacity: 0.4,
      //   shadow: {
      //     blur: 5,
      //     color: {
      //       value: '#000',
      //     },
      //     enable: false,
      //   },
      //   triangles: {
      //     enable: true,
      //   },
      //   width: 1,
      //   warp: false,
      // },
    },
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options as IOptions} />;
};

export default ParticlesComponent;