import { Tabs } from 'antd';
import AntTab from './styles/tab.style';
import withDirection from '../../settings/style/withDirection';

const WDTabs = AntTab(Tabs);
const TabPane = Tabs.TabPane;
const isoTabs = withDirection(WDTabs);

export default isoTabs;
export { TabPane };
