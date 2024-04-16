import classNames from 'classnames';
import style from './Text.module.css';
import propTypes from 'prop-types';

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

Text.propTypes = {
  As: propTypes.string,
  color: propTypes.string,
  size: propTypes.number,
  tsize: propTypes.number,
  dsize: propTypes.number,
  className: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.array,
  ]),
  href: propTypes.string,
  center: propTypes.bool,
  weight: propTypes.string,
};
