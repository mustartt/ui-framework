
// Import exports from various modules.
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

// Define stateless functional component.
const Button = props => {
  function onClick(event) {
    // onClick is optional, so exit early if it doesn't exist.
    if (!props.onClick) {
      return;
    }
    // Don't even trigger the onClick handler if we're disabled.
    if (props.disabled) {
      return;
    }
    props.onClick(event);
  }

  const classes = classNames('button', props.classes, {
    'is-button-disabled': props.disabled,
    'is-button-selected': props.selected,
  });

  let icon;

  if (props.type) {
    const typeToIconClassMap = {
      // TODO: Change this to icon-plus-white when it's in icon-library.
      [Button.TYPE.ADD]: 'icon-plus',
    };

    const iconClasses = classNames(
      'button__icon icon',
      typeToIconClassMap[props.type]
    );

    icon = <span className={iconClasses} />;
  }

  let children;

  if (props.children) {
    children = (
      <span className="button__label">
        {props.children}
      </span>
    );
  }

  const linkType = props.href ? 'a' : 'button';

  return React.createElement(linkType, {
    'data-id': props.dataId,
    className: classes,
    href: props.href,
    onClick,
    children: [
      icon,
      children,
    ],
  });
};

Button.TYPE = keyMirror({
  ADD: null,
});

Button.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Button;

// We need to export these classes after Button because they depend on Button
export {
  default as BasicButton,
} from './BasicButton.jsx';

export {
  default as CallOutButton,
} from './CallOutButton.jsx';

export {
  default as GroupedButton,
} from './GroupedButton.jsx';

export {
  default as HollowButton,
} from './HollowButton.jsx';

export {
  default as PrimaryButton,
} from './PrimaryButton.jsx';
