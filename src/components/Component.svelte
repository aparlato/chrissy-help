<script>
  import { getOutliers } from '../get-outliers';

  let inputs = [{ value: 0, id: 0 }];

  let desiredSum = 0.0;

  let results = [];

  const updateInput = (e, i) => {
    let nextValue = e.target.value;
    nextValue = Number(Number(nextValue).toFixed(2));
    let nextInputs = inputs.filter(v => v.id !== i);
    nextInputs = nextInputs.concat({ id: i, value: nextValue });
    inputs = nextInputs.sort((a, b) => {
      a.id - b.id;
    });
  };

  const addInput = () => {
    const nextInputValue = inputs?.[inputs.length - 1]?.value ?? 1.0;
    inputs = inputs.concat([{ id: inputs.length, value: nextInputValue }]);
  };

  const getCombos = () => {
    results = getOutliers(
      inputs.map(v => v.value),
      Number(desiredSum.toFixed(2))
    );
  };
</script>

<div class="body">
  <div class="inputs-container">
    <div class="column">
      {#each inputs as inputVal, i}
        <input
          class="input"
          type="number"
          value={inputVal.value}
          step="0.01"
          on:change={e => updateInput(e, i)}
        />
      {/each}
      <button class="add-input-button" on:click={addInput}>Add input</button>
    </div>
    <div class="column">
      <label>
        Desired sum
        <input
          class="input"
          type="number"
          bind:value={desiredSum}
          step="0.01"
        /></label
      >
      <button class="get-outliers-button" on:click={getCombos}
        >Get combos and outliers</button
      >
    </div>
  </div>
  {#if results}
    <div class="results-container">
      {#each results as result}
        <div>Combos: {result.combo.join(', ')}</div>
        <div>Outliers: {result.outliers.join(', ')}</div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .inputs-container {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .input {
    width: 120px;
    margin-top: 12px;
  }

  .add-input-button {
    width: 120px;
    margin-top: 12px;
  }

  .get-outliers-button {
    width: 120px;
    margin-top: 12px;
  }

  .results-container {
    width: 100%;
    margin-top: 36px;
  }
</style>
