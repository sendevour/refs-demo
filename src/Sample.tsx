import * as React from 'react';

export interface SampleProps { }

export interface SampleState { }

class Sample extends React.Component<SampleProps, SampleState> {
    private innerRef: React.RefObject<HTMLInputElement>;

    constructor(props: SampleProps) {
        super(props);
        this.innerRef = React.createRef();
    }

    autofillSearchTerm() {
        if (this.innerRef.current) {
            this.innerRef.current.value = 'Good to see you!';
        }
    }

    render() {
        return (
            <>
                <input type='text' className='form-control' ref={this.innerRef} />
            </>
        );
    }
}

export default Sample;
