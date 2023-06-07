import { defineStore } from "pinia";

export interface configStore {
  homeConfig: undefined;
}
export const useConfigStore = defineStore("config", {
  state: (): configStore => ({
    homeConfig: undefined,
  }),
  actions: {
    setHomeConfig(value) {
      this.homeConfig = value;
    },
  },
});
