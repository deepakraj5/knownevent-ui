import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import { Add, Bookmark, Festival, HistoryEdu, HowToReg, LocationCity, LocationOn, Place, School, Stadium } from '@mui/icons-material';
import Apps from '@mui/icons-material/Apps';
import CreateEventModal from '../CreateEventModal';
import { useNavigate } from 'react-router-dom'

export default function AppDrawer() {
    const [open, setOpen] = React.useState(false);
    const [openCreateEventModal, setOpenCreateEventModal] = React.useState(false);
    const navigate = useNavigate()

    const createButtonOnClick = () => {
        setOpenCreateEventModal(!openCreateEventModal)
        setOpen(!open)
    }

    const handleOnEventsClick = () => {
        setOpen(false)
        navigate('/')
    }

    const handleOnCollegeListClick = () => {
        setOpen(false)
        navigate('/colleges')
    }

    return (
        <React.Fragment>

            <Button
                variant="plain"
                color="neutral"
                startDecorator={<Apps />}
                onClick={() => setOpen(true)}
            >
                Menu
            </Button>

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

                    <Input
                        size="sm"
                        placeholder="Search"
                        variant="plain"
                        endDecorator={<Search />}
                        slotProps={{
                            input: {
                                'aria-label': 'Search anything',
                            },
                        }}
                        sx={{
                            m: 3,
                            borderRadius: 0,
                            borderBottom: '2px solid',
                            borderColor: 'neutral.outlinedBorder',
                            '&:hover': {
                                borderColor: 'neutral.outlinedHoverBorder',
                            },
                            '&::before': {
                                border: '1px solid var(--Input-focusedHighlight)',
                                transform: 'scaleX(0)',
                                left: 0,
                                right: 0,
                                bottom: '-2px',
                                top: 'unset',
                                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                borderRadius: 0,
                            },
                            '&:focus-within::before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    />

                    <Button endDecorator={<Stadium />} onClick={() => handleOnEventsClick()} variant='outlined' >Events</Button>
                    <Button endDecorator={<Festival />} onClick={() => createButtonOnClick()} variant='outlined' >Create New Event</Button>
                    <Button endDecorator={<HistoryEdu />} onClick={() => handleOnCollegeListClick()} variant='outlined' >Colleges</Button>
                    <Button endDecorator={<School />} onClick={() => null} variant='outlined' >Create New College</Button>
                    <Button endDecorator={<Bookmark />} onClick={() => null} variant='outlined' >Bookmarks</Button>
                    <Button endDecorator={<HowToReg />} onClick={() => null} variant='outlined' >My Registration</Button>
                    <Button endDecorator={<LocationOn />} onClick={() => null} variant='outlined' >My Location</Button>

                    <CreateEventModal open={openCreateEventModal} setOpen={setOpenCreateEventModal} />


                    <Divider sx={{ mt: 'auto' }} />
                </Sheet>
            </Drawer>
        </React.Fragment>
    );
}