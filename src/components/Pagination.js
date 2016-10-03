import React, { PropTypes } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

const getPagination = (currentPage, totalPages, pagerLength, goToPage) => {
  let pagination = _.range(1, totalPages + 1).map((page) => ({
    label: `${page}`,
    onClick: () => goToPage(page),
    active: page === currentPage,
  }));
  const dots = {
    label: '...',
    disabled: true
  };

  if (totalPages <= pagerLength) {
    _.noop();
  }
  else if (currentPage < pagerLength) {
    pagination = _.chain(pagination)
        .take(pagerLength - 1)
        .concat(dots)
        .value()
  } else if (currentPage > totalPages - pagerLength + 1) {
    pagination = _.chain(pagination)
        .takeRight(pagerLength - 1)
        .unshift(dots)
        .value()
  } else {
    pagination = _.chain(pagination)
        .drop(currentPage - ((pagerLength - 2) / 2))
        .take(pagerLength - 2)
        .unshift(dots)
        .concat(dots)
        .value()
  }

  return _.chain(pagination)
    .unshift({
      label: '‹',
      onClick: () => goToPage(currentPage - 1),
      disabled: currentPage === 1
    }).unshift({
      label: '«',
      onClick: () => goToPage(1),
      disabled: currentPage === 1
    }).concat({
      label: '›',
      onClick: () => goToPage(currentPage + 1),
      disabled: currentPage === totalPages
    }).concat({
      label: '»',
      onClick: () => goToPage(totalPages),
      disabled: currentPage === totalPages
    }).value();
}


const Pagination = ({ page, totalPages, goToPage }) =>
  <div className="ui pagination menu">
    {getPagination(page, totalPages, 5, goToPage).map(({ label, active, disabled, onClick }, i) =>
      <a
        key={`${i}-${label}`}
        className={classnames('item', {
          disabled: !!disabled,
          active: !!active
        })}
        onClick={onClick}
      >
        {label}
      </a>
    )}
  </div>;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default Pagination;
