import type { IPluginContext, TaroPlatformBase } from '@tarojs/service';
import { COMPONENTS } from './component';
import { NEST_ELEMENTS } from './nest-element';
import { VOID_ELEMENTS } from './void-elemets';

interface Options {
  components: Record<string, Record<string, any>>;
  nestElements: Record<string, number>;
  voidElements: string[];
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

      const voidElements = VOID_ELEMENTS.concat(options.voidElements ?? []);
      voidElements.forEach(element => {
        template.voidElements.add(element);
      });
    }
  });

  context.modifyBuildAssets(({ assets }) => {
    const wxsOriginSource = assets['utils.wxs'].source();
    const wxsNewSource = wxsOriginSource.replace(
      'module.exports = {',
      `module.exports = {
  date: getDate,
  datetime: function (date) { return date ? date.getTime() : getDate().getTime(); },
  today: getDate().setHours(0, 0, 0, 0),
  year: getDate().getFullYear(),
  month: getDate().getMonth(),
  day: getDate().getDate(),`
    );
    assets['utils.wxs'] = {
      size: () => wxsNewSource.length,
      source: () => wxsNewSource
    };
  });
}
