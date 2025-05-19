<script lang="ts">
  import { ctx, getUserData } from "$lib/data.svelte";
  import StoreCard from "$lib/storeCard.svelte";
  const heartedStores = $derived(
    getUserData().find((user) => user._id === ctx.user?._id)?.heartedStores ||
      []
  );
</script>

{#if ctx.user}
  <div class="inner">
    <h2>Hearted Stores</h2>
    <div class="stores">
      {#each heartedStores as store}
        <StoreCard {store} />
      {/each}
    </div>
  </div>
{/if}
