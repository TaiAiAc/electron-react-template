import React from 'react';
import { windowCreate, windowShow } from '@/renderer/common/window';
import { getCustomize } from '@/renderer/store';
import '@/renderer/views/style/color.scss';
import '@/renderer/views/style/index.scss';

export default function App() {
  const args = getCustomize();
  windowShow();

  function baidu() {
    windowCreate(
      {
        url: 'https://baidu.com/',
        parentId: args.id
      },
      {
        width: 1280,
        height: 720
      }
    );
  }

  return (
    <div className="info">
      <button className="but" onClick={() => baidu()}>
        百度
      </button>
    </div>
  );
}
