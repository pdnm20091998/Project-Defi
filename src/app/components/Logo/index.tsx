/**
 *
 * Logo
 *
 */
import * as React from 'react';
// import styled from 'styled-components/macro';
import logo from './assests/logo.svg';
interface Props {
  width?: string;
  height?: string;
}

export default function Logo(props: Props) {
  return (
    <img
      src={logo}
      width={props.width}
      height={props.height}
      alt="logo"
      className="d-inline-block"
    />
  );
}

// const Div = styled.div``;
