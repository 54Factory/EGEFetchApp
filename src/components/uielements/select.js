import { Select } from 'antd';
import { AntSelect } from './styles/select.style';
import style from '../../settings/style/withDirection';

const WDSelect = AntSelect(Select);
const isoSelect = style(WDSelect);
const SelectOption = Select.Option;

export default isoSelect;
export { SelectOption };
