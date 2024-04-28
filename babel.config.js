module.exports = function(api) {
  api.cache(true);

  const isExpo = process.env.EXPO_CLI === 'true'; // or any other way to detect if running under Expo

  return {
    presets: isExpo ? ['babel-preset-expo'] : ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }]
    ],
  };
};