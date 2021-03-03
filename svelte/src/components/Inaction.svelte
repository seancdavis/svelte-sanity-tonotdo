<script>
  export let title, notes;
</script>

<div class="inaction">
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
</style>
