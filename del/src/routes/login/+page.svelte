<script lang="ts">
  import { ctx, users } from "$lib/data.svelte";
  let email = $state("");
  function onsubmit() {
    const matchUser = users.find((user) => user.email === email);
    if (!matchUser) {
      ctx.flash = {
        type: "error",
        message: "❌ User not found. Try 'you@example.com' ❌",
      };
      return;
    }
    ctx.user = matchUser;
  }
</script>

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
