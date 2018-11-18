import { InputNumber } from 'antd';
import AntInputNumber from './styles/inputNumber.style';
import style from '../../settings/style/withDirection';

const WDInputnumber = AntInputNumber(InputNumber);
const Inputnumber = style(WDInputnumber);

export default Inputnumber;
