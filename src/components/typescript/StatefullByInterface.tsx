import React from 'react';
import { CounterDisplayProps } from './interface/CounterDisplayProps';

export class StatefullByInterface extends React.PureComponent<CounterDisplayProps> {
    render():React.ReactNode {
        return (
            <div>
                The value of {this.props.label} is {this.props.value}
            </div>
        );
    }
}

