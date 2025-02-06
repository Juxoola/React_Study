import React from 'react'
import './App.css';
import Inline from './components/Inline/Inline';
import Styled from './components/Styled/Styled';
import Modules from './components/Modules/Modules';

function App() {
  return (
		<div className='App'>
			{/* <Inline type={'red'} />
			<Inline type={'green'} /> */}
      {/* <Styled/> */}
      <Modules/>
		</div>
	)
}

export default App;
