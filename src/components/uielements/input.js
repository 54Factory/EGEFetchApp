import { Input } from 'antd';
import {
  InputWrapper,
  InputGroupWrapper,
  InputSearchWrapper,
  TextAreaWrapper,
} from './styles/input.style';
import style from '../../settings/style/withDirection';

const { Search, TextArea, Group } = Input;

const WDStyledInput = InputWrapper(Input);
const StyledInput = style(WDStyledInput);

const WDInputGroup = InputGroupWrapper(Group);
const InputGroup = style(WDInputGroup);

const WDInputSearch = InputSearchWrapper(Search);
const InputSearch = style(WDInputSearch);

const WDTextarea = TextAreaWrapper(TextArea);
const Textarea = style(WDTextarea);

export default StyledInput;
export { InputSearch, InputGroup, Textarea };
