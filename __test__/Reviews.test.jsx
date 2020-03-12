import React from 'react';
import { shallow } from 'enzyme/build';
import Reviews from '../client/src/components/Reviews.jsx';


describe('a test to verify unit test works', () => {
  test('should render app', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper).toExist();
  });
});