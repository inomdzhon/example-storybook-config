import * as React from 'react';

import { Button } from './Button';

import { StorybookGrid, StorybookGridItem } from '../helpers';
import { exportAs, withTemplate } from '../utils';

export default {
  component: Button,
  title: 'inputs/Button',
};

export const Basic = withTemplate(Button);

Basic.args = {
  children: 'Basic button',
};

export const Colors: React.FC = () => (
  <StorybookGrid>
    <StorybookGridItem>
      <Button color="default">Default</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button color="accent">Accent</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button color="positive">Positive</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button color="negative">Negative</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button color="warning">Warning</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button disabled={true}>Disabled</Button>
    </StorybookGridItem>
  </StorybookGrid>
);

export const Sizes: React.FC = () => (
  <StorybookGrid>
    <StorybookGridItem>
      <Button size="small">Small</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button size="medium">Medium</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button size="large">Large</Button>
    </StorybookGridItem>
  </StorybookGrid>
);

export const Composition: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const timeoutId = React.useRef(-1);

  function handleClick(): void {
    setLoading(true);
  }

  React.useEffect(() => {
    if (loading) {
      timeoutId.current = window.setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return () => window.clearTimeout(timeoutId.current);
  }, [loading]);

  return (
    <StorybookGrid>
      <StorybookGridItem style={{ width: 200, flexShrink: 0 }}>
        <Button
          renderContent={(content) => (loading ? 'Loading...' : content)}
          onClick={handleClick}
          fullWidth={true}
          disabled={loading}
        >
          Click to me
        </Button>
      </StorybookGridItem>
    </StorybookGrid>
  );
};

export const Text: React.FC = () => (
  <StorybookGrid>
    <StorybookGridItem style={{ width: 200, flexShrink: 0 }}>
      <Button color="default" fullWidth={true} textAlign="left">
        This cool text is left aligned
      </Button>
    </StorybookGridItem>
    <StorybookGridItem style={{ width: 200, flexShrink: 0 }}>
      <Button color="default" fullWidth={true} textAlign="center">
        This cool text is centered
      </Button>
    </StorybookGridItem>
    <StorybookGridItem style={{ width: 200, flexShrink: 0 }}>
      <Button color="default" fullWidth={true} textAlign="right">
        This cool text is right aligned
      </Button>
    </StorybookGridItem>
  </StorybookGrid>
);

const Link = React.forwardRef<HTMLAnchorElement, { to: string; children: React.ReactNode }>(
  ({ to, children, ...otherProps }) => {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...otherProps}>
        {children}
      </a>
    );
  },
);

export const ComponentProp: React.FC = () => (
  <StorybookGrid>
    <StorybookGridItem>
      <Button component="a" href="https://google.com/" target="_blank" rel="noopener noreferrer">
        Button like anchor
      </Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button component="div">Button like div</Button>
    </StorybookGridItem>
    <StorybookGridItem>
      <Button component={Link} to="https://google.com/">
        Button wrapped to `Link` component (see `react-router`)
      </Button>
    </StorybookGridItem>
  </StorybookGrid>
);
