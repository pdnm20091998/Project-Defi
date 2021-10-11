import { Checkbox } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  name: string;
  title?: string;
  img?: string;
}

const Div = styled.div`
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
function CheckBox(props: IProps) {
  const { name, title, img } = props;
  return (
    <Div>
      <Checkbox
        name={name}
        sx={{
          color: '#fff',
          '&.Mui-checked': {
            color: '#DBA83D',
          },
        }}
      />
      {img ? (
        <>
          <img src={img} alt="ảnh" />
          <p>{title}</p>
        </>
      ) : (
        <p>{title}</p>
      )}
    </Div>
  );
}

export default CheckBox;
