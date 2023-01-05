import React from 'react';
import { Error } from './errorComment.styld';

const ErrorComment = ({ text }) => {
  return (
    <Error>{text}</Error>
  );
};

export default ErrorComment;
