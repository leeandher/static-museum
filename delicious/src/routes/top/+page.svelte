<script lang="ts">
  import Title from "$lib/title.svelte";
  import { getStores } from "$lib/data.svelte";
  const rankedStores = $derived(
    getStores()
      .map((store) => {
        const reviewTotal = store.reviews.reduce<number>(
          (total, review) => total + review.rating,
          0
        );
        return {
          ...store,
          ranking: (reviewTotal / store.reviews.length).toFixed(1),
        };
      })
      .sort((a: any, b: any) => b.ranking - a.ranking)
      .slice(0, 10)
  );
</script>

<Title title="⭐ Top Stores!" />

<div class="content">
  <div class="inner">
    <h2>Top 10 Stores</h2>
    <table class="table">
      <thead>
        <tr>
          <td>Photo</td>
          <td>Ranking</td>
          <td>Name</td>
          <td>Reviews</td>
          <td>Average Rating</td>
        </tr>
      </thead>
      <tbody>
        {#each rankedStores as store, index}
          <tr>
            <td>
              <a href="/stores/{store.slug}"
                ><img
                  width="200"
                  src="/images/photos/{store.photo}"
                  alt={store.name}
                /></a
              >
            </td>
            <td>{index + 1}</td>
            <td><a href="/stores/{store.slug}">{store.name}</a></td>
            <td>{store.reviews.length}</td>
            <td>{store.ranking} / 5</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
