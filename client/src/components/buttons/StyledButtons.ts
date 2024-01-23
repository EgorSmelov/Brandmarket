import styled from '@emotion/styled';
import { Button } from '@mui/material';

type PropsFavorite = {
  isFavorite: boolean;
};

type PropsBasket = {
  isBasket: boolean;
};

export const FavoriteStyledButton = styled(Button)<PropsFavorite>`
  width: 200px;
  height: 26px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.isFavorite ? 'red' : '#ffe4e3')};
  color: black;
  border: 1px solid ${(props) => (props.isFavorite ? 'red' : '#ffe4e3')};
  &:hover {
    background-color: #ffffff;
    border: 1px solid ${(props) => (props.isFavorite ? 'red' : '#ffe4e3')};
    color: black;
  }
`;

export const BasketStyledButton = styled(Button)<PropsBasket>`
  width: 200px;
  height: 26px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.isBasket ? 'red' : '#00b850')};
  color: white;
  border: 1px solid ${(props) => (props.isBasket ? 'red' : '#00b850')};
  &:hover {
    background-color: #ffffff;
    border: 1px solid ${(props) => (props.isBasket ? 'red' : '#00b850')};
    color: black;
  }
`;

// <!-- HTML !-->
// <button class="button-36" role="button">Button 36</button>

// /* CSS */
// .button-36 {
//   background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
//   border-radius: 8px;
//   border-style: none;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   flex-shrink: 0;
//   font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
//   font-size: 16px;
//   font-weight: 500;
//   height: 4rem;
//   padding: 0 1.6rem;
//   text-align: center;
//   text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
//   transition: all .5s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-36:hover {
//   box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
//   transition-duration: .1s;
// }

// @media (min-width: 768px) {
//   .button-36 {
//     padding: 0 2.6rem;
//   }
// }
