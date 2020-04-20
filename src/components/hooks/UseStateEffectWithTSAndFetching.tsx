import React from 'react';

interface Props { visible: boolean;  handleCloseModal(event: React.MouseEvent<HTMLButtonElement>): void; }
interface User { name: { first: string; last: string };  gender: string; phone: string; }

function UseStateEffectWithTSAndFetching(props: Props) {
    const [user, setUser] = React.useState<User>();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (!props.visible) return;
        setLoading(true);
        fetch('https://randomuser.me/api/').then(res => res.json()).then(json => {
            setUser(json.results[0]);
            setLoading(false);
        });
        console.log("useEffect in RandomUserModal");
    }, [props.visible]);

    return (
        <div>
            { props.visible && <div>here</div> }
            <button onClick={props.handleCloseModal}>Close Modal</button>
            {loading ?
            <div>loading...</div>
                :
            <ul>
                <li>Name: {`${(user && user.name || {}).first} ${(user && user.name || {}).last}`}</li>
                <li>Gender: {user && user.gender}</li>
                <li>Phone: {user && user.phone}</li>
            </ul>
                }
        </div>
    );
}

export default UseStateEffectWithTSAndFetching;