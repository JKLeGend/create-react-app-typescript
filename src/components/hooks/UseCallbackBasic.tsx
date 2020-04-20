import React from 'react';

function useInputValue(initialValue: string) {
    let [value, setValue] = React.useState<string>(initialValue);
    let onChange = React.useCallback(function(event) {
        setValue(event.currentTarget.value);
    }, []);

    return {
        value,
        onChange
    };
}

function UseCallbackBasic() {
    const name = useInputValue("Jamie");
    return (
            <>
            <input {...name} />
            {name.value}
        </>
    );
}
export default UseCallbackBasic;