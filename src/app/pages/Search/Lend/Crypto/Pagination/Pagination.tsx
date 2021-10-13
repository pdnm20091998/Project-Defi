/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Pagination
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
  changePage: any;
  totalPage: number;
}
const Div = styled.div`
  color: #fff;
  ul {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    li {
      margin: 6px;
      border: 1px solid #d1d1d3;
      box-sizing: border-box;
      border-radius: 4px;
      min-width: 33px;
      text-align: center;
      &.active {
        background: #dba83d;
        border-radius: 4px;
        border: none;
      }
      &.break {
        border: none;
      }
    }
    li::marker {
      color: transparent;
    }
  }
`;
export function Pagination(props: Props) {
  const { changePage } = props;
  return (
    <Div className="d-flex justify-content-center">
      <ReactPaginate
        className="d-flex justify-content-center pagination"
        pageCount={Math.ceil(props.totalPage / 10)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={e => {
          return changePage(e.selected);
        }}
        previousLabel={<IoIosArrowBack />}
        nextLabel={<IoIosArrowForward />}
        breakLabel={'...'}
        activeClassName={'active'}
      />
    </Div>
  );
}
