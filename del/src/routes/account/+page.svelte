<script lang="ts">
  import { ctx, users } from "$lib/data.svelte";

  let formData = $state<{ name: string; email: string }>({
    name: ctx.user?.name || "",
    email: ctx.user?.email || "",
  });

  const userIndex = $derived(
    users.findIndex((user) => user._id === ctx.user?._id)
  );

  async function onsubmit(e: Event) {
    e.preventDefault();
    users[userIndex] = { ...users[userIndex], ...formData };
    ctx.user = users[userIndex];
    ctx.flash = {
      type: "success",
      message: "✨ Account updated! ✨",
    };
  }
</script>

<div class="content">
  <div class="inner">
    <h2>Edit Your Account</h2>
    <form {onsubmit}>
      <label for="name">Name</label><input
        type="text"
        name="name"
        bind:value={formData.name}
        required
      /><label for="email">Email Address</label><input
        type="email"
        name="email"
        bind:value={formData.email}
        required
      /><input class="button" type="submit" value="Update My Account" />
    </form>
  </div>
</div>
