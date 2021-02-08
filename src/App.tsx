import * as React from 'react';
import Sample from './Sample';

export interface AppProps {

}

export interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  private searchRef: React.RefObject<Sample>;

  constructor(props: AppProps) {
    super(props);
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    this.searchRef.current?.autofillSearchTerm();
  }


  render() {
    return (
      <>
        <div className='container'>
          <h3>Learning Refs</h3>
          <hr />
          <Sample ref={this.searchRef} />
        </div>
      </>
    );
  }
}

export default App;
