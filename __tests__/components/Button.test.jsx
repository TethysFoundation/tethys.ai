import React from 'react';
import { render } from 'react-testing-library';
import Button from '../../src/components/Button';

describe('Button', () => {
  describe('when given an href', () => {
    it('renders an "a" tag', () => {
      const { container } = render(<Button href="/example" text="Submit" />);
      expect(container).toMatchSnapshot();
    });

    it('can render with the small size class', () => {
      const { container } = render(<Button href="/example" text="Submit" size="small" />);
      expect(container).toMatchSnapshot();
    });

    it('adds target _blank when newTab is set to true', () => {
      const { container } = render(<Button href="/example" text="Submit" size="small" newTab />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('when not given an href', () => {
    it('renders a button', () => {
      const { container } = render(<Button text="Submit" />);
      expect(container).toMatchSnapshot();
    });

    it('can render with the small size class', () => {
      const { container } = render(<Button text="Submit" size="small" />);
      expect(container).toMatchSnapshot();
    });
  });
});
