import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import styles from '../assets/stylesheets/pie_counter.pcss';

const X_CENTRE = 100;
const Y_CENTRE = 100;
const R = 90;

function drawSection(ctx, start, end, strokeStyle, lineWidth, limit = end) {
  ctx.beginPath();
  ctx.strokeStyle = strokeStyle;
  ctx.lineCap = 'round';
  ctx.lineWidth = lineWidth;
  ctx.arc(X_CENTRE, Y_CENTRE, R, start, Math.min(end, limit));
  ctx.stroke();
}

function gradientBetweenRads(ctx, start, end) {
  const xStart = X_CENTRE + (Math.cos(start) * R);
  const xEnd = X_CENTRE + (Math.cos(end) * R);

  const yStart = Y_CENTRE + (Math.sin(start) * R);
  const yEnd = Y_CENTRE + (Math.sin(end) * R);

  const gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
  gradient.addColorStop(0, '#36B3C1');
  gradient.addColorStop(1.0, '#49E68D');

  return gradient;
}

class PieCounter extends React.Component {
  componentDidMount() {
    this.draw();
  }

  getPercentComplete() {
    const { getValue, max } = this.props;
    return 1 - (getValue() / max);
  }

  draw = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');

    ctx.setTransform(2, 0, 0, 2, 0, 0);

    ctx.clearRect(0, 0, 200, 200);

    ctx.font = '80px "Helvetica Neue"';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(this.props.displayValue(), X_CENTRE, Y_CENTRE + 20);
    ctx.font = '15px "Helvetica Neue"';
    ctx.fillText(this.props.label, X_CENTRE, Y_CENTRE + 40);

    // start at the top of the circle
    const start = 1.5 * Math.PI;

    // const complete = percentToRad(this.getPercentComplete()) - (0.5 * Math.PI);
    const complete = start + (2 * Math.PI * this.getPercentComplete());

    const solidSectionLength = 0.25 * Math.PI;
    const gradientSectionLength = (2 * Math.PI) - (2 * solidSectionLength);

    // draw the background circle
    drawSection(ctx, start, start + (2 * Math.PI), '#242429', 20);

    // draw the solid blue section
    drawSection(ctx, start, start + solidSectionLength, '#36B3C1', 12, complete);

    // end in the first section
    if (complete <= start + solidSectionLength) {
      window.requestAnimationFrame(this.draw);
      return;
    }

    // draw the gradient section
    const gradientStart = start + solidSectionLength;
    const gradientEnd = gradientStart + gradientSectionLength;
    const gradient = gradientBetweenRads(ctx, gradientStart, gradientEnd);
    drawSection(ctx, gradientStart - 0.1, gradientEnd + 0.1, gradient, 12, complete);

    // end in the gradient section
    if (complete <= gradientEnd) {
      window.requestAnimationFrame(this.draw);
      return;
    }

    // draw the solid green section
    drawSection(ctx, gradientEnd, gradientEnd + solidSectionLength, '#49E68D', 12, complete);

    window.requestAnimationFrame(this.draw);
  };

  canvas = React.createRef();

  render() {
    return <canvas ref={this.canvas} className={styles.canvas} width="400" height="400" />;
  }
}

PieCounter.propTypes = forbidExtraProps({
  getValue: PropTypes.func.isRequired,
  displayValue: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
});

export default PieCounter;