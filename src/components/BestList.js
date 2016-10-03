import React, { Children } from 'react';

import Loader from '../hoc/Loader';

const Header = ({ children }) =>
  <div className="ui segment">{children}</div>;

const Content = ({ children, photos, photosPerPage, page }) =>
  <div className="ui segment items">
    {photos.slice((page - 1) * photosPerPage, page * photosPerPage).map((photo) =>
      children(photo)
    )}
  </div>;

const Footer = ({ children }) =>
  <div className="ui segment">{children}</div>;

const Pagination = ({ children }) =>
  <div className="ui segment">{children}</div>;

let BestList = ({ children }) => {
  const newChildren = Children.toArray(children).sort((a, b) => {
    const order = [Header, Content, Footer, Pagination];
    return order.indexOf(a.type) < order.indexOf(b.type) ? -1 : 1;
  });

  return <div className="ui segments">
    {newChildren}
  </div>;
}

BestList.propTypes = {
  children: (props, propName, componentName) => {
    const children = props[propName];
    const validTypes = [Header, Content, Footer, Pagination];
    const typeMap = {};
    let error;


    Children.forEach(children, (child) => {
      if (error) {
        return;
      }

      // Check types
      if (validTypes.indexOf(child.type) === -1) {
        error = new Error(`\`${componentName}\` only accepts children of the following types: ${validTypes.map((type) => type.name).join(', ')}.`);
        return;
      }

      // Check repetition
      if (child.type.name in typeMap) {
        error = new Error(`\`${componentName}\` only accepts one child of any of the following types: ${validTypes.map((type) => type.name).join(', ')}.`);
        return;
      }
      typeMap[child.type.name] = true;
    });

    return error;
  }
};

BestList = Loader(BestList, 'loading');

BestList.Header = Header;
BestList.Content = Content;
BestList.Footer = Footer;
BestList.Pagination = Pagination;

export default BestList;
