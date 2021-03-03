<script lang="ts">
  import { onMount } from "svelte";
  import { sanity } from "./utils/sanity-client";

  import type { Inaction } from "./components/Inaction";
  import InactionList from "./components/InactionList.svelte";
  import InactionForm from "./components/InactionForm.svelte";

  let inactions: Inaction[] = [];

  async function setLoading() {
    inactions = [];
  }

  async function fetchInactions() {
    inactions = [];
    const query = '*[_type == "inaction"]{ _id, title, notes, priority }';
    inactions = await sanity.fetch(query);
  }

  onMount(fetchInactions);
</script>

<main>
  <h1 class="main-heading">To Not Do</h1>
  <p class="intro">Here is a list of things I am not going to do.</p>

  <InactionForm on:reloadInactions={fetchInactions} on:loading={setLoading} />

  <InactionList
    {inactions}
    on:reloadInactions={fetchInactions}
    on:loading={setLoading}
  />
</main>

<style>
  main {
    max-width: 24rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 26rem) {
    main {
      padding: 0;
    }
  }

  .intro {
    color: var(--color-gray-500);
  }
</style>
