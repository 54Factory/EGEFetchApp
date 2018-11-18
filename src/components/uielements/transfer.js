import { Transfer } from 'antd';
import AntTransfer from './styles/transfer.style';
import style from '../../settings/style/withDirection';

const WDTransfers = AntTransfer(Transfer);
const Transfers = style(WDTransfers);

export default Transfers;
