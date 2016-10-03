import React from 'react';
import classnames from 'classnames';

export default (WrappedComponent, loadingPropName) => (props) =>
  <div>
    <WrappedComponent {...props} />
    <div className={classnames('ui', 'dimmer', { active: props[loadingPropName] })}>
      <div className="ui loader"></div>
    </div>
  </div>;
