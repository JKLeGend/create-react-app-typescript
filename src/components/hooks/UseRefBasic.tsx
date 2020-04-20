import React from 'react';

function UseRefBasic() {
    let inputElOrigin: any = null;
    const onButtonOneClick = () => {
        inputElOrigin && inputElOrigin.current && inputElOrigin.current.focus();
    };

    const inputEl = React.useRef<any>(null);
    const onButtonTwoClick = () => {
        inputEl && inputEl.current && inputEl.current.focus();
    };
    return (
            <>
            <input type="text" ref={(input) => { inputElOrigin = input; }} />
            <button onClick={onButtonOneClick}>Focuss the input</button>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonTwoClick}>Focuss the input</button>
        </>
    );
}
export default UseRefBasic;