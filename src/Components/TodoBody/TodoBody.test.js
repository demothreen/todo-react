import React from 'react';
import TodoBody from './TodoBody';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<TodoBody/>);
});