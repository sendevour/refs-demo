import * as React from 'react';

export interface AppProps {

}

const App: React.SFC<AppProps> = (props) => {
  const searchRef = React.useRef<HTMLInputElement>(null);

  const autofill = () => {
    if (searchRef.current) {
      searchRef.current.value = 'Good to see you!';
    }
  }

  return (<>
    <div className='container p-3'>
      <input type="text" className='form-control' ref={searchRef} />
      <button className='btn btn-primary mt-2' onClick={autofill}>Autofill</button>
    </div>
  </>);
}

export default App;