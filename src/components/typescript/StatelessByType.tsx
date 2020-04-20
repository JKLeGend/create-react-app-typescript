import React from 'react';

type ButtonProps = { message: string }  & typeof defaultProps;
const defaultProps = {
  message: "Johny Five",
};

const StatelessByType = ({ message }: ButtonProps) => {
  const handleClick = () => {
    console.log("clicked", message);
  };
  return <button onClick={handleClick} />
};
StatelessByType.defaultProps = defaultProps;
export default StatelessByType;
