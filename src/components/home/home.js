import React from 'react';
import { QuetzalcoatlContainer, Title, Subtitle, FeatherDetail } from './homeStyles';
import { getQuetzalcoatlGreeting } from './homeDm';

const Quetzalcoatl = () => (
  <QuetzalcoatlContainer>
    <Title>Quetzalcóatl</Title>
    <Subtitle>{getQuetzalcoatlGreeting()}</Subtitle>
    <FeatherDetail>“La sabiduría y la naturaleza se entrelazan en sus plumas”</FeatherDetail>
  </QuetzalcoatlContainer>
);

export default Quetzalcoatl;
