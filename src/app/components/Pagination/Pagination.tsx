/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Pagination
 *
 */
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../Pagination/style.scss';
interface Props {
  changePage: any;
  totalPage: number;
}

export function Pagination(props: Props) {
  const { changePage } = props;
  return (
    <ReactPaginate
      pageCount={props.totalPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName={'pagination'}
      onPageChange={e => {
        return changePage(e.selected);
      }}
      previousLabel={<IoIosArrowBack />}
      nextLabel={<IoIosArrowForward />}
      breakLabel={'...'}
      activeClassName={'active'}
    />
  );
}
