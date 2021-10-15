import { Checkbox } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  name: string;
  title?: string;
  type?: 'checkCoin';
  img?: string;
  value: string;
  change: Function;
  checked?: any;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckBoxField(props: IProps) {
  // const { name, title, type, img, value, change, checked } = props;
  // console.log(props.checked);
  return (
    <Wrapper>
      <Checkbox
        {...label}
        name={props.name}
        sx={{
          color: '#fff',
          '&.Mui-checked': {
            color: '#DBA83D',
          },
        }}
        value={props.value}
        checked={props.checked.includes(props.value)}
        onClick={e => props.change((e.target as HTMLInputElement).value)}
      />
      {props.img !== undefined ? (
        <>
          <img src={props.img} alt="ảnh" />
          <p>{props.title}</p>
        </>
      ) : (
        <p>{props.title}</p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  p {
    margin: 4px 0;
    margin-left: 4px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

export default CheckBoxField;
