<script lang="ts">
  import { getStores } from "$lib/data.svelte";
  import Title from "$lib/title.svelte";
  import StoreCard from "../lib/storeCard.svelte";
</script>

<Title title="Stores" />

<div class="content">
  <div class="inner">
    <h2>Stores</h2>
    <div class="stores">
      {#each getStores() as store}
        <StoreCard {store} />
      {/each}
    </div>
  </div>
</div>
