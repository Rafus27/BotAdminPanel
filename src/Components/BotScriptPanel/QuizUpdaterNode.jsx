import { useCallback } from 'react';
import React, { useMemo } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';

import CustomHandle from './CustomHandle';

function QuizUpdaterNode({ data, isConnectable }) {
    
    const id = useNodeId()

    function addAnswer() {
        const answer = document.getElementById(`${id}-current-answer`).value
        const cont = document.getElementById(`${id}-answers`)
        cont.insertAdjacentHTML('beforeend', `<div>${answer}</div>`)
    }


    return (
        <div className="text-updater-node">
          <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
          <div className="quiz-container">
          <p>Опрос</p>
            <input type="text" id={`${id}-question`} placeholder='Вопрос:' />
            <input type="text" id={`${id}-current-answer`} placeholder='Ответ:'/>
            <button onClick={addAnswer}>Добавить</button>
            <div className="answer-container" id={`${id}-answers`}>

            </div>
          </div>
          <CustomHandle type="source" position={Position.Right} isConnectable={2} />
        </div>
      );
}

export default QuizUpdaterNode