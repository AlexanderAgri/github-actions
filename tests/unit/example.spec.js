import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("number", () => {
    const msg = 10;
    const wrapper = shallowMount(App);
    expect(wrapper.vm.number).toBe(msg);
  });
});
