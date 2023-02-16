import { shallowMount } from "@vue/test-utils";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  it("renders props.message when passed", () => {
    const message = "new message";
    const wrapper = shallowMount(ErrorMessage, {
      props: { message },
    });
    expect(wrapper.text()).toMatch(message);
  });
});
