import React, { Component, PropTypes } from 'react';

import ApiClient from '../utils/api';

export default (WrappedComponent, baseUrl, photosPerPage = 10) => {
  class ListContainer extends Component {
    constructor() {
      super();
      this.state = {
        photos: [],
        totalPages: 1,
        loading: false
      };
    }

    fetchPhotoPage(page) {
      // copy the array since splice modifies in place
      const photos = [...this.state.photos];
      this.setState({ loading: true });
      ApiClient.getPhotos(page, photosPerPage)
        .then((newPhotos) => {
          newPhotos.forEach((photo) => {
            photos[photo.id - 1] = photo;
          });
          this.setState({
            photos,
            totalPages: Math.ceil(newPhotos.totalCount / photosPerPage),
            loading: false
          });
        });
    }

    componentDidMount() {
      const { params: { page = '1' } } = this.props;
      this.fetchPhotoPage(parseInt(page, 10));
    }

    componentWillReceiveProps(nextProps) {
      const { params: { page = '1' }} = this.props;
      if (nextProps.params.page !== page) {
        this.fetchPhotoPage(parseInt(nextProps.params.page, 10));
      }

    }

    handleGoToPage(page) {
      this.context.router.push(`${baseUrl}/${page}`);
    }

    render() {
      const { params: { page = '1' } } = this.props;
      return <WrappedComponent
        {...this.state}
        photosPerPage={photosPerPage}
        page={parseInt(page, 10)}
        goToPage={this.handleGoToPage.bind(this)}
      />;
    }
  }

  ListContainer.contextTypes = {
    router: PropTypes.object
  };

  return ListContainer;
}
