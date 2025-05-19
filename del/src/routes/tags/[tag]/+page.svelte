<script lang="ts">
  import { page } from "$app/state";
  import { getTags } from "$lib/data.svelte";
  import StoreCard from "../../stores/storeCard.svelte";

  const tags = getTags();
  const storesWithTag = $derived(tags[page.params.tag]);
</script>

<div class="content">
  <div class="inner">
    <h2>{page.data.tag}</h2>
    <ul class="tags">
      {#each Object.entries(tags) as [tag, stores]}
        <li class="tag">
          <a
            class={[
              "tag__link",
              tag === page.params.tag && "tag__link--active",
            ]}
            href={`/tags/${tag}`}
            ><span class="tag__text">{tag}</span><span class="tag__count"
              >{stores.length}</span
            ></a
          >
        </li>
      {/each}
    </ul>
    <div class="stores">
      {#each storesWithTag as store}
        <StoreCard {store} />
      {/each}
    </div>
  </div>
</div>
