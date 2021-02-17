<script lang="ts">
  import { onMount } from "svelte";
  import { sanity } from "./utils/sanity-client";

  import type { Inaction } from "./components/Inaction";
  import InactionList from "./components/InactionList.svelte";
  import InactionForm from "./components/InactionForm.svelte";

  let inactions: Inaction[] = [];

  onMount(async () => {
    const query = '*[_type == "inaction"]{ title, notes, priority }';
    inactions = await sanity.fetch(query);
  });
</script>

<main>
  <h1>To Not Do</h1>
  <p>Here is a list of things I am not going to do.</p>

  <hr />

  <InactionList {inactions} />

  <hr />

  <InactionForm />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
