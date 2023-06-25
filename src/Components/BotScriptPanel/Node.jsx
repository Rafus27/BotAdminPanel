import { useCallback, useState } from 'react';
import ReactFlow, { useNodeId, addEdge, applyEdgeChanges, applyNodeChanges, Background, ReactFlowProvider, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';

import TextUpdaterNode from './TextUpdaterNode.jsx';
import QuizUpdaterNode from './QuizUpdaterNode.jsx';
import DelayUpdaterNode from './DelayUpdaterNode.jsx';

import './text-updater-node.css';

const rfStyle = {
    backgroundColor: '#B8CEFF',
};

const flowKey = 'example-flow';

const initialNodes = [
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: 'node-2', type: 'delayUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: 'node-3', type: 'quizUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode, quizUpdater: QuizUpdaterNode, delayUpdater: DelayUpdaterNode };

function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    let nodeId = useNodeId()

    const reactFlowInstance = useReactFlow();
    const onClickText = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: Math.random() * 500,
                y: Math.random() * 500,
            },
            data: {
                label: `Node ${id}`,
            },
            type: 'textUpdater'
        };
        reactFlowInstance.addNodes(newNode);
    }, []);

    const onClickQuiz = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: Math.random() * 500,
                y: Math.random() * 500,
            },
            data: {
                label: `Node ${id}`,
            },
            type: 'quizUpdater'
        };
        reactFlowInstance.addNodes(newNode);
    }, []);

    const onClickDelay = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: Math.random() * 500,
                y: Math.random() * 500,
            },
            data: {
                label: `Node ${id}`,
            },
            type: 'delayUpdater'
        };
        reactFlowInstance.addNodes(newNode);
    }, []);


    const [rfInstance, setRfInstance] = useState(null);
    const { setViewport } = useReactFlow();

    const onSave = useCallback(() => {
         {
            const flow = rfInstance.toObject();
            localStorage.setItem(flowKey, JSON.stringify(flow));
            console.log(flow);
        }
    }, [rfInstance]);

    const onRestore = useCallback(() => {
        console.log('restore');
        const restoreFlow = async () => {
            const flow = JSON.parse(localStorage.getItem(flowKey));

            if (flow) {
                const { x = 0, y = 0, zoom = 1 } = flow.viewport;
                setNodes(flow.nodes || []);
                setEdges(flow.edges || []);
                setViewport({ x, y, zoom });
            }
        };

        restoreFlow();
    }, [setNodes, setViewport]);






    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView

            style={{
                backgroundColor: '#777',
            }}
        >
            <button onClick={onClickText} className="btn-add"> add message node </button>
            <button onClick={onClickQuiz} className="btn-add"> add quiz node </button>
            <button onClick={onClickDelay} className="btn-add"> add delay node </button>
            <button onClick={onSave} className="btn-add"> save </button>
            <button onClick={onRestore} className="btn-add"> restore </button>


            <Background color='#fff' variant='dots' />
        </ReactFlow>
    );
}

export default function () {
    return (
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    );
}
