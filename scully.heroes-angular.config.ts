import { ScullyConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'heroes-angular',
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/heroes/:heroName': {
      type: 'json',
      heroName: {
        url: 'http://localhost:7627/api/heroes',
        property: 'id',
      },
    },
  },
  proxyConfig: 'proxy.conf.json',
};
