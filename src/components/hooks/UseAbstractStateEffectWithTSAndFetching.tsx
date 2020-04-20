import React from 'react';
import { useFetchUser } from './hooks/UseAbstractStateEffectWithTSAndFetchingHooks';

interface Props { visible: boolean;  toggleVisible(event: React.MouseEvent<HTMLButtonElement>): void; }

function UseAbstractStateEffectWithTSAndFetching(props: Props) {
    const { user, loading } = useFetchUser(props.visible);

    return (
        <div>
            { props.visible && <div>here</div> }
            <button onClick={props.toggleVisible}>toggleVisible</button>
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

export default UseAbstractStateEffectWithTSAndFetching;