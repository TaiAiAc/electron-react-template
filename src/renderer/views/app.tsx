import { windowCreate, windowShow } from '@/renderer/common/window';
import { getCustomize } from '@/renderer/store';

export default function () {
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
