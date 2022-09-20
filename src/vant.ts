import { singleQuote } from '@tarojs/shared';

/** VANT 所有组件及其有默认值的属性 */
export const COMPONENTS = {
  'van-button': {
    type: singleQuote('default'),
    size: singleQuote('normal'),
    'class-prefix': singleQuote('van-icon'),
    plain: 'false',
    block: 'false',
    round: 'false',
    square: 'false',
    disabled: 'false',
    hairline: 'false',
    loading: 'false',
    'loading-type': singleQuote('circular'),
    'loading-size': singleQuote('20px'),
    lang: singleQuote('en'),
    // 'send-message-title': singleQuote('当前标题'),
    // 'send-message-path': singleQuote('当前分享路径'),
    // 'send-message-img': singleQuote('截图'),
    'show-message-card': 'false'
  },
  'van-cell-group': {
    inset: 'false',
    border: 'true',
  },
  'van-cell': {
    border: 'true',
    center: 'false',
    'link-type': singleQuote('navigateTo'),
    clickable: 'false',
    'is-link': 'false',
    required: 'false',
    'use-label-slot': 'false',
  },
  'van-icon': {
    dot: 'false',
    color: singleQuote('inherit'),
    size: singleQuote('inherit'),
    'class-prefix': singleQuote('van-icon'),
  },
  'van-image': {
    fit: singleQuote('fill'),
    radius: '0',
    round: 'false',
    'lazy-load': 'false',
    'show-error': 'true',
    'show-loading': 'true',
    'use-error-slot': 'false',
    'use-loading-slot': 'false',
    'show-menu-by-longpress': 'false',
  },
  'van-popup': {
    show: 'false',
    'z-index': '100',
    overlay: 'true',
    position: singleQuote('center'),
    duration: '300',
    round: 'false',
    'close-on-click-overlay': 'true',
    closeable: 'false',
    'close-icon': singleQuote('cross'),
    'safe-area-inset-bottom': 'true',
    'safe-area-inset-top': 'false',
    'lock-scroll': 'true',
  },
  'van-transition': {
    name: singleQuote('fade'),
    show: 'true',
    duration: '300',
  },
  'van-calendar': {
    type: singleQuote('single'),
    title: singleQuote('日期选择'),
    color: singleQuote('#ee0a24'),
    // 'min-date': '当前日期',
    // 'max-date': '当前日期的六个月后',
    // 'default-date': '今天',
    'row-height': '64',
    poppable: 'true',
    'show-mark': 'true',
    'show-title': 'true',
    'show-subtitle': 'true',
    'show-confirm': 'true',
    'confirm-text': singleQuote('确定'),
    'confirm-disabled-text': singleQuote('确定'),
    'first-day-of-week': '0',
    readonly: 'false',
    show: 'false',
    position: singleQuote('bottom'),
    round: 'true',
    'close-on-click-overlay': 'true',
    'safe-area-inset-bottom': 'true',
    // 'range-prompt': '选择天数不能超过 xx 天',
    'show-range-prompt': 'true',
    'allow-same-day': 'false',
  },
  'van-checkbox': {
    shape: singleQuote('round'),
    value: 'false',
    disabled: 'false',
    'label-disabled': 'false',
    'label-position': singleQuote('right'),
    'use-icon-slot': 'false',
    'checked-color': singleQuote('#1989fa'),
    'icon-size': singleQuote('20px'),
  },
  'van-checkbox-group': {
    disabled: 'false',
    max: '0',
    direction: singleQuote('vertical'),
  },
  'van-datetime-picker': {
    type: singleQuote('datetime'),
    // 'min-date': '十年前',
    // 'max-date': '十年后',
    'min-hour': '0',
    'max-hour': '23',
    'min-minute': '0',
    'max-minute': '59',
    'show-toolbar': 'true',
    loading: 'false',
    'item-height': '44',
    'confirm-button-text': singleQuote('确认'),
    'cancel-button-text': singleQuote('取消'),
    'visible-item-count': '6',
  },
  'van-field': {
    type: singleQuote('text'),
    fixed: 'false',
    focus: 'false',
    border: 'true',
    disabled: 'false',
    readonly: 'false',
    clearable: 'false',
    clickable: 'false',
    required: 'false',
    center: 'false',
    password: 'false',
    'title-width': singleQuote('6.2em'),
    maxlength: '-1',
    'is-link': 'false',
    'show-word-limit': 'false',
    error: 'false',
    'input-align': singleQuote('left'),
    autosize: 'false',
    'confirm-type': singleQuote('done'),
    'confirm-hold': 'false',
    'hold-keyboard': 'false',
    'cursor-spacing': '50',
    'adjust-position': 'true',
    'show-confirm-bar': 'true',
    'selection-start': '-1',
    'selection-end': '-1',
    'auto-focus': 'false',
    'disable-default-padding': 'true',
    cursor: '-1',
    'clear-trigger': singleQuote('focus'),
    'always-embed': 'false',
  },
  'van-picker': {
    columns: '[]',
    'show-toolbar': 'false',
    'toolbar-position': singleQuote('top'),
    loading: 'false',
    'value-key': singleQuote('text'),
    'item-height': '44',
    'confirm-button-text': singleQuote('确认'),
    'cancel-button-text': singleQuote('取消'),
    'visible-item-count': '6',
    'default-index': '0',
  },
  'van-radio-group': {
    disabled: 'false',
    direction: singleQuote('vertical'),
  },
  'van-radio': {
    shape: singleQuote('round'),
    disabled: 'false',
    'label-disabled': 'false',
    'label-position': singleQuote('right'),
    'icon-size': singleQuote('20px'),
    'checked-color': singleQuote('#1989fa'),
    'use-icon-slot': 'false',
  },
  'van-rate': {
    count: '5',
    size: singleQuote('20px'),
    gutter: singleQuote('4px'),
    color: singleQuote('#ffd21e'),
    'void-color': singleQuote('#c7c7c7'),
    icon: singleQuote('star'),
    'void-icon': singleQuote('star-o'),
    'allow-half': 'false',
    readonly: 'false',
    disabled: 'false',
    'disabled-color': singleQuote('#bdbdbd'),
    touchable: 'true',
  },
  'van-search': {
    shape: singleQuote('square'),
    background: singleQuote('#f2f2f2'),
    'show-action': 'false',
    'action-text': singleQuote('取消'),
    focus: 'false',
    error: 'false',
    disabled: 'false',
    readonly: 'false',
    clearable: 'true',
    'clear-trigger': singleQuote('focus'),
    'clear-icon': singleQuote('clear'),
    maxlength: '-1',
    'use-action-slot': 'false',
    'input-align': singleQuote('left'),
    'use-left-icon-slot': 'false',
    'use-right-icon-slot': 'false',
    'left-icon': singleQuote('search'),
  },
  'van-slider': {
    value: '0',
    disabled: 'false',
    max: '100',
    min: '0',
    step: '1',
    'bar-height': singleQuote('2px'),
    'active-color': singleQuote('#1989fa'),
    'inactive-color': singleQuote('#e5e5e5'),
    'use-slot-button': 'false',
    range: 'false',
    vertical: 'false',
  },
  'van-stepper': {
    // value: '最小值',
    min: '1',
    step: '1',
    integer: 'false',
    disabled: 'false',
    'disable-input': 'false',
    'async-change': 'false',
    'input-width': singleQuote('32px'),
    'button-size': singleQuote('28px'),
    'show-plus': 'true',
    'show-minus': 'true',
    'long-press': 'true',
    'always-embed': 'false',
  },
  'van-switch': {
    checked: 'false',
    loading: 'false',
    disabled: 'false',
    size: singleQuote('30px'),
    'active-color': singleQuote('#1989fa'),
    'inactive-color': singleQuote('#fff'),
    'active-value': 'true',
    'inactive-value': 'false',
  },
  'van-uploader': {
    accept: singleQuote('image'),
    sizeType: "['original','compressed']",
    'preview-size': singleQuote('80px'),
    'preview-image': 'true',
    'preview-full-image': 'true',
    multiple: 'false',
    disabled: 'false',
    'show-upload': 'true',
    deletable: 'true',
    capture: "['album', 'camera']",
    'image-fit': singleQuote('scaleToFill'),
    'upload-icon': singleQuote('plus'),
  },
  'van-action-sheet': {
    actions: '[]',
    'z-index': '100',
    round: 'true',
    'close-on-click-action': 'true',
    'safe-area-inset-bottom': 'true',
  },
  'van-dialog': {
    width: singleQuote('320px'),
    theme: singleQuote('default'),
    'message-align': singleQuote('center'),
    'z-index': '100',
    'show-confirm-button': 'true',
    'show-cancel-button': 'false',
    'confirm-button-text': singleQuote('确认'),
    'cancel-button-text': singleQuote('取消'),
    'confirm-button-color': singleQuote('#ee0a24'),
    'cancel-button-color': singleQuote('#333'),
    overlay: 'true',
    'close-on-click-overlay': 'false',
    'use-slot': 'false',
    'use-title-slot': 'false',
    'async-close': 'false',
    transition: singleQuote('scale'),
    lang: singleQuote('en'),
    // 'send-message-title': singleQuote('当前标题'),
    // 'send-message-path': singleQuote('当前分享路径'),
    // 'send-message-img': singleQuote('截图'),
    'show-message-card': 'false',
  },
  'van-dropdown-menu': {
    'active-color': singleQuote('#ee0a24'),
    'z-index': '10',
    duration: '200',
    direction: singleQuote('down'),
    overlay: 'true',
    'close-on-click-overlay': 'true',
    'close-on-click-outside': 'true',
  },
  'van-dropdown-item': {
    // title: singleQuote('当前选中项文字'),
    options: '[]',
    disabled: 'false',
  },
  'van-loading': {
    color: singleQuote('#c9c9c9'),
    type: singleQuote('circular'),
    size: singleQuote('30px'),
    'text-size': singleQuote('14px'),
    vertical: 'false',
  },
  'van-overlay': {
    show: 'false',
    'z-index': '1',
    duration: '0.3',
    'lock-scroll': 'true',
  },
  'van-share-sheet': {
    options: '[]',
    'cancel-text': singleQuote('取消'),
    duration: '300',
    overlay: 'true',
    'close-on-click-overlay': 'true',
    'safe-area-inset-bottom': 'true',
  },
  'van-swipe-cell': {
    'left-width': '0',
    'right-width': '0',
    'async-close': 'false',
    disabled: 'false',
  },
  'van-circle': {
    value: '0',
    size: '100',
    color: singleQuote('#1989fa'),
    'layer-color': singleQuote('#fff'),
    speed: '50',
    'stroke-width': '4',
    clockwise: 'true',
  },
  'van-collapse': {
    accordion: 'false',
    border: 'true',
  },
  'van-collapse-item': {
    name: singleQuote('index'),
    border: 'true',
    'is-link': 'true',
    clickable: 'false',
    disabled: 'false',
  },
  'van-count-down': {
    format: singleQuote('HH:mm:ss'),
    'auto-start': 'true',
    millisecond: 'false',
    'use-slot': 'false',
  },
  'van-divider': {
    dashed: 'false',
    hairline: 'false',
  },
  'van-empty': {
    image: singleQuote('default')
  },
  'van-notice-bar': {
    color: singleQuote('#ed6a0c'),
    background: singleQuote('#fffbe8'),
    delay: '1',
    speed: '60',
    wrapable: 'false',
    'open-type': singleQuote('navigate'),
  },
  'van-progress': {
    inactive: 'false',
    percentage: '0',
    'stroke-width': singleQuote('4px'),
    'show-pivot': 'true',
    color: singleQuote('#1989fa'),
    'text-color': singleQuote('#fff'),
    'track-color': singleQuote('#e5e5e5'),
    // 'pivot-text': singleQuote('百分比文字'),
    // 'pivot-color': singleQuote('与进度条颜色一致'),
  },
  'van-skeleton': {
    row: '0',
    'row-width': singleQuote('100%'),
    title: 'false',
    'title-width': singleQuote('40%'),
    avatar: 'false',
    'avatar-size': singleQuote('32px'),
    'avatar-shape': singleQuote('round'),
    loading: 'true',
    animate: 'true',
  },
  'van-steps': {
    active: '0',
    steps: '[]',
    direction: singleQuote('horizontal'),
    'active-color': singleQuote('#07c160'),
    'inactive-color': singleQuote('#969799'),
    'active-icon': singleQuote('checked'),
  },
  'van-sticky': {
    'offset-top': '0',
    'z-index': '99',
  },
  'van-tag': {
    plain: 'false',
    round: 'false',
    mark: 'false',
    'text-color': singleQuote('white'),
    closeable: 'false',
  },
  'van-grid': {
    'column-num': '4',
    'icon-size': singleQuote('28px'),
    gutter: '0',
    border: 'true',
    center: 'true',
    square: 'false',
    clickable: 'false',
    direction: singleQuote('vertical'),
    reverse: 'false',
    'use-slot': 'false',
  },
  'van-grid-item': {
    'icon-prefix': singleQuote('van-icon'),
    dot: 'false',
    'link-type': singleQuote('navigateTo'),
  },
  'van-index-bar': {
    'index-list': singleQuote('A-Z'),
    'z-index': '1',
    sticky: 'true',
    'sticky-offset-top': '0',
    'highlight-color': singleQuote('#07c160'),
  },
  'van-index-anchor': {
    'use-slot': 'false',
  },
  'van-nav-bar': {
    'left-arrow': 'false',
    fixed: 'false',
    placeholder: 'false',
    border: 'true',
    'z-index': '1',
    'safe-area-inset-top': 'true',
  },
  'van-sidebar': {
    'active-key': '0',
  },
  'van-sidebar-item': {
    dot: 'false',
    disabled: 'false',
  },
  'van-tabs': {
    type: singleQuote('line'),
    color: singleQuote('#ee0a24'),
    active: '0',
    duration: '0.3',
    'line-width': singleQuote('40px'),
    'line-height': singleQuote('3px'),
    animated: 'false',
    border: 'false',
    ellipsis: 'true',
    sticky: 'false',
    swipeable: 'false',
    'lazy-render': 'true',
    'swipe-threshold': '5',
    'z-index': '1',
  },
  'van-tab': {
    // name: '标签的索引值',
    disabled: 'false',
  },
  'van-tabbar': {
    fixed: 'true',
    placeholder: 'false',
    border: 'true',
    'z-index': '1',
    'active-color': singleQuote('#1989fa'),
    'inactive-color': singleQuote('#7d7e80'),
    'safe-area-inset-bottom': 'true',
  },
  'van-tabbar-item': {
    // name: '当前标签的索引值',
    'icon-prefix': singleQuote('van-icon'),
  },
  'van-tree-select': {
    items: '[]',
    height: '300',
    'main-active-index': '0',
    'active-id': '0',
    max: 'Infinity',
    'selected-icon': singleQuote('success'),
  },
  'van-area': {
    'columns-num': '3',
    'columns-placeholder': '[]',
    loading: 'false',
    'item-height': '44',
    'visible-item-count': '6',
    'confirm-button-text': singleQuote('确认'),
    'cancel-button-text': singleQuote('取消'),
    'show-toolbar': 'true',
  },
  'van-card': {
    'thumb-mode': singleQuote('aspectFit'),
    centered: 'false',
    currency: singleQuote('¥'),
    'link-type': singleQuote('navigateTo'),
    'lazy-load': 'false',
  },
  'van-submit-bar': {
    label: singleQuote('合计：'),
    'button-type': singleQuote('danger'),
    disabled: 'false',
    loading: 'false',
    currency: singleQuote('¥'),
    'safe-area-inset-bottom': 'true',
    'decimal-length': '2',
  },
  'van-goods-action': {
    'safe-area-inset-bottom': 'true',
  },
  'van-goods-action-icon': {
    'link-type': singleQuote('navigateTo'),
    disabled: 'false',
    loading: 'false',
    lang: singleQuote('en'),
    // 'send-message-title': singleQuote('当前标题'),
    // 'send-message-path': singleQuote('当前分享路径'),
    // 'send-message-img': singleQuote('截图'),
    'show-message-card': 'false',
    'class-prefix': singleQuote('van-icon'),
  },
  'van-goods-action-button': {
    'link-type': singleQuote('navigateTo'),
    type: singleQuote('danger'),
    plain: 'false',
    size: singleQuote('normal'),
    disabled: 'false',
    loading: 'false',
    lang: singleQuote('en'),
    // 'send-message-title': singleQuote('当前标题'),
    // 'send-message-path': singleQuote('当前分享路径'),
    // 'send-message-img': singleQuote('截图'),
    'show-message-card': 'false',
  },
} as Record<string, Record<string, any>>;

export const NEST_ELEMENTS = {
  'van-button': 1,
  'van-icon': 1,
  'van-image': 1,
  'van-toast': 1,
  'van-calendar': 1,
  'van-checkbox': 1,
  'van-checkbox-group': 1,
  'van-datetime-picker': 1,
  'van-field': 1,
  'van-picker': 1,
  'van-radio': 1,
  'van-radio-group': 1,
  'van-rate': 1,
  'van-search': 1,
  'van-slider': 1,
  'van-stepper': 1,
  'van-switch': 1,
  'van-uploader': 1,
  'van-dialog': 1,
  'van-loading': 1,
  'van-notify': 1,
  'van-swipe-cell': 1,
  'van-circle': 1,
  'van-count-down': 1,
  'van-divider': 1,
  'van-empty': 1,
  'van-notice-bar': 1,
  'van-progress': 1,
  'van-skeleton': 1,
  'van-steps': 1,
  'van-sticky': 1,
  'van-tag': 1,
  'van-grid': 1,
  'van-grid-item': 1,
  'van-index-bar': 1,
  'van-index-anchor': 1,
  'van-nav-bar': 1,
  'van-sidebar': 1,
  'van-sidebar-item': 1,
  'van-tabbar': 1,
  'van-tabbar-item': 1,
  'van-tree-select': 1,
  'van-area': 1,
  'van-card': 1,
  'van-submit-bar': 1,
  'van-goods-action': 1,
  'van-goods-action-icon': 1,
  'van-goods-action-button': 1,
}