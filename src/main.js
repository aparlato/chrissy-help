// Importing global css to be bundled, it does not get used directly
import globalCss from './global.css';
import App from './App.svelte';

const startApp = (target, props) =>
  new App({
    target,
    props,
  });

export { startApp };
