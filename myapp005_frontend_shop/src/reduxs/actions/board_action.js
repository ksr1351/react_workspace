import axios from 'axios';
import { boardReducers } from '../reducers/board_reducer';
import { baseUrl } from '../../apiurl';

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`) //백엔드를 요청
      .then((response) => response.data);
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

export const boardActions = { getBoardList };
