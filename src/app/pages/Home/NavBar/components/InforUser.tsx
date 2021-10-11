import Image from '../assests/Vector.svg';
import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components/macro';
import { getNameLocal } from '../../../../components/common/common';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../reducer/reducers';

export default function InforUser() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector((state: RootState) => state.auth);

  const Customized = styled.div`
    color: #fff;
  `;
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.clear();
    window.location.href = '/';
  };
  const [name, setName] = useState('');
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem('name')!));
  }, [user]);

  return (
    <div>
      <Button
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ height: '44px', p: '0' }}
      >
        <Avatar sx={{ height: '40px', mr: '10px' }} src={Image} alt="" />
        <Customized>{getNameLocal() ? name : ''}</Customized>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Change Password</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </div>
  );
}
