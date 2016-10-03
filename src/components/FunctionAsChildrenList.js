import React, { PropTypes } from 'react';

import Loader from '../hoc/Loader';
import Pagination from './Pagination';

const FunctionAsChildrenList =
  ({ children, photos, photosPerPage, page, totalPages, goToPage }) =>
    <div className="ui segment">
      <div className="ui items">
        {photos.slice((page - 1) * photosPerPage, page * photosPerPage).map((photo) =>
          children(photo)
        )}
      </div>
      <Pagination page={page} totalPages={totalPages} goToPage={goToPage} />
    </div>;

FunctionAsChildrenList.propTypes = {
  children: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  photosPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default Loader(FunctionAsChildrenList, 'loading');
