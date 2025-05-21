<script lang="ts">
  import { ctx, users } from "$lib/data.svelte";
  import { goto } from "$app/navigation";
  import Title from "$lib/title.svelte";

  let formData = $state<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  async function onsubmit(e: Event) {
    e.preventDefault();
    const matchUser = users.find((user) => user.email === formData.email);
    if (matchUser) {
      ctx.flash = {
        type: "error",
        message: "❌ User already exists ❌",
      };
      return;
    }
    const newUser = {
      _id: crypto.randomUUID(),
      name: formData.name,
      email: formData.email,
      hearts: [],
    };
    users.push(newUser);
    ctx.user = newUser;
    await goto("/");
    ctx.flash = {
      type: "success",
      message: "👋 You are now registered! 👋",
    };
  }
</script>

<Title title="Register" />

<div class="content">
  <div class="inner">
    <form class="form" {onsubmit}>
      <h2>Register</h2>
      <label for="name">Name</label><input
        type="text"
        name="name"
        required
        bind:value={formData.name}
      /><label for="email">Email Address</label><input
        type="email"
        name="email"
        required
        bind:value={formData.email}
      /><input class="button" type="submit" value="Register →" />
    </form>
  </div>
</div>
