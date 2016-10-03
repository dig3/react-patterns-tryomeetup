import React, { PropTypes } from 'react';

import FunctionAsChildrenList from './FunctionAsChildrenList';
import Item from './Item';

const FunctionAsChildrenPage = (props) =>
  <div>
    <h1 className="ui header">A component using a function as children</h1>
    <FunctionAsChildrenList {...props}>
      {(photo) => <Item {...photo} key={photo.id} />}
    </FunctionAsChildrenList>
  </div>;

FunctionAsChildrenPage.propTypes = {
  photos: PropTypes.array.isRequired,
  photosPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default FunctionAsChildrenPage;
