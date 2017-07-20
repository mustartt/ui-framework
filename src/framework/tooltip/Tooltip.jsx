
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Box,
  Text,
} from '../../framework/framework';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = { hover: false };
  }

  componentDidUpdate() {
    if (this.state.hover) {
      this.content.style.width = this.props.width;
      this.styles = ['tooltip__container'];

      this.windowLimits = {
        height: window.innerHeight,
        width: window.innerWidth,
      };

      const tooltipDimension = this.getTooltipDimension();
      let tooltipX =
        (this.tooltip.clientWidth / 2) - (tooltipDimension.width - 21);
      if (tooltipDimension.posX - tooltipDimension.width < 0) {
        tooltipX = (this.tooltip.clientWidth / 2) - 18;
        this.styles.push('tooltipLeft');
      }

      let tooltipY = this.tooltip.clientHeight + 15;
      if (
        this.windowLimits.height < tooltipDimension.height +
        tooltipDimension.posY + 20
      ) {
        tooltipY = -tooltipDimension.height - 19;
        this.styles.push('tooltipTop');
      }

      this.container.className = this.styles.join(' ');
      this.container.style.left = `${tooltipX}px`;
      this.container.style.top = `${tooltipY}px`;
      this.container.style.opacity = 1;
    }
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  getTooltipDimension() {
    let posX = 0;
    let posY = 0;
    let element = this.content;
    for (
      ;
      element != null;
      posX += element.offsetLeft,
      posY += element.offsetTop,
      element = element.offsetParent
    );

    return {
      height: this.content.clientHeight,
      posX,
      posY,
      width: this.content.clientWidth,
    };
  }

  renderTooltip() {
    return (
      <div
        className="tooltip__container"
        ref={(div) => { this.container = div; }}
      >
        <Box roundedCorners>
          <div
            className="tooltip__container__content"
            ref={(div) => { this.content = div; }}
          >
            <Text>
              {this.props.message}
            </Text>
          </div>
        </Box>
      </div>
    );
  }

  render() {
    let tooltipContainter;

    if (this.state.hover) {
      tooltipContainter = this.renderTooltip();
    }

    return (
      <div
        className="tooltip"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        ref={(div) => { this.tooltip = div; }}
      >
        {this.props.children}
        {tooltipContainter}
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.any,
  message: PropTypes.string,
  width: PropTypes.string,
};
