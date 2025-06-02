import React from "react";
import { ForumComponent } from "@/components/forum/ForumComponent";

interface ForumViewProps {
  node: ForumComponent;
  level?: number;
  onAdd: (parentId: string) => void;
  onRemove: (id: string) => void;
}

export const ForumView: React.FC<ForumViewProps> = ({
  node,
  level = 0,
  onAdd,
  onRemove,
}) => {
  const children = node.getChildren();
  const indentPadding = level * 16;

  return (
    <div className="mb-4">
      {/* Contêiner da pergunta/resposta */}
      <div
        className={`
          bg-white 
          shadow-sm 
          rounded 
          p-4 
          flex 
          items-center 
          justify-between
        `}
        style={{ marginLeft: `${indentPadding}px` }}
      >
        <span className="font-semibold text-gray-800">{node.getTitle()}</span>
        <div className="space-x-2">
          <button
            onClick={() => onAdd(node.getId())}
            className="text-blue-500 text-sm hover:underline"
          >
            Responder
          </button>
          <button
            onClick={() => onRemove(node.getId())}
            className="text-red-500 text-sm hover:underline"
          >
            Remover
          </button>
        </div>
      </div>

      {/* Linha vertical para conectar ao filho */}
      {children.length > 0 && (
        <div
          className="border-l-2 border-gray-300"
          style={{
            marginLeft: `${indentPadding + 8}px`,
            paddingLeft: "8px",
          }}
        >
          {children.map((child) => (
            <ForumView
              key={child.getId()}
              node={child}
              level={level + 1}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};
