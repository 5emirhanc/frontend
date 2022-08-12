import React from 'react';
import ReactDOM from 'react-dom';
import Corusel from './Corusel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Corusel />, div);
  ReactDOM.unmountComponentAtNode(div);
});