// This file allows you to set defaults for when config values are not set
const makeConfig = localConfig => {
  const config = {
    // Any default values for the configuration would go here
    message: 'Hello world!',
    ...localConfig,
  };

  return config;
};

export { makeConfig };
