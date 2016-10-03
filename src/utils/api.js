import queryString from 'query-string';

const urlForPage = (page, photosPerPage) => {
  const query = queryString.stringify({
    '_start': (page - 1) * photosPerPage,
    '_limit': photosPerPage
  });

  return `https://jsonplaceholder.typicode.com/photos?${query}`
};

const getPhotos = (page, photosPerPage) => {
  let total;
  return fetch(urlForPage(page))
    .then((response) => {
      total = parseInt(response.headers.get('X-Total-Count'), 10) || 0;
      return response.json();
    }).then((json) => {
      json.totalCount = total || json.length;
      return json;
    });
};

export default {
  getPhotos
};
