<script lang="ts">
  import { page } from "$app/state";
  import { storesWithReviews } from "$lib/data";
  import StoreCard from "../stores/storeCard.svelte";
  const allTags = storesWithReviews.flatMap((store) => store.tags).sort();
</script>

<div class="content">
  <div class="inner">
    <h2>{page.data.tag}</h2>
    <ul class="tags">
      {#each allTags as tag}
        <li class="tag">
          <a class="tag__link" href={`/tags/${tag}`}
            ><span class="tag__text">{tag}</span><span class="tag__count"
              >7</span
            ></a
          >
        </li>
      {/each}
    </ul>
    <div class="stores">
      {#each storesWithReviews as store}
        <StoreCard {store} />
      {/each}
    </div>
  </div>
</div>
