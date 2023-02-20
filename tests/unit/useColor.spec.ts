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
      template: `<div>Some text</div>`,
    });

    const wrapper = shallowMount(TestComponent, {
      global: {
        plugins: [store],
      },
    });

    const colorHEX = "#000000";

    expect(wrapper.vm.color).toBe(colorHEX);
  });
});
