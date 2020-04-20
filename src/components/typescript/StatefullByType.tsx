import React from 'react';

type MyProps = typeof StatefullByType.defaultProps & {
  message: string;
};
type MyState = {
  count: number;
};
class StatefullByType extends React.Component<MyProps, MyState> {
  static defaultProps = {
    message: "world",
  };
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default StatefullByType;
