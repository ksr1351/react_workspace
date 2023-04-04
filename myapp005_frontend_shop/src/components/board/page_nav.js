import { useSelector } from 'react-redux';

const PageNavigation = ({ getBoardList }) => {
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentpage: 1 }
  );

  const pageNumbers = []; //페이지에 대한 정보가 저장되는 곳
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav arial-label='...'>
      <ul className='pagination'>
        <li className={pv.startPage <= 1 ? 'page-item disabled' : 'page-item'}>
          <a href='#!' className='page-link'>
            &laquo;
          </a>
        </li>

        {pageNumbers.map((pnum, idx) => (
          <li
            className={pv.currentpage === pnum ? 'page-item active' : null}
            aria-current={pv.currentpage === pnum ? 'page' : null}
            key={pnum} //반복되기 때문에 key값 주기
          >
            <a href='#!'>
              <span className='page-link'>{pnum}</span>
            </a>
          </li>
        ))}
        <li
          className={
            pv.endPage >= pv.totalpage ? 'page-item disabled' : 'page-item'
          }
        >
          <a href='#!' className='page-link'>
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
