<script lang="ts">
  import { page } from "$app/state";
  import { ctx, getStores, reviews } from "$lib/data.svelte";
  const store = $derived(
    getStores().find((store) => store.slug === page.params.storeSlug)
  );
  const formData = $state<{ text: string; rating: number }>({
    text: "",
    rating: 0,
  });
  function handleReview() {
    if (!ctx.user || !store) return;
    reviews.push({
      ...formData,
      author: ctx.user._id,
      store: store._id,
      created: new Date().toISOString(),
      _id: crypto.randomUUID(),
    });
    ctx.flash = {
      message: "😋 Thanks for leaving a review! 😋",
      type: "success",
    };
  }
</script>

{#if store}
  <div class="content">
    <div class="single">
      <div class="single__hero">
        <img
          class="single__image"
          src="/images/photos/{store.photo}"
          alt={store.name}
        />
        <h2 class="title title--single">
          <a href="/stores/{store.slug}">{store.name}</a>
        </h2>
      </div>
    </div>
    <div class="single__details inner">
      <img class="single__map" src="/images/map.png" alt="Map" />
      <p class="single__location">{store.location.address}</p>
      <p></p>
      <ul class="tags">
        {#each store.tags as tag}
          <li class="tag">
            <a class="tag__link" href="/tags/{tag}"
              ><span class="tag__text"># {tag}</span></a
            >
          </li>
        {/each}
      </ul>
      {#if ctx.user}
        <form class="reviewer" onsubmit={handleReview}>
          <textarea
            name="text"
            placeholder="Did you try this place? Have something to say? Leave a review..."
            bind:value={formData.text}
          ></textarea>
          <div class="reviewer__meta">
            <div class="reviewer__stars">
              {#each [5, 4, 3, 2, 1] as rating}
                <input
                  type="radio"
                  id="star{rating}"
                  name="rating"
                  value={rating}
                  required
                  bind:group={formData.rating}
                /><label for="star{rating}">{rating} Stars</label>
              {/each}
            </div>
            <input class="button" type="submit" value="Submit Review →" />
          </div>
        </form>
      {/if}
      <div class="reviews" id="reviews">
        {#each store.reviews as review}
          <div class="review">
            <div class="review__header">
              <div class="review__author">
                <img
                  class="avatar"
                  src="https://gravatar.com/avatar/?s=200"
                  alt="user avatar"
                />
                <p>{review.user.name}</p>
              </div>
              <div class="review__stars" title="Rated 3 out of 5 stars">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>
              <time class="review__time" datetime={review.created}>
                {review.created}
              </time>
            </div>
            <div class="review__body">
              <p>{review.text}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
