import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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

  const list = (anchor: Anchor): JSX.Element => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            type="button"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: '20px',
              position: 'relative',
              cursor: 'pointer',
              padding: '10px',
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <span
              style={{
                position: 'absolute',
                height: '3px',
                width: '24px',
                backgroundColor: 'white',
                display: 'block',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                height: '3px',
                width: '24px',
                backgroundColor: 'white',
                display: 'block',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                marginTop: '8px',
              }}
            />
            <span
              style={{
                position: 'absolute',
                height: '3px',
                width: '24px',
                backgroundColor: 'white',
                display: 'block',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                marginTop: '16px',
              }}
            />
          </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
