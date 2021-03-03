<script>
  import Inaction from "./Inaction.svelte";
  import Loader from "./Loader.svelte";

  export let inactions = [];
</script>

<div>
  {#if inactions.length > 0}
    {#each inactions as inaction}
      <Inaction {...inaction} />
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
