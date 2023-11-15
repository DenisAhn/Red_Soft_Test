import TreeNode from "../types/TreeNode";

export const findNodeByKey = (nodes: TreeNode[], key: string | null): TreeNode | null => {
    for (const node of nodes) {
        if (node.key === key) {
            return node;
        }
        if (node.children) {
            const foundNode = findNodeByKey(node.children, key);
            if (foundNode) {
                return foundNode;
            }
        }
    }
    return null;
};
