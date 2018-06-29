import React from 'react';
import Input from './Input';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(
    <Input
      value=''
      handleChange={() => {}}
      handleKeyPress={() => {}}
    />
  );
});