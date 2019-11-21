import { shallowMount } from "@vue/test-utils";
import vSelect from "@/components/select";

describe("vSelect.vue", () => {
	it("renders props.label when passed", () => {
		const labelText = "test";
		const wrapper = shallowMount(vSelect, {
			propsData: { options: [], label: labelText }
		});
		const labelNode = wrapper.find("label");

		expect(labelNode.text()).toMatch(labelText);
	});

	it("disables when props.disabled is passed", () => {
		const wrapper = shallowMount(vSelect, {
			propsData: { options: [], disabled: true }
		});
		const input = wrapper.find("input");

		input.trigger("click");

		expect(input.attributes("disabled")).toBeTruthy();
		expect(wrapper.vm.isListVisible).toBeFalsy();
	});

	it("correctly sets value when props.defaultValue is passed", () => {
		const value = "test";
		const wrapper = shallowMount(vSelect, {
			propsData: { options: [], defaultValue: value }
		});
		const input = wrapper.find("input");

		expect(input.element.value).toMatch(value);
	});

	it("shows and hides ul on input click", () => {
		const wrapper = shallowMount(vSelect, {
			propsData: { options: ["one"] }
		});
		const input = wrapper.find("input");

		expect(wrapper.find("ul").exists()).toBe(false);
		expect(wrapper.vm.isListVisible).toBeFalsy();

		input.trigger("click");

		expect(wrapper.find("ul").exists()).toBe(true);
		expect(wrapper.vm.isListVisible).toBeTruthy();

		input.trigger("blur");

		expect(wrapper.find("ul").exists()).toBe(false);
		expect(wrapper.vm.isListVisible).toBeFalsy();
	});

	it("renders correctly the props.options", () => {
		const firstVal = "one";
		const secondVal = "two";
		const thirdVal = "three";
		const wrapper = shallowMount(vSelect, {
			propsData: { options: [firstVal, secondVal, thirdVal] }
		});

		wrapper.setData({ isListVisible: true });

		expect(wrapper.vm.isListVisible).toBeTruthy();
		expect(wrapper.find("ul").exists()).toBe(true);

		const items = wrapper.findAll("li");

		expect(items.at(0).text()).toMatch(firstVal);
		expect(items.at(1).text()).toMatch(secondVal);
		expect(items.at(2).text()).toMatch(thirdVal);
	});

	it("sets clicked li value as input value", () => {
		const value = "test";
		const wrapper = shallowMount(vSelect, {
			propsData: { options: [value] }
		});
		const input = wrapper.find("input");

		input.trigger("click");

		expect(wrapper.find("ul").exists()).toBe(true);

		wrapper.find("li").trigger("mousedown");

		expect(input.element.value).toMatch(value);
	});

	it("emits event on li click", () => {
		const value = "test";
		const wrapper = shallowMount(vSelect, {
			propsData: { options: [value] }
		});

		wrapper.setData({ isListVisible: true });
		wrapper.find("li").trigger("mousedown");

		expect(wrapper.emitted("change")).toBeTruthy();
	});
});
