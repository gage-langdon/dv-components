const tertiary = {
	main: '#45C4E5',
	secondary: '#ffffff',
	tertiary: '#47A3D9'
};

const secondary = {
	main: '#F7F7F7',
	secondary: '#2B2B2B',
	tertiary: '#717171'
};

const primary = {
	main: '#6C6FF9',
	secondary: '#ffffff',
	tertiary: '#45B9E1'
};

const bold = {
	main: '#F09819',
	secondary: '#ffffff',
	tertiary: '#F07218'
};

const gradient = {
	primary: [primary.main, primary.tertiary],
	bold: [bold.main, bold.tertiary],
	secondary: [secondary.main, secondary.tertiary],
	tertiary: [tertiary.main, tertiary.tertiary]
};

const gray = {
	light: '#f7f7f7',
	medium: '#717171',
	dark: '#2b2b2b'
};

const accent = {
	primary: '#FFE9DD',
	secondary: '#10ac84',
	tertiary: '#6C6FF9',
	logo: '#10ac84'
};

const status = {
	success: '#249f58',
	error: '#e74c3c'
};

const textColors = ['#2B2B2B', '#103A45'];

const gradientInverse = {
	primary: `linear-gradient(to top, ${primary.main}, ${primary.tertiary})`,
	bold: `linear-gradient(to top, ${bold.main}, ${bold.tertiary})`,
	secondary: `linear-gradient(to top, ${secondary.main}, ${secondary.tertiary})`,
	tertiary: `linear-gradient(to top, ${tertiary.main}, ${tertiary.tertiary})`
};

const colors = {
	status,
	primary,
	secondary,
	tertiary,
	bold,
	gradient,
	gray,
	accent,
	gradientInverse,
	textColors
};

export default colors;
