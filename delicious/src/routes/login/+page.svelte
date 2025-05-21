<script lang="ts">
  import { ctx, users } from "$lib/data.svelte";
  import { goto } from "$app/navigation";
  import Title from "$lib/title.svelte";

  let email = $state("");
  async function onsubmit(e: Event) {
    e.preventDefault();
    const matchUser = users.find((user) => user.email === email);
    if (!matchUser) {
      ctx.flash = {
        type: "error",
        message: "❌ User not found. Try 'beau@example.com' ❌",
      };
      return;
    }
    ctx.user = matchUser;
    await goto("/");
    ctx.flash = {
      type: "success",
      message: "👋 You are now logged in! 👋",
    };
  }
</script>

<Title title="Login" />

<div class="content">
  <div class="inner">
    <form class="form" {onsubmit}>
      <h2>Login</h2>
      <label for="email">Email Address</label><input
        type="email"
        name="email"
        bind:value={email}
        required
      /><input class="button" type="submit" value="Log In →" />
    </form>
  </div>
</div>
