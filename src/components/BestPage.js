import React, { PropTypes } from 'react';

import BestList from './BestList';
import Item from './Item';
import Pagination from './Pagination'

const BestPage = ({ children, photos, photosPerPage, page, totalPages, goToPage }) =>
  <div>
    <h1 className="ui header">The best component</h1>
    <BestList>
      <BestList.Content photos={photos} photosPerPage={photosPerPage} page={page}>
        {(photo) => <Item {...photo} key={photo.id} />}
      </BestList.Content>
      <BestList.Pagination>
        <Pagination page={page} totalPages={totalPages} goToPage={goToPage} />
      </BestList.Pagination>
      <BestList.Header>BestList Header</BestList.Header>
    </BestList>
  </div>;

BestPage.propTypes = {
  photos: PropTypes.array.isRequired,
  photosPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default BestPage;
