<script>
  import { createEventDispatcher } from "svelte";

  import Inaction from "./Inaction.svelte";
  import Loader from "./Loader.svelte";

  export let inactions = [];

  const dispatch = createEventDispatcher();

  function passThruReloadInactions() {
    dispatch("reloadInactions");
  }

  function passThruLoading() {
    dispatch("loading");
  }
</script>

<div>
  {#if inactions.length > 0}
    {#each inactions as inaction}
      <Inaction
        {...inaction}
        on:reloadInactions={passThruReloadInactions}
        on:loading={passThruLoading}
      />
    {/each}
  {:else}
    <div class="loading">
      <Loader />
    </div>
  {/if}
</div>

<style>
  .loading {
    margin: 2rem auto;
    text-align: center;
  }
</style>
