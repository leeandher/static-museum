<script lang="ts">
  import { storesWithReviews } from "$lib/data";
  import StoreCard from "./stores/storeCard.svelte";
</script>

<div class="content">
  <div class="inner">
    <h2>Stores</h2>
    <div class="stores">
      {#each storesWithReviews as store}
        <StoreCard {store} />
      {/each}
    </div>
  </div>
</div>
