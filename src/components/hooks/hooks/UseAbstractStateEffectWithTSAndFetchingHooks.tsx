import React from 'react';
interface User { name: { first: string; last: string };  gender: string; phone: string; }

export function useFetchUser(visible: boolean) {
    const [user, setUser] = React.useState<User>();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (!visible) return;
        setLoading(true);
        fetch('https://randomuser.me/api/').then(res => res.json()).then(json => {
            setUser(json.results[0]);
            setLoading(false);
        });
        console.log("useEffect in RandomUserModal_1");
    }, [visible]);
    return { user, loading };
}