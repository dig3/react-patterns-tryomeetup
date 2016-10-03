import React, { Component } from 'react';
import { withRouter } from 'react-router';

import ApiClient from '../utils/api';

import ChildrenListPage from '../components/ChildrenListPage';

const PHOTOS_PER_PAGE = 15;

class ChildrenListContainer extends Component {
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
    ApiClient.getPhotos(page)
      .then((newPhotos) => {
        newPhotos.forEach((photo) => {
          photos[photo.id - 1] = photo;
        });
        this.setState({
          photos,
          totalPages: Math.ceil(newPhotos.totalCount / PHOTOS_PER_PAGE),
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
    this.props.router.push(`/children-list/${page}`);
  }

  render() {
    const { params: { page = '1' } } = this.props;
    return <ChildrenListPage
      {...this.state}
      photosPerPage={PHOTOS_PER_PAGE}
      page={parseInt(page, 10)}
      goToPage={this.handleGoToPage.bind(this)}
    />;
  }
}

export default withRouter(ChildrenListContainer);
