<script lang="ts">
  import { ctx, users } from "$lib/data.svelte";
  const { store } = $props();

  const user = $derived(users.find((user) => user._id === ctx.user?._id));

  const isHearted = $derived(user?.hearts.includes(store._id));
  function handleHeart() {
    if (!user) return;

    if (isHearted) {
      user.hearts = user?.hearts.filter((id) => id !== store._id);
    } else {
      user.hearts.push(store._id);
    }
  }
</script>

{#if store}
  <div class="store">
    <div class="store__hero">
      <div class="store__actions">
        {#if ctx.user}
          <div class="store__action store__action--heart">
            <div class="heart">
              <button
                class="heart__button"
                class:heart__button--hearted={isHearted}
                type="submit"
                name="heart"
                aria-label="Heart this store"
                onclick={handleHeart}
                ><svg
                  class="icon icon-heart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 90"
                  ><path
                    style="text-indent:0;text-transform:none;block-progression:tb"
                    d="M28.2166 11.004c-6.1854 0-12.3682 2.342-17.0938 7-9.4512 9.316-9.4396 24.49 0 33.8125l36.75 36.3126a3.0003 3.0003 0 0 0 4.2188 0C64.3563 76.04 76.608 63.9685 88.8728 51.879c9.4512-9.3158 9.4512-24.5278 0-33.8437-9.4512-9.3158-24.7362-9.316-34.1875 0L50.029 22.629l-4.7187-4.625c-4.7256-4.658-10.9084-7-17.0937-7zm0 5.9688c4.6526 0 9.296 1.7847 12.875 5.3125l6.8124 6.6875a3.0003 3.0003 0 0 0 4.2188 0l6.7812-6.6563c7.1582-7.0557 18.592-7.0555 25.75 0 7.158 7.0556 7.158 18.2258 0 25.2813-11.5562 11.391-23.1 22.7655-34.6562 34.1563L15.3416 47.5666c-7.1536-7.0647-7.158-18.2257 0-25.2812 3.579-3.5278 8.2223-5.3125 12.875-5.3125z"
                    overflow="visible"
                    color="#000"
                  ></path></svg
                >
              </button>
            </div>
          </div>
        {/if}
        {#if ctx.user?._id === store.author}
          <div class="store__action store__action--edit">
            <a href="/stores/{store.slug}/edit"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                style="enable-background:new 0 0 100 100;"
                xml:space="preserve"
                ><g
                  ><path
                    d="M88.5,23.6L76.4,11.5c-1-1-2.3-1.5-3.7-1.5c-1.4,0-2.7,0.5-3.7,1.5l-8,8l19.5,19.5l8-8C90.5,29,90.5,25.7,88.5,23.6z    M86.4,29l-6,6L65,19.5l6-6c0.9-0.9,2.5-0.9,3.4,0l12.1,12.1C87.4,26.6,87.4,28.1,86.4,29z"
                  ></path><path
                    d="M55.1,25.4L11.9,68.6c-0.7,0.7-1.1,1.6-1.1,2.6l-0.7,16c0,0.8,0.2,1.5,0.8,2c0.5,0.5,1.2,0.8,1.9,0.8c0,0,0.1,0,0.1,0   l16-0.7c1,0,1.9-0.5,2.6-1.1l43.2-43.2L55.1,25.4z M62.7,37L21.9,77.9l-7.6-7.6l40.8-40.8L62.7,37z M13.5,73.6l12.9,12.9l-13.5,0.6   L13.5,73.6z M29.7,85.7l-5.8-5.8l40.8-40.8l5.8,5.8L29.7,85.7z"
                  ></path></g
                ></svg
              >
            </a>
          </div>
        {/if}
        <div class="store__action store__action--count">
          <a href="/stores/{store.slug}#reviews">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 100 100"
              version="1.1"
              x="0px"
              y="0px"
              ><title>Artboard</title><desc>Created with Sketch.</desc><g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                ><g stroke="#ffffff" stroke-width="4.5"
                  ><g transform="translate(5.000000, 10.000000)"
                    ><path
                      d="M82.7031209,0.82 L7.70136256,0.82 C3.55882358,0.82 0.204,4.17834017 0.204,8.32087915 L0.204,57.0924182 C0.204,61.2349572 3.56234017,64.5932974 7.70136256,64.5932974 L60.3376303,64.5932974 L75.1987251,79.4543922 L75.1987251,64.5932974 L82.7031209,64.5932974 C86.8456598,64.5932974 90.204,61.2349572 90.204,57.0924182 L90.204,8.32087915 C90.204,4.17834017 86.8456598,0.82 82.7031209,0.82 L82.7031209,0.82 Z M30.5556587,36.467638 C28.4843892,36.467638 26.8069774,34.7902262 26.8069774,32.7189567 C26.8069774,30.6476873 28.4843892,28.9702755 30.5556587,28.9702755 C32.6269281,28.9702755 34.3043399,30.6512038 34.3043399,32.7189567 C34.3043399,34.7867096 32.6269281,36.467638 30.5556587,36.467638 L30.5556587,36.467638 Z M45.2022417,36.467638 C43.1309722,36.467638 41.4535604,34.7902262 41.4535604,32.7189567 C41.4535604,30.6476873 43.1309722,28.9702755 45.2022417,28.9702755 C47.2735112,28.9702755 48.950923,30.6512038 48.950923,32.7189567 C48.950923,34.7867096 47.2735112,36.467638 45.2022417,36.467638 L45.2022417,36.467638 Z M60.2004834,36.467638 C58.1292139,36.467638 56.4518021,34.7902262 56.4518021,32.7189567 C56.4518021,30.6476873 58.1292139,28.9702755 60.2004834,28.9702755 C62.2717529,28.9702755 63.9491647,30.6512038 63.9491647,32.7189567 C63.9491647,34.7867096 62.2717529,36.467638 60.2004834,36.467638 L60.2004834,36.467638 Z"
                    /></g
                  ></g
                ></g
              ></svg
            >
            <span>{store.reviews.length}</span>
          </a>
        </div>
      </div>
      <img src="/images/photos/{store.photo}" alt={store.name} />
      <h2 class="title">
        <a href="/stores/{store.slug}">{store.name}</a>
      </h2>
    </div>
    <div class="store__details">
      <p>{store.description}</p>
    </div>
  </div>
{/if}
