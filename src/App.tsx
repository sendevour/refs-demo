import * as React from 'react';

export interface Props {

}

export interface State {
}

class App extends React.Component<Props, State> {
  private searchRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    this.searchRef.current?.focus();
  }


  render() {
    return (
      <>
        <div className='container'>
          <h3>Learning Refs</h3>
          <hr />
          <input type="text" className='form-control' ref={this.searchRef} />
        </div>
      </>
    );
  }
}

export default App;
