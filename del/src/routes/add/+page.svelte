<script lang="ts">
  import { goto } from "$app/navigation";
  import { getTags, stores, ctx } from "$lib/data.svelte";

  const tags = getTags();
  const formData = $state({
    name: "",
    description: "",
    address: "",
    photo: "store.png",
    location: {
      address: "",
      coordinates: [-79.3789, 43.6487],
      type: "Point",
    },
    tags: [],
  });
  $inspect(formData);

  function handleSubmit(e: Event) {
    e.preventDefault();
    const slug = formData.name.toLowerCase().replace(/ /g, "-");
    if (!ctx.user) return;
    stores.push({
      ...formData,
      _id: crypto.randomUUID(),
      created: new Date().toISOString(),
      slug,
      author: ctx.user?._id,
    });
    goto(`/stores/${slug}`);
    ctx.flash = {
      message: `✅ Successfully created ${formData.name}. Care to leave a review? ✅`,
      type: "success",
    };
  }
</script>

<div class="content">
  <div class="inner">
    <h2>Add Store</h2>
    {#if !ctx.user}
      <p>
        You must be logged in to add a store.
        <a href="/login">Login</a> or
        <a href="/register">Register</a>
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
