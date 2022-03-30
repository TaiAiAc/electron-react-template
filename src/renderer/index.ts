import { windowLoad } from '@/renderer/common/window';
import { createRoot } from 'react-dom/client';
import '@/renderer/views/style';

windowLoad((_, args) => {
  window.customize = args;
  document.body.setAttribute('platform', window.environment.platform);
  document.body.setAttribute('headNative', args.headNative + '');
  import('@/renderer/views/app').then((app) => {
    const root = createRoot(document.getElementById('root') as HTMLElement);
    root.render(app.default());
  });
});
