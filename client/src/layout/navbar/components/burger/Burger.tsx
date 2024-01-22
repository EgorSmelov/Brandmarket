import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import getAllCategoriesThunk from '../../../../redux/slices/categories/categoryThunks';
import CategoryItem from './category-item/CategoryItem';
import GenderItem from './gender-item/GenderItem';

type Anchor = 'left';

export default function Burger(): JSX.Element {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const { categories } = useAppSelector((stateForCategories) => stateForCategories.categories);
  const { genders } = useAppSelector((stateForGenders) => stateForGenders.genders);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  const list = (anchor: Anchor): JSX.Element => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {genders?.map((gender) => (
          <div key={gender.id}>
            <GenderItem gender={gender} />
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {categories?.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)} />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
