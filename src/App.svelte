<script>
  import Component from './components/Component.svelte';
</script>

<svelte:head>
  <base href="process.env.BASE_PATH" />
</svelte:head>
<main>
  <Component />
</main>

<style>
  main {
    display: flex;
    height: 100%;
  }
</style>
