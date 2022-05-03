import React from 'react';
import { shallow } from 'enzyme';
import User from './User'

const data = {
    userDetails: [
      { name: 'John', age: 24, id: 1234 },
      { name: 'Mary', age: 29, id: 1289 },
      { name: 'Joel', age: 27, id: 1567 }
    ]
  }




it('On checking checkox the value should be visible', () => {
    // Arrange
    const wrapper = shallow(<User data={data}/>)

    
    
    // Assertion
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toEqual(false)
    wrapper.find('input[type="checkbox"]').simulate('change', {target:{checked:true}})
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toEqual(true)
    
    // data.userDetails.map(
    //     userDetail =>(
    //         expect(wrapper.find('li', {target:{key:userDetail.id}}).text()).toEqual(`${userDetail.name}${userDetail.age}`)
    //     )
    // )


    expect(
        data.userDetails.map(userDetail =>{
            wrapper.find('li', {target:{key:userDetail.id}}).text()})
        ).toEqual(`${userDetail.name}${userDetail.age}`)
})