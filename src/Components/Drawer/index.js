import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import { Settings } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/joy/Chip';

export default function AppDrawer() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');
  const [amenities, setAmenities] = React.useState([0, 6]);

  return (
    <React.Fragment>

      <Chip 
        onClick={() => setOpen(true)}
        startDecorator={<MoreVertIcon />}
        color='neutral'
        variant='plain'
        size='sm'
      />

      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Menu</DialogTitle>
          <ModalClose />


          <Divider sx={{ mt: 'auto' }} />
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}