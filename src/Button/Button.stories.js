import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';

import Button from './index';

storiesOf('Button', module)
  .addWithJSX('Default', () => (
    <Button color={color('color', '#CCC')}>
      { text('label', 'Click me') }
    </Button>
  ))