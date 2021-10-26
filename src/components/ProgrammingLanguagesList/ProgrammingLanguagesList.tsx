import {makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import {ReactComponent as CSSIcon} from '../../assets/images/css3-original.svg';
import {ReactComponent as GoIcon} from '../../assets/images/go-original.svg';
import {ReactComponent as HtmlIcon} from '../../assets/images/html5-original.svg';
import {ReactComponent as JavaIcon} from '../../assets/images/java-original.svg';
import {ReactComponent as JavascriptIcon} from '../../assets/images/javascript-original.svg';
import {ReactComponent as PhpIcon} from '../../assets/images/php-original.svg';
import {ReactComponent as PythonIcon} from '../../assets/images/python-original.svg';
import {ReactComponent as RubyIcon} from '../../assets/images/ruby-original.svg';
import {ReactComponent as TypescriptIcon} from '../../assets/images/typescript-original.svg';
import {ReactComponent as ReactIcon} from '../../assets/images/react-original.svg';

export const ProgrammingLanguagesList: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <CSSIcon className={classes.icon} />
      <GoIcon className={classes.icon} />
      <HtmlIcon className={classes.icon} />
      <JavaIcon className={classes.icon} />
      <JavascriptIcon className={classes.icon} />
      <PhpIcon className={classes.icon} />
      <PythonIcon className={classes.icon} />
      <RubyIcon className={classes.icon} />
      <TypescriptIcon className={classes.icon} />
      <ReactIcon className={classes.icon} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  icon: {
    padding: '10px',
    height: '50px',
    width: '50px',
  },
}));
