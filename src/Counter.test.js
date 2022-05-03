import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

it('increments count by 1 when the increment button is clicked', () => {
    // targeting component using shallow function
    const wrapper = shallow(<Counter/>)

    // targeting element using classname
    const incrementButton = wrapper.find('button.increment')

    // simulating action click using simulation function
    incrementButton.simulate('click')

    // targeting element h1 and fetchin text using text function
    const text = wrapper.find('h1').text()

    // assertions
    expect(text).toEqual('Value : 1')

})