import React from 'react';
import layout from './components/layout';
import profile from './components/profile';
 
const App = () => {
  return (
  <main>
          <layout>
            <profile/>
            <div>repositorios</div>
            <div>starreds</div>
          </layout>
</main>
  )
  
}

export default App;
