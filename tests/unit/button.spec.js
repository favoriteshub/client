import { shallowMount } from "@vue/test-utils";
import vButton from "@/components/button";

describe("vButton.vue", () => {
	it("type is button by default", () => {
		const wrapper = shallowMount(vButton);

		expect(wrapper.attributes("type")).toMatch("button");
	});

	it("validates props.type correctly", () => {
		const wrapper = shallowMount(vButton);
		const typeProp = wrapper.vm.$options.props.type;

		expect(typeProp.validator("example")).toBeFalsy();
		expect(typeProp.validator("button")).toBeTruthy();
	});

	it("renders props.text when passed", () => {
		const text = "submit";
		const wrapper = shallowMount(vButton, {
			propsData: { text }
		});

		expect(wrapper.text()).toMatch(text);
	});

	it("renders slot when passed", () => {
		const text = "submit";
		const wrapper = shallowMount(vButton, {
			slots: { default: text }
		});

		expect(wrapper.text()).toMatch(text);
	});

	it("emits event on click", () => {
		const wrapper = shallowMount(vButton);

		wrapper.trigger("click");

		expect(wrapper.emitted("click")).toBeTruthy();
	});

	it("disables when props.disabled is passed", () => {
		const wrapper = shallowMount(vButton, {
			propsData: { disabled: true }
		});

		wrapper.trigger("click");

		expect(wrapper.attributes("disabled")).toBeTruthy();
		expect(wrapper.emitted("click")).toBeFalsy();
	});
});
