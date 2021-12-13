import React from 'react';
import { DetailsWrapper } from '../../pages/Details.styled';

export const Details = ({ Status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>
        Status: <span>{Status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};
