<script lang="ts">
  import { sanity } from "../utils/sanity-client";

  import type { Inaction } from "./Inaction";

  async function handleSubmit(event) {
    const inaction: Inaction = {
      _type: "inaction",
      title: event.target.title.value,
      notes: event.target.notes.value,
    };

    await sanity.create(inaction);

    // TODO: Update items.
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="new-item--title">Title</label>
  <input type="text" name="title" id="new-item--title" />
  <label for="new-item--notes">Notes</label>
  <textarea rows="4" name="notes" id="new-item--notes" />
  <input type="submit" value="Submit" />
</form>
