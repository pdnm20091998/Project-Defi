import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterLend from './FilterLend';

interface FilterLendMobileProps {
  open: boolean;
  closeFilter: Function;
}

export default function FilterLendMobile(props: FilterLendMobileProps) {
  const { open, closeFilter } = props;

  const [openFilter, setOpenFilter] = useState(open);

  const handleClose = () => {
    setOpenFilter(false);
    closeFilter();
  };

  useEffect(() => {
    setOpenFilter(open);
  }, [open]);

  return (
    <Wrapper>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': { background: '#282c37' },
        }}
        open={openFilter}
        anchor="right"
      >
        <FilterLend handleClose={handleClose} />
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
