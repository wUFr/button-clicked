let mix = require('laravel-mix');

// Files configuration
// =============================================================================
mix.setPublicPath('js');


mix.ts('./ts/buttonClicked.ts',     './js/buttonClicked.min.js');
mix.ts('./ts/buttonClicked.init.ts','./js/buttonClicked.init.min.js');

mix.copy('./js/buttonClicked.min.js',      './docs/buttonClicked.min.js')
mix.copy('./js/buttonClicked.init.min.js', './docs/buttonClicked.init.min.js')