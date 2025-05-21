<script setup lang="ts">
import { computed } from "vue";
import { CLIENT_URL, SUPER_MEGA_SECRET_ULTRA_KEY, API_URL } from "@/utils";

const props = defineProps<{
  refresh: () => void;
  link: any;
}>();

const shortLink = computed(() => `lgr.fyi/${props.link.suffix}`);
const shortLinkText = computed(() => `lgr.fyi/${props.link.suffix}`);

const deleteItem = (id: string): void => {
  props.refresh();
};

const copyLink = (): void => {
  navigator.clipboard.writeText(shortLink.value);
};
</script>

<template>
  <div class="item-row">
    <button type="button" class="copy item" @click="copyLink">🔗</button>
    <p class="suffix item">
      <a title="FYI: These links won't work!">{{ shortLinkText }}</a>
    </p>
    <p class="origin item">{{ link.origin }}</p>
    <p class="clicks item">{{ link.clicks }}</p>
    <button type="button" class="delete item" @click="deleteItem(link._id)">
      ❌
    </button>
  </div>
</template>

<style scoped lang="scss">
button {
  background: inherit;
  border: 0;
  cursor: pointer;
  height: 100%;
  outline: 0;
  &:nth-last-child(4) {
    border-bottom-left-radius: 3px;
  }
  &:hover,
  &:focus {
    background: #fff0ed;
  }
  &:active {
    background: #ff6347;
    color: #ff6347;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
.item-row {
  display: grid;
  grid-template-columns: 75px 150px 366px 100px 75px;
}
.item {
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0;
  align-self: center;
}

button {
  background: inherit;
  border: 0;
  cursor: pointer;
  height: 100%;
  outline: 0;
  &:nth-last-child(4) {
    border-bottom-left-radius: 3px;
  }
  &:hover,
  &:focus {
    background: #fff0ed;
  }
  &:active {
    background: #ff6347;
    color: #ff6347;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
