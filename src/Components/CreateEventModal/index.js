import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import CardActions from '@mui/joy/CardActions';
import { ConfirmationNumber, Festival } from '@mui/icons-material';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect, useState } from 'react';
import CollegeService from '../../Service/CollegeService';
import EventsService from '../../Service/EventsService';
import LinearProgress from '@mui/joy/LinearProgress';
import Snackbar from '@mui/joy/Snackbar';


export default function CreateEventModal({ open, setOpen }) {

    const [collegeNameList, setCollegeNameList] = useState([])
    const [eventName, setEventName] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventBegins, setEventBegins] = useState('')
    const [eventEnds, setEventEnds] = useState('')
    const [noOfSeats, setNoOfSeats] = useState(0)
    const [eventCollge, setEventCollge] = useState('')
    const [creatingEvent, setCreatingEvent] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)

    const fetchCollegeList = async () => {
        try {
            const response = await CollegeService.getCollegeNameList()
            if(response.status === 200) {
                setCollegeNameList(response.data)
            }
        } catch (error) {
            
        }
    }

    const handleOnCreateEvent = async () => {
        setCreatingEvent(true)
        const createEventData = {
            name: eventName,
            description: eventDescription,
            dateOfEvent: eventDate,
            registrationBegin: eventBegins,
            registrationEnd: eventEnds,
            seats: noOfSeats
        }

        try {

            if(eventCollge === '' || eventCollge === undefined) {
                setErrorMessage('Please select the college')
                setOpenErrorSnackbar(true)
            }

            const response = await EventsService.createNewEvent(createEventData, eventCollge)
            if(response.status === 201) {
                setCreatingEvent(false)
                setOpen(false)
            } else {
                setErrorMessage(response.error)
                setOpenErrorSnackbar(true)
            }
        } catch (error) {
            setErrorMessage(error)
            setOpenErrorSnackbar(true)
        }

    }

    useEffect(() => {
        fetchCollegeList()
    }, [])

    return (
        <div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog variant="soft">
                    <ModalClose />
                    { creatingEvent ? <LinearProgress  /> : '' }
                    <DialogTitle>Create New Event</DialogTitle>
                    <DialogContent>

                        <Card
                            size="lg"
                            variant="plain"
                            orientation="horizontal"
                            sx={{
                                textAlign: 'center',
                                maxWidth: '100%',
                                // width: 500,
                                resize: 'horizontal',
                                overflow: 'auto',
                            }}
                        >
                            <CardOverflow
                                variant="solid"
                                color="primary"
                                sx={{
                                    flex: '0 0 200px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    px: 'var(--Card-padding)',
                                }}
                            >
                                <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
                                    Welcome
                                </Typography>
                                <Typography textColor="primary.200">
                                    Invite all to the event
                                </Typography>
                            </CardOverflow>
                            <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
                                <CardContent
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                                        gap: 1.5,
                                    }}
                                >
                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel>Event Name</FormLabel>
                                        <Input endDecorator={<Festival />} value={eventName} onChange={e => setEventName(e.target.value)} />
                                    </FormControl>

                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel>Event Description</FormLabel>
                                        <Textarea minRows={4} value={eventDescription} onChange={e => setEventDescription(e.target.value)} />
                                    </FormControl>

                                    <FormControl sx={{ gridColumn: '1/-1' }}>
                                        <FormLabel>Select College</FormLabel>
                                        <Select defaultValue={eventCollge} onChange={(e, value) => setEventCollge(value)}>
                                            {collegeNameList.map(college => (
                                                <Option key={college.id} value={college.id}>{college.name}</Option>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Event Date</FormLabel>
                                        <Input type='date' value={eventDate} onChange={e => setEventDate(e.target.value)} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Maximum Seats</FormLabel>
                                        <Input endDecorator={<ConfirmationNumber />} value={noOfSeats} onChange={e => setNoOfSeats(e.target.value)} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Registration Starts</FormLabel>
                                        <Input type='date' value={eventBegins} onChange={e => setEventBegins(e.target.value)} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Registration Ends</FormLabel>
                                        <Input type='date' value={eventEnds} onChange={e => setEventEnds(e.target.value)} />
                                    </FormControl>

                                    <CardActions sx={{ gridColumn: '1/-1' }}>
                                        <Button variant="solid" color="primary" onClick={() => handleOnCreateEvent()} disabled={creatingEvent}>
                                            Create Event
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </CardContent>
                        </Card>

                    </DialogContent>
                </ModalDialog>
            </Modal>
            {/* <Snackbar color="danger" variant="soft" open={openErrorSnackbar}>{errorMessage}</Snackbar> */}
        </div>
    )
}
