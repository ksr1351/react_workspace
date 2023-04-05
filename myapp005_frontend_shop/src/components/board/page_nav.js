import { useSelector } from 'react-redux';

const PageNavigation = ({ getBoardList }) => {
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const pageNumbers = [];
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <nav arial-label='...'>
      <ul className='pagination'>
        <li className={pv.startPage <= 1 ? 'page-item disabled' : 'page-item'}>
          <span
            className='page-link'
            onClick={() => getBoardList(pv.startPage - pv.blockPage)}
            style={{ cursor: 'pointer' }}
          >
            &laquo;
          </span>
        </li>

        {pageNumbers.map((pnum, idx) => (
          <li
            className={pv.currentPage === pnum ? 'page-item active' : null}
            aria-current={pv.currentPage === pnum ? 'page' : null}
            key={pnum}
          >
            {/* #! 나오는게 싫으면 span 태그로 처리하면 됨 */}
            <span
              className='page-link'
              onClick={() => getBoardList(pnum)}
              style={{ cursor: 'pointer' }}
            >
              {pnum}
            </span>
          </li>
        ))}

        <li
          className={
            pv.endPage >= pv.totalPage ? 'page-item disabled' : 'page-item'
          }
        >
          <span
            className='page-link'
            onClick={() => getBoardList(pv.startPage + pv.blockPage)}
            style={{ cursor: 'pointer' }}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
