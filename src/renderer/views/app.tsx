import React from 'react';
import '@/renderer/views/style/color.scss';
import '@/renderer/views/style/index.scss';
import { windowShow } from '@/renderer/common/window';

export default function App() {
  windowShow();
  return <h1>React!</h1>;
}
