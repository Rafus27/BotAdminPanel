import { useCallback } from 'react';
import React, { useMemo } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import CustomHandle from './CustomHandle';

const handleStyle = { left: 10 };



function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    // console.log(evt.target.value);
  }, []);

  const id = useNodeId()



  const inputFile = document.getElementById(`${id}-file-input`)
  const fileStock = document.getElementById(`${id}-file`)

  const inputFileFunction = () => {
    const pathFile = inputFile.files[0]
    let result = URL.createObjectURL(pathFile)
    fileStock.insertAdjacentHTML('beforeend', `<div class="node-img" style="background-image: url(${result});" alt="image"></div>`)
  }

 
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div>
        <p>Сообщение</p>
        <div className="img-container" id={`${id}-file`}></div>
        <input hidden type="file" id={`${id}-file-input`} onChange={inputFileFunction} />
        <label htmlFor={`${id}-file-input`}>
          <div className="file-input-btn">Выберите файл</div>
        </label>
        <input id="text" onChange={onChange} className="nodrag text-input" placeholder='Сообщение:' />
      </div>

      <CustomHandle type="source" position={Position.Right} isConnectable={2} />

    </div>
  );
}

export default TextUpdaterNode;
