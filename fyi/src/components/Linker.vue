<template>
  <div id="app">
    <form @submit.prevent.stop="onSubmit">
      <fieldset :disabled="loading || disabled" :aria-busy="loading">
        <label for="origin">
          <span>Original Link</span>
          <input
            type="text"
            placeholder="e.g.   https://www.example.com/really_long_super_ugly_smelly_link"
            name="origin"
            required
            v-model="origin"
          />
          <p class="alert" v-if="error.type === 'ORIGIN'">
            {{ error.message }}
          </p>
        </label>
        <label for="suffix">
          <span>Custom Suffix</span>
          <input
            type="text"
            placeholder="e.g.   conf2019, my-wish-list-🎄🎁, whatever-you-like"
            name="suffix"
            v-model="suffix"
          />
          <p class="alert" v-if="error.type === 'SUFFIX'">
            {{ error.message }}
          </p>
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
    <template v-if="history.length">
      <History :links="history" :refresh="loadHistory" @delete="handleDelete" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import History from "@/components/History.vue";

const props = defineProps<{
  disabled?: boolean;
}>();
const origin = ref("");
const suffix = ref("");
const history = ref<any[]>([
  {
    _id: "2",
    origin: "https://www.example.com/hyper-text-markup-language",
    suffix: "html-🌐",
    clicks: 133,
  },
  {
    _id: "1",
    origin: "https://www.example.com/dungeons-and-dragons",
    suffix: "dnd-⚔️",
    clicks: 42,
  },
  {
    _id: "3",
    origin: "https://www.example.com/i-wish-this-link-was-shorter",
    suffix: "wow-✨",
    clicks: 256,
  },
  {
    _id: "4",
    origin: "https://www.example.com/do-they-all-need-to-have-emojis",
    suffix: "nope",
    clicks: 89,
  },
]);
const loading = ref(false);
const error = ref<{ message: string; type: string }>({
  message: "",
  type: "",
});

const clearError = (): void => {
  error.value = {
    message: "",
    type: "",
  };
};

const onSubmit = (): void => {
  // Set the loading state and clear the error
  loading.value = true;
  clearError();

  // Create a new link
  const newLink = {
    _id: Date.now().toString(), // Generate a unique ID
    origin: origin.value,
    suffix: suffix.value,
    clicks: 0,
  };

  // Add to history
  history.value = [newLink, ...history.value];

  // Clear the form
  origin.value = "";
  suffix.value = "";
  loading.value = false;
};

const handleDelete = (id: string): void => {
  history.value = history.value.filter((link) => link._id !== id);
};

onMounted(() => {
  loadHistory();
});
</script>

<style scoped lang="scss">
#app {
  max-width: 800px;
  padding: 1.5rem;
  padding-bottom: 4rem;
  position: relative;
  background: #fff0ed;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  &:after {
    content: "";
    position: absolute;
    background-image: url("../assets/link_shortener.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    top: 5%;
    left: 5%;
    height: 90%;
    width: 90%;
    z-index: 0;
    opacity: 0.35;
  }
}
fieldset {
  margin: 0;
  border: 0;
  padding: 0;
  border: 0;
  width: auto;
  &[aria-busy="true"],
  &:disabled {
    opacity: 0.7;
  }
}
label {
  position: relative;
  display: block;
  text-align: left;
  width: 80%;
  margin: 2rem auto;
  z-index: 2;
  span {
    display: block;
    font-weight: bold;
    color: #ff6347;
    font-family: "Gill Sans", "Gill Sans MT", Helvetica, "Trebuchet MS",
      sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
}
input {
  font-family: inherit;
  width: 100%;
  padding: 1rem;
  z-index: 2;
  position: relative;
  font-size: 1.6rem;
  background: rgba(255, 255, 255, 0.85);
  border: 2px solid #ff6347;
  font-family: "Merriweather", Georgia, "Times New Roman", Times, serif;
  border-radius: 5px;
  margin-bottom: 2rem;
  &:focus {
    background: white;
    outline: 0;
    box-shadow: 0 0 2px #ff6347;
  }
}
button {
  border: 2px solid #ff6347;
  font-family: "Gill Sans", "Gill Sans MT", Helvetica, "Trebuchet MS",
    sans-serif;
  text-transform: uppercase;
  position: relative;
  font-weight: bold;
  font-size: 1.4rem;
  color: #ff6347;
  padding: 0.75rem 1.5rem;
  background: white;
  border-radius: 5px;
  z-index: 2;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #fff0ed;
  }
  &:active {
    outline: 0;
    box-shadow: 0 0 2px #ff6347;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
.alert {
  position: absolute;
  top: calc(100% - 3.5rem);
  z-index: 1;
  background: #575988;
  padding: 0.5rem;
  font-weight: 400;
  font-size: 1.3rem;
  border-radius: 0 0 5px 5px;
  width: 100%;
  color: #fff;
  left: 0;
  font-family: "Gill Sans", "Gill Sans MT", Helvetica, "Trebuchet MS",
    sans-serif;
}
</style>
