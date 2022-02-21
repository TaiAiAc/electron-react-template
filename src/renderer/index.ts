import { windowLoad } from '@/renderer/common/window';
import { setCustomize } from '@/renderer/store';
import ReactDOM from 'react-dom';
import '@/renderer/views/style';

windowLoad((_, args) => {
  setCustomize(args);
  document.title = args.title || '';
  document.body.setAttribute('platform', window.environment.platform);
  document.body.setAttribute('headNative', args.headNative + '');
  import('@/renderer/views/app').then((app) =>
    ReactDOM.render(app.default(), document.getElementById('root'))
  );
});
