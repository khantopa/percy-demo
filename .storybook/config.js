import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addDecorator(StoryRouter());
addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    panelPosition: 'right',
    theme: undefined,
  },
});

configure(
  [require.context('./', true, /\.stories\.mdx$/), require.context('../src/', true, /\.stories\.(tsx|mdx|js|jsx)$/)],
  module
);
