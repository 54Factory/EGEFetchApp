import { Progress } from 'antd';
import AntProgress from './styles/progress.style';
import withDirection from '../../settings/style/withDirection';

const WDProgress = AntProgress(Progress);
const isoProgress = withDirection(WDProgress);

export default isoProgress;
