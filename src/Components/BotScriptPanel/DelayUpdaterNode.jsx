import { useCallback } from 'react';
import React, { useMemo, memo } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';

import CustomHandle from './CustomHandle';


function DelayUpdaterNode({ data, isConnectable }) {
    
    const id = useNodeId()

  
    return (
        <div className="text-updater-node">
          <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
          <p>Задержка</p>
          <div className="delay-container">
            
            <input type="number" placeholder='Число' id={`${id}-select-value`} />
            <select id={`${id}-select-date`}>
                <option value="seconds">секунд</option>
                <option value="minutes">минут</option>
                <option value="hours">часов</option>
            </select>
          </div>
          <CustomHandle type="source" position={Position.Right} isConnectable={2} />
        </div>
      );
}

export default DelayUpdaterNode