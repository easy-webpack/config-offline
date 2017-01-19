# @easy-webpack/config-offline
Enable offline capability of your webapp using [ServiceWorker](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API) or [AppCache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache).

This config use [offline-plugin](https://github.com/NekR/offline-plugin) to achieve generation of ServiceWorker and AppCache files.

# Installation
```
npm install --save-dev @easy-webpack/config-offline
```

[easy-webpack](https://github.com/easy-webpack/core) is also required.

# Usage
```js
// webpack.config.js
const generateConfig = require('@easy-webpack/core').generateConfig;

const baseConfig = { ... }; // project-specific config like the entry file

const offlineConfig = {
  caches: {
    main: [':rest:'],
    additional: [':externals:'],
    optional: ['*.chunk.js']
  },
  ServiceWorker: {
    events: true
  },
  AppCache: {
    caches: ['main', 'additional', 'optional']
  }
}

module.exports = generateConfig(
  baseConfig,
  
  require('@easy-webpack/config-offline')
    ({ options: offlineConfig })
);

// Any client JS file, typically main entry
require('offline-plugin/runtime').install();

// This config will generate a service worker and app cache config in output path 
```

It is recommended to put `config-offline` at the _end_ of webpack config chain.

# Options
### options
Type: `Object` Default: `{}`

This is identical to options in offline-plugin. Please check their [documentation](https://github.com/NekR/offline-plugin#options) on how to configure it.  

# Related tutorials
 - [Browser support of ServiceWorker](http://caniuse.com/#feat=serviceworkers)
 - [Browser support of appcache](http://caniuse.com/#feat=offline-apps)
