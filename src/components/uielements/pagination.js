import { Pagination } from 'antd';
import AntPagination from './styles/pagination.style';
import style from '../../settings/style/withDirection';

const Paginations = AntPagination(Pagination);
const isoPagination = style(Paginations);

export default isoPagination;
