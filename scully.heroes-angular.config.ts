import { ScullyConfig } from '@scullyio/scully';
import { HandledRoute, registerPlugin } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'heroes-angular',
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {},
};

// function heroPlugin(route: string, config = {}): Promise<HandledRoute[]> {
//   return Promise.resolve([
//     { route: '/user/1' },
//     { route: '/user/2' },
//     { route: '/user/3' },
//     { route: '/user/4' },
//     { route: '/user/5' },
//   ]);
// }

// const validator = async (conf) => [];
// registerPlugin('router', 'userIds', heroPlugin, validator);
