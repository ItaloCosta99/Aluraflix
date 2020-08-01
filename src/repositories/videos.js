import config from '../config';

const URL_CATEGORIES = `${config.URL}/videos`;

function create(videoObj) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  })
    .then(async (servRes) => {
      if (servRes.ok) {
        const response = await servRes.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
