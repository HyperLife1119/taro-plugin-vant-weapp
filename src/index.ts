import type { IPluginContext, TaroPlatformBase } from '@tarojs/service';
import { COMPONENTS, NEST_ELEMENTS } from './vant';

interface Options {
  components: Record<string, Record<string, any>>;
  nestElements: Record<string, number>;
}

export default (context: IPluginContext, options: Options) => {
  context.registerMethod({
    name: 'onSetupClose',
    fn({ template }: TaroPlatformBase) {
      template.mergeThirdPartyComponents(
        Object.assign(COMPONENTS, options.components)
      );

      const nestElements = Object.assign(NEST_ELEMENTS, options.nestElements);
      Object.keys(nestElements).forEach(key => {
        template.nestElements.set(key, nestElements[key]);
      });
    }
  });

  context.modifyBuildAssets(({ assets }) => {
    const wxsOriginSource = assets['utils.wxs'].source();
    const wxsNewSource = wxsOriginSource.replace(
      'module.exports = {',
      `module.exports = {
  getDate: getDate,
  getTime: function (date) { date ? date.getTime() : getDate().getTime(); },
  today: getDate().setHours(0, 0, 0, 0),
  fullYear: getDate().getFullYear(),
  month: getDate().getMonth(),
  date: getDate().getDate(),`
    );
    assets['utils.wxs'] = {
      size: () => wxsNewSource.length,
      source: () => wxsNewSource
    };
  });
}
