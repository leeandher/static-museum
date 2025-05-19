<script lang="ts">
  import { page } from "$app/state";
  import { getStores, getTags } from "$lib/data.svelte";
  import StoreCard from "../../lib/storeCard.svelte";

  const stores = getStores();
  const tags = getTags();
</script>

<div class="content">
  <div class="inner">
    <h2>{page.data.tag}</h2>
    <ul class="tags">
      {#each Object.entries(tags) as [tag, stores]}
        <li class="tag">
          <a class="tag__link" href={`/tags/${tag}`}
            ><span class="tag__text">{tag}</span><span class="tag__count"
              >{stores.length}</span
            ></a
          >
        </li>
      {/each}
    </ul>
    <div class="stores">
      {#each stores as store}
        <StoreCard {store} />
      {/each}
    </div>
  </div>
</div>
