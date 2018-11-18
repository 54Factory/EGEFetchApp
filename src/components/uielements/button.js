import { Button } from 'antd';
import { Buttons, ButtonsGroup } from './styles/button.style';
import style from '../../settings/style/withDirection';

const AntButton = Buttons(Button);
const isoButton = style(AntButton);
const AntButtonGroup = ButtonsGroup(Button.Group);
const ButtonGroup = style(AntButtonGroup);

export default isoButton;
export { ButtonGroup };
