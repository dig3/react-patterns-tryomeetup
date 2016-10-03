import React, { PropTypes } from 'react';

const Item = ({ id, albumId, title, url, thumbnailUrl }) =>
  <div className="item">
    <img className="ui avatar image" src={thumbnailUrl} alt={title} />
    <div className="content">
      <a className="header" href={url}>{title}</a>
      <div className="description">photo {id} from album {albumId}</div>
    </div>
  </div>;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  albumId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
};

export default Item;
