import React from 'react';
import MyClassComponent from '../MyClassComponent/MyClassComponent';
import PropTypes from 'prop-types';

function MyComponent({name = 'No name', lastName = 'No last name'}) {
  return (
    <div className='MyComponent'>
      Hello, {name} {lastName}!
      <MyClassComponent />
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string
}

export default MyComponent;