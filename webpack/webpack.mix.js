let mix = require('laravel-mix');

// Files configuration
// =============================================================================
mix.setPublicPath('js');


mix.ts('./ts/buttonClicked.ts','./js/buttonClicked.min.js');
mix.ts('./ts/buttonClicked.init.ts','./js/buttonClicked.init.min.js');
