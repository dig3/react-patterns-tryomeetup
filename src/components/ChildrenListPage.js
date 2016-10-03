import React, { PropTypes } from 'react';

import ChildrenList from './ChildrenList';
import Item from './Item';

const ChildrenListPage = ({ photos, photosPerPage, page, totalPages, loading, goToPage }) =>
  <div>
    <h1 className="ui header">A component using children</h1>
    <ChildrenList page={page} totalPages={totalPages} loading={loading} goToPage={goToPage}>
      {photos.slice((page - 1) * photosPerPage, page * photosPerPage).map((photo) =>
        <Item {...photo} key={photo.id} />
      )}
    </ChildrenList>
  </div>;

ChildrenListPage.propTypes = {
  photos: PropTypes.array.isRequired,
  photosPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default ChildrenListPage;
