import styled from '@emotion/styled';
import { Button } from '@mui/material';

type Props = {
  isFavorite: boolean;
};

export const MaterialButton = styled(Button)<Props>`
  background-color: ${(props) => (props.isFavorite ? 'red' : 'white')};
  color: ${(props) => (props.isFavorite ? 'white' : 'black')};
`;

export const MaterialButton2 = styled(Button)<Props>``;
