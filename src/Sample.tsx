import * as React from 'react';

export interface SampleProps { }

export interface SampleProps {

}

const Sample = React.forwardRef((props, ref: any) => {
    return (
        <>
            <input type='text' className='form-control' ref={ref} />
        </>
    );
});

export default Sample;