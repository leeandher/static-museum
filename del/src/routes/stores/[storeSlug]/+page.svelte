<script lang="ts">
  import { storesWithReviews } from "$lib/data";
  import { page } from "$app/state";
  const store = storesWithReviews.find(
    (store) => store.slug === page.params.storeSlug
  );
</script>

<div class="content">
  <div class="single">
    <div class="single__hero">
      <img
        class="single__image"
        src="/images/photos/loaf.jpg"
        alt="Artisan Loaf"
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
