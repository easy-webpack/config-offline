import {WebpackConfig, get} from '@easy-webpack/core'
const OfflinePlugin = require('offline-plugin')

/**
 * Plugin: OfflinePlugin
 * Description: This plugin is intended to provide offline experience for webpack projects. It uses ServiceWorker and AppCache as a fallback under the hood.
 * It always better if OfflinePlugin is the last plugin added
 * 
 * See: https://github.com/NekR/offline-plugin
 */
export = function offline(options?: any) {
  return function offline(this: WebpackConfig): WebpackConfig {
    return {
      plugins: get(this, 'plugins', []).concat([
        new OfflinePlugin(options),
      ])
    }
  }
}