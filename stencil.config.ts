import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'icon-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'build/assets/icons' } // Copia los assets (SVGs)
      ],
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
