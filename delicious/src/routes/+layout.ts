import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
  return { title: "Stores" };
};

export const prerender = true;
