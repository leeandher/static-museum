<script lang="ts">
  import { ctx, getUserData } from "$lib/data.svelte";
  import StoreCard from "$lib/storeCard.svelte";
  import Title from "$lib/title.svelte";
  const userData = $derived(getUserData());
  const heartedStores = $derived(
    userData.find((user) => user._id === ctx.user?._id)?.heartedStores || []
  );
  $inspect(userData, ctx);
</script>

<Title title="Hearted Stores" />

{#if ctx.user}
  <div class="content">
    <div class="inner">
      <h2>Hearted Stores</h2>
      <div class="stores">
        {#each heartedStores as store}
          <StoreCard {store} />
        {/each}
      </div>
    </div>
  </div>
{/if}
