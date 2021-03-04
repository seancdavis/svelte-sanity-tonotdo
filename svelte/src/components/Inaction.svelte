<script>
  import axios from "axios";
  import { createEventDispatcher } from "svelte";

  import Cancel from "./Icons/Cancel.svelte";

  export let _id, title, notes;

  const dispatch = createEventDispatcher();

  async function deleteInaction() {
    dispatch("loading");

    await axios.delete("/api/inactions", { data: { id: _id } });

    dispatch("reloadInactions");
  }
</script>

<div class="inaction">
  <button on:click={deleteInaction}><Cancel /></button>
  <h2 class="title">{title}</h2>
  <div class="notes">{notes}</div>
</div>

<style>
  .inaction {
    background-color: var(--color-purple-100);
    border-left: 0.25rem solid var(--color-purple-300);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
    position: relative;
  }

  .title {
    color: var(--color-purple-500);
    font-size: 1rem;
    line-height: 1;
    margin: 0 0 0.5rem;
  }

  .notes {
    font-size: 0.85rem;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--color-gray-300);
    height: 1.25rem;
    padding: 0;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    transition: color 0.25s ease;
    width: 1.25rem;
    z-index: 1;
  }

  button:hover {
    cursor: pointer;
    color: var(--color-purple-500);
  }
</style>
