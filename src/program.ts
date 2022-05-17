import { IOptions, Weapp } from '@tarojs/plugin-platform-weapp';
import { IPluginContext } from '@tarojs/service';
import { isFunction, Shortcuts, toCamelCase, toKebabCase } from '@tarojs/shared';
import { COMPONENTS } from './vant';

interface ComponentConfig {
  includes: Set<string>
  exclude: Set<string>
  thirdPartyComponents: Map<string, Set<string>>
  includeAll: boolean
}

export class VantWeapp extends Weapp {
  constructor(ctx: IPluginContext, config: any, pluginOptions?: IOptions) {
    super(ctx, config, pluginOptions);

    this.template['buildThirdPartyTemplate'] = function (level: number, componentConfig: ComponentConfig) {
      const { Adapter, isSupportRecursive, supportXS, nestElements } = this
      const nextLevel = isSupportRecursive ? 0 : level + 1
      let template = ''

      const data = !isSupportRecursive && supportXS
        ? `${this['dataKeymap']('i:item,l:l')}`
        : this['dataKeymap']('i:item')

      componentConfig.thirdPartyComponents.forEach((attrs, compName) => {
        if (compName === 'custom-wrapper') {
          template += `
<template name="tmpl_${level}_${compName}">
  <${compName} i="{{i}}" l="{{l}}" id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
  </${compName}>
</template>
  `
        } else {
          if (!isSupportRecursive && supportXS && nestElements.has(compName) && level + 1 > nestElements.get(compName)!) return

          let child = supportXS
            ? `<template is="{{xs.e(${isSupportRecursive ? 0 : 'cid+1'})}}" data="{{${data}}}" />`
            : `<template is="tmpl_${nextLevel}_${Shortcuts.Container}" data="{{${data}}}" />`

          if (isFunction(this['modifyThirdPartyLoopBody'])) {
            child = this['modifyThirdPartyLoopBody'](child, compName)
          }

          template += `
<template name="tmpl_${level}_${compName}">
  <${compName} ${buildThirdPartyAttr(compName, attrs)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block ${Adapter.for}="{{i.${Shortcuts.Childnodes}}}" ${Adapter.key}="sid">
      ${child}
    </block>
  </${compName}>
</template>
  `
        }
      })

      return template
    }
  }
}

/**
 * @see {UnRecursiveTemplate#buildThirdPartyAttr}
 */
function buildThirdPartyAttr(compName: string, attrs: Set<string>) {
  return Array.from(attrs).reduce((str, attr) => {
    if (attr.startsWith('@')) {
      // vue2
      let value = attr.slice(1)
      if (value.indexOf('-') > -1) {
        value = `:${value}`
      }
      return str + `bind${value}="eh" `
    } else if (attr.startsWith('bind')) {
      return str + `${attr}="eh" `
    } else if (attr.startsWith('on')) {
      // react, vue3
      let value = toKebabCase(attr.slice(2))
      if (value.indexOf('-') > -1) {
        // 兼容如 vant 某些组件的 bind:a-b 这类属性
        value = `:${value}`
      }
      return str + `bind${value}="eh" `
    } else if (attr === 'class') {
      return str + `class="{{i.${Shortcuts.Class}}}" `
    } else if (attr === 'style') {
      return str + `style="{{i.${Shortcuts.Style}}}" `
    }

    // KEY CODE
    const hasDefaultValue = toCamelCase(attr) in (COMPONENTS[compName] || {});
    const attrValue = hasDefaultValue ? `xs.b(i.${toCamelCase(attr)},${COMPONENTS[compName][toCamelCase(attr)]})` : `i.${toCamelCase(attr)}`;
    return str + `${attr}="{{${attrValue}}}" `
  }, '');
}
