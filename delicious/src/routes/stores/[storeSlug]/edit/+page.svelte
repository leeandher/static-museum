<script lang="ts">
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  import { getTags, stores, ctx } from "$lib/data.svelte";
  const storeIndex = stores.findIndex(
    (store) => store.slug === page.params.storeSlug
  );
  const store = stores[storeIndex];
  const tags = getTags();
  const formData = $state({
    name: store?.name,
    description: store?.description,
    address: store?.location.address,
    location: {
      address: store?.location.address,
      coordinates: store?.location.coordinates,
      type: "Point",
    },
    tags: store?.tags,
  });
  $inspect(formData);

  function handleSubmit(e: Event) {
    e.preventDefault();
    const slug = formData.name.toLowerCase().replace(/ /g, "-");
    if (!ctx.user || !store || !storeIndex) return;
    stores[storeIndex] = {
      ...store,
      ...formData,
      slug,
    };
    goto(`/stores/${slug}`);
    ctx.flash = {
      message: `✅ Successfully edited ${formData.name}. ✅`,
      type: "success",
    };
  }
</script>

{#if store}
  <div class="content">
    <div class="inner">
      <h2>Edit {store.name}</h2>
      {#if !ctx.user}
        <p>
          You must be logged in, to edit this store.
          <a href="/login">Login</a> or
          <a href="/register">Register</a>
        </p>
      {:else if ctx.user?._id !== store.author}
        <p>
          You must be logged in, to edit this store.
          <a
            href="/"
            onclick={() => {
              ctx.user = null;
              ctx.flash = {
                type: "success",
                message: "👋 You are now logged out! 👋",
              };
            }}>Logout</a
          >
        </p>
      {:else}
        <form
          class="card"
          action="/add/"
          method="POST"
          enctype="multipart/form-data"
        >
          <label for="name">Store Name</label><input
            type="text"
            name="name"
            required
            bind:value={formData.name}
          /><label for="description">Description</label><textarea
            name="description"
            required
            bind:value={formData.description}
          ></textarea><label for="address">Address</label><input
            type="text"
            id="address"
            name="address"
            bind:value={formData.location.address}
          />
          <label for="tags">Tags</label>
          <ul class="tags">
            {#each Object.entries(tags) as [tag]}
              <div class="tag tag__choice">
                <input
                  type="checkbox"
                  id={tag}
                  value={tag}
                  name="tags"
                  bind:group={formData.tags}
                /><label for={tag}>{tag}</label>
              </div>
            {/each}
          </ul>
          <input
            class="button"
            type="submit"
            value="Save →"
            onclick={handleSubmit}
          />
        </form>
      {/if}
    </div>
  </div>
{/if}
