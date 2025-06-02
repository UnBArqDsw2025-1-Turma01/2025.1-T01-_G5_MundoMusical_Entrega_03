import React, { useEffect, useState } from "react";
import { ForumComposite } from "../../core/forum/ForumComposite";
import { ForumComponent } from "@/components/forum/ForumComponent";
import { ForumView } from "../../components/forum/ForumView";
import HomeMenu from '@/components/HomeMenu'
import forumDataJson from "../../assets/forumData.json";

interface RawNode {
  id: string;
  title: string;
  children?: RawNode[];
}

export const ForumPage: React.FC = () => {
  const [forumTree, setForumTree] = useState<ForumComposite[]>([]);

  useEffect(() => {
    const rawData: RawNode[] = forumDataJson as RawNode[];
    const tree = rawData.map((node) => buildComposite(node));
    setForumTree(tree);
  }, []);

  function buildComposite(node: RawNode): ForumComposite {
    const comp = new ForumComposite(node.id, node.title);
    if (node.children && node.children.length > 0) {
      node.children.forEach((childRaw) => {
        const childComp = buildComposite(childRaw);
        comp.add(childComp);
      });
    }
    return comp;
  }

  function findNodeById(
    id: string,
    nodes: ForumComponent[]
  ): ForumComposite | null {
    for (const node of nodes) {
      if (node.getId() === id) {
        return node as ForumComposite;
      }
      const childResult = findNodeById(id, node.getChildren());
      if (childResult) return childResult;
    }
    return null;
  }

  function removeNodeById(id: string, nodes: ForumComposite[]): boolean {
    const indexRoot = nodes.findIndex((n) => n.getId() === id);
    if (indexRoot !== -1) {
      nodes.splice(indexRoot, 1);
      return true;
    }
    for (const node of nodes) {
      const children = node.getChildren() as ForumComposite[];
      const indexChild = children.findIndex((c) => c.getId() === id);
      if (indexChild !== -1) {
        node.remove(children[indexChild]);
        return true;
      }
      const removedInDepth = removeNodeById(id, children);
      if (removedInDepth) return true;
    }
    return false;
  }

  const handleAddChild = (parentId: string) => {
    const text = prompt("Digite o texto da resposta:");
    if (!text || text.trim() === "") return;

    const newId = Date.now().toString();
    const parent = findNodeById(parentId, forumTree);
    if (parent) {
      parent.add(new ForumComposite(newId, text.trim()));
      setForumTree([...forumTree]);
    }
  };

  const handleRemove = (id: string) => {
    const cloned = [...forumTree];
    const removed = removeNodeById(id, cloned);
    if (removed) {
      setForumTree(cloned);
    }
  };

  const handleAddRoot = () => {
    const text = prompt("Digite o texto da nova pergunta:");
    if (!text || text.trim() === "") return;

    const newId = Date.now().toString();
    const newRoot = new ForumComposite(newId, text.trim());
    setForumTree([...forumTree, newRoot]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow max-w-2xl mx-auto px-4 py-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Fórum da Comunidade</h1>
        </div>

        <button
          onClick={handleAddRoot}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition-colors"
        >
          Nova Pergunta
        </button>

        {forumTree.map((node) => (
          <ForumView
            key={node.getId()}
            node={node}
            onAdd={handleAddChild}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <HomeMenu />
    </div>
  );
};

export default ForumPage;
