import { Tree } from 'antd';
import AntTree from './styles/tree.style';
import style from '../../settings/style/withDirection';

const WDTrees = AntTree(Tree);
const Trees = style(WDTrees);

const TreeNode = Tree.TreeNode;

export default Trees;
export { TreeNode };
