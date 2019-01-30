import {shallowMount} from "@vue/test-utils";
import vInput from "@/components/input";

describe("input", () => {
	it("renders props.label when passed", () => {
		const label = "new message";
		const wrapper = shallowMount(vInput, {
			propsData: {label}
		});
		expect(wrapper.text()).toMatch(label);
	});
});
