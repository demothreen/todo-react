import React from 'react';
import ToDo from './ToDo';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(
    <ToDo
      option={{}}
      handleRemoveClick={() => {}}
      handleTodoClick={() => {}}
    />
  );
});