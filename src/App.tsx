import * as React from 'react';
import Sample from './Sample';

export interface AppProps {

}

export interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  private searchRef: React.RefObject<HTMLInputElement>;

  constructor(props: AppProps) {
    super(props);
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    if (this.searchRef.current) {
      this.searchRef.current.value = 'Good to see you here!';
    }
  }


  render() {
    return (
      <>
        <div className='container'>
          <h3>Learning Refs</h3>
          <hr />
          {/* Refs cannot be used with functional components */}
          <Sample ref={this.searchRef} />
        </div>
      </>
    );
  }
}

export default App;
