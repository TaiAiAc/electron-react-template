import { windowLoad } from '@/renderer/common/window';
import { setCustomize } from '@/renderer/store';
import ReactDOM from 'react-dom';
import app from '@/renderer/views/app';

windowLoad((_, args) => {
  setCustomize(args);
  document.title = args.title || '';
  document.body.setAttribute('platform', window.environment.platform);
  document.body.setAttribute('headNative', args.headNative + '');
  ReactDOM.render(app(), document.getElementById('root'));
});
