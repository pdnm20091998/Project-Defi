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
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckBoxField(props: IProps) {
  const { name, title, type, img, value, change } = props;
  return (
    <Wrapper>
      <Checkbox
        {...label}
        name={name}
        sx={{
          color: '#fff',
          '&.Mui-checked': {
            color: '#DBA83D',
          },
        }}
        value={value}
        onClick={e => change((e.target as HTMLInputElement).value)}
      />
      {img !== undefined ? (
        <>
          <img src={img} alt="ảnh" />
          <p>{title}</p>
        </>
      ) : (
        <p>{title}</p>
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
