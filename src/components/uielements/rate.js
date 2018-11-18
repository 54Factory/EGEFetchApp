import { Rate } from 'antd';
import Ratings from './styles/rating.style';
import style from '../../settings/style/withDirection';

const AntRating = Ratings(Rate);
const Rating = style(AntRating);
export default Rating;
