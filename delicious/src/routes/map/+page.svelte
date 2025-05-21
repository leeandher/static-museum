<script>
  import StoreCard from "$lib/storeCard.svelte";
  import { getStores } from "$lib/data.svelte";
  import Title from "$lib/title.svelte";
</script>

<Title title="Map" />

<div class="content">
  <div class="inner">
    <h2>Map</h2>
    <div class="map">
      <p>
        This used to be connected to Google Maps, but now it's a screenshot 😊
      </p>
      <img src="/images/map.png" alt="Map" />
    </div>
    <div class="map" style="margin-top: 12px">
      <div class="stores">
        {#each getStores() as store}
          <StoreCard {store} />
        {/each}
      </div>
    </div>
  </div>
</div>
