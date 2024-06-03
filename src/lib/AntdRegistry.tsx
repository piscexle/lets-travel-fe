'use client';

import React from 'react';
import {
  createCache,
  extractStyle,
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

function StyledComponentsRegistry({ children }: React.PropsWithChildren) {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <StyleProvider
      cache={cache}
      hashPriority="high"
      transformers={[legacyLogicalPropertiesTransformer]}
    >
      {children}
    </StyleProvider>
  );
}

export default StyledComponentsRegistry;
