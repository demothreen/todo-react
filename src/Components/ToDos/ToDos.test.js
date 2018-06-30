import React from 'react';
import ToDos from './ToDos';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(
    <ToDos
      data={[]}
      handleRemoveClick={() => {}}
      handleTodoClick={() => {}}
    />
  );
});