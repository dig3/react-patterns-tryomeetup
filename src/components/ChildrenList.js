import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Pagination from './Pagination';

const ChildrenList = ({ children, page, totalPages, loading, goToPage }) =>
  <div className="ui segment">
    <div className="ui items">
      {children}
    </div>
    <Pagination page={page} totalPages={totalPages} goToPage={goToPage} />
    <div className={classnames('ui', 'dimmer', { active: loading })}>
      <div className="ui loader"></div>
    </div>
  </div>;

ChildrenList.propTypes = {
  children: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default ChildrenList;
