<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";

  import type { Inaction } from "./components/Inaction";
  import InactionList from "./components/InactionList.svelte";
  import InactionForm from "./components/InactionForm.svelte";

  let inactions: Inaction[] = [];

  async function setLoading() {
    inactions = [];
  }

  async function fetchInactions() {
    inactions = [];
    const res = await axios.get("/api/inactions");
    if (res?.data?.length || 0 > 0) inactions = res.data;
  }

  onMount(fetchInactions);
</script>

<main>
  <h1 class="main-heading">To Not Do</h1>
  <p class="intro">Here is a list of things I am not going to do.</p>
  <p class="intro">
    <small>
      This is a friendly demo built for an article on Sanity's website.
      <strong>
        Please don't write anything offensive or abuse API requests.
      </strong>
      If you see something offensive or aggressive, please delete it and replace
      it with something fun, like
      <em>Not emptying the dishwasher ever again!</em>
    </small>
  </p>

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
