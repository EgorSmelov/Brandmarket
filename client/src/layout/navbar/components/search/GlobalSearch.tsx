import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch } from '../../../../redux/hooks';
import { getAllGoodsThunk, getSearchGoodsThunk } from '../../../../redux/slices/goods/goodThunk';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function GlobalSearch(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchGood, setSearchGood] = React.useState<string>('');
  const [searchTimeout, setSearchTimeout] = React.useState<number | null>(null);

  function searchChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setSearchGood(e.target.value);
    if (searchTimeout !== null) {
      clearTimeout(searchTimeout);
    }
    setSearchTimeout(
      setTimeout(
        (value: string) => {
          void dispatch(getSearchGoodsThunk(value));
        },
        500,
        e.target.value,
      ),
    );
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Поиск"
        inputProps={{ 'aria-label': 'search' }}
        value={searchGood}
        onChange={(e) => searchChangeHandler(e)}
      />
    </Search>
  );
}
