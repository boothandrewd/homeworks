import React from 'react';

const GiphysIndexItem = ({ giphy }) => (
  <li className='giphy-li'>
    <img src={giphy.images.original.url} alt={giphy.slug} />
  </li>
);

export default GiphysIndexItem;
