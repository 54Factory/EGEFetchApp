import { Timeline } from 'antd';
import AntTimeline from './styles/timeline.style';
import style from '../../settings/style/withDirection';

const Timelines = AntTimeline(Timeline);
const WDTimelineItem = AntTimeline(Timeline.Item);
const TimelineItem = style(WDTimelineItem);

export default style(Timelines);
export { TimelineItem };
