import ReactFlow, { Background, Controls, Edge, MiniMap, Node } from 'reactflow';
import 'reactflow/dist/style.css';

const nodes: Node[] = [
  { id: 'idea', data: { label: 'Idea' }, position: { x: 0, y: 50 }, style: { borderRadius: 16 } },
  { id: 'design', data: { label: 'Design' }, position: { x: 130, y: 0 }, style: { borderRadius: 16 } },
  { id: 'code', data: { label: 'Code' }, position: { x: 260, y: 50 }, style: { borderRadius: 16 } },
  { id: 'launch', data: { label: 'Launch' }, position: { x: 390, y: 0 }, style: { borderRadius: 16 } }
];

const edges: Edge[] = [
  { id: 'e1-2', source: 'idea', target: 'design', animated: true },
  { id: 'e2-3', source: 'design', target: 'code', animated: true },
  { id: 'e3-4', source: 'code', target: 'launch', animated: true }
];

export function HeroFlowCard() {
  return (
    <article className="rounded-3xl border border-fuchsia-200/25 bg-[#2d1644]/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-pink-100">Build Flow (React Flow)</h3>
      <div className="h-56 overflow-hidden rounded-2xl border border-white/15 bg-[#1e1030]/85">
        <ReactFlow edges={edges} fitView nodes={nodes}>
          <MiniMap pannable zoomable />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </article>
  );
}
