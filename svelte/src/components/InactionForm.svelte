<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sanity } from "../utils/sanity-client";

  import type { Inaction } from "./Inaction";

  const dispatch = createEventDispatcher();

  async function handleSubmit(event) {
    dispatch("loading");

    const inaction: Inaction = {
      _type: "inaction",
      title: event.target.title.value,
      notes: event.target.notes.value,
    };

    event.target.reset();

    await sanity.create(inaction);

    dispatch("reloadInactions");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h2>New Inaction</h2>
  <label for="new-item--title">Title</label>
  <input type="text" name="title" id="new-item--title" required />
  <label for="new-item--notes">Notes</label>
  <textarea rows="4" name="notes" id="new-item--notes" required />
  <input type="submit" value="Submit" />
</form>

<style>
  h2 {
    color: var(--color-gray-500);
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 1rem;
  }

  form {
    background-color: var(--color-gray-100);
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  input,
  textarea {
    background-color: transparent;
    border-radius: 0.25rem;
    border: 1px solid var(--color-gray-300);
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }

  input[type="submit"] {
    background-color: var(--color-purple-500);
    border: none;
    color: var(--color-white);
    font-size: 0.85rem;
    transition: background-color 0.25s ease;
  }

  input[type="submit"]:hover {
    cursor: pointer;
    background-color: var(--color-purple-700);
  }

  label {
    display: block;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }
</style>
