import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    weight,
  } = prop;
  const classes = classNames(
    className,
    style[color],
    style[`font-${weight}`] = weight,
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fst${dsize}`]]: dsize},
  );

  return (<As className={classes} href={href}>{children}</As>);
};

export default Text;

Text.PropTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  weight: PropTypes.string,
};
