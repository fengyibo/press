const path = require('path');
const config = require('../../../dashboard/tailwind.config');

// TODO: Figure out purgecss in production

module.exports = {
	theme: config.theme,
	plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
	purge: {
		content: [path.resolve('./press/+(www|templates)/marketplace/**/*.html')],
		options: {
			whitelist: ['body', 'html', 'img', 'a'],
			whitelistPatternsChildren: [/chart-container$/, /graph-svg-tip$/]
		}
	}
};
