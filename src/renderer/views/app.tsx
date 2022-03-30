import { windowCreate, windowShow } from '@/renderer/common/window';

export default function () {
  windowShow();

  function baidu() {
    windowCreate(
      {
        url: 'https://baidu.com/',
        parentId: window.customize.id
      },
      {
        width: 1280,
        height: 720
      }
    );
  }

  return (
    <div className="info">
      <div>hello react</div>
      <button className="but" onClick={() => baidu()}>
        百度
      </button>
    </div>
  );
}
