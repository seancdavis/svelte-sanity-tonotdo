<script>
  import Inaction from "./Inaction.svelte";

  export let inactions = [];
</script>

<div>
  {#each inactions as inaction}
    <Inaction {...inaction} />
  {/each}
</div>
