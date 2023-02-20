import { useColor } from "@/helpers/composables/useColor";
import { defineComponent } from "vue";
import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";

import { ThemeVariants } from "@/helpers/enums/store/store.enum";

describe("useColor", () => {
  it("returns the color from the store", () => {
    const store = createStore({
      state: {
        theme: ThemeVariants.light,
      },
    });

    const TestComponent = defineComponent({
      setup() {
        const color = useColor();
        return {
          color,
        };
      },
      template: `<div :style="{color: color}"> Some text </div>`,
    });

    const wrapper = shallowMount(TestComponent, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.vm.color).toBe("#000000");
  });
});
