import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Item from './Item';
import Pagination from './Pagination';

const BlackBoxList = ({ photos, photosPerPage, page, totalPages, loading, goToPage }) =>
  <div className="ui segment">
    <div className="ui items">
      {photos.slice((page - 1) * photosPerPage, page * photosPerPage).map((photo) =>
        <Item {...photo} key={photo.id} />
      )}
    </div>
    <Pagination page={page} totalPages={1000} goToPage={goToPage} />
    <div className={classnames('ui', 'dimmer', { active: loading })}>
      <div className="ui loader"></div>
    </div>
  </div>;

BlackBoxList.propTypes = {
  photos: PropTypes.array.isRequired,
  photosPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default BlackBoxList;
