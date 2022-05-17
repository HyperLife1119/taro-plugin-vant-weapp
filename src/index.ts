import type { IPluginContext } from '@tarojs/service';
import { VantWeapp } from './program';

export default (context: IPluginContext) => {

  context.registerPlatform({
    name: 'vant-weapp',
    useConfigName: 'mini',
    async fn({ config }) {
      const program = new VantWeapp(context, config);
      await program.start();
    }
  })
}
