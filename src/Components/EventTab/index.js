import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import Sheet from '@mui/joy/Sheet';
import './style.css'
import moment from 'moment';
import Chip from '@mui/joy/Chip';
import { Bookmark, BookmarkBorder, BookmarkOutlined, Cloud } from '@mui/icons-material';
import CircularProgress from '@mui/joy/CircularProgress';
import { useNavigate } from 'react-router-dom'


export default function EventTab({ event, moreEventsEnabled }) {

    const isEventRegistrationAvialable = (date) => {
        return moment(date).isSameOrBefore(new Date())
    }

    const isSeatsLow = (availableSeats) => {
        return availableSeats <= 4
    }

    const [bookmark, setBookmark] = useState(false)
    const [bookmarkLoading, setBookmarkLoading] = useState(false)

    const navigate = useNavigate()

    const handleBookmarkEvent = (event) => {
        setBookmarkLoading(true)
        setTimeout(() => {
            setBookmarkLoading(false)
            setBookmark(event)
        }, 1000)
    }

    const handleCollegeEvent = (collegeId) => {
        navigate(`/events/college/${collegeId}?pageSize=10&pageNumber=0`)
    }

    return (
        <div className='event-tab-container'>
            <Card
                sx={{
                    width: 420,
                    // maxWidth: '100%',
                    boxShadow: 'lg',
                }}
            >
                <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <Typography level="title-lg">{event.name}</Typography>

                    <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                        College Name: {event.college.name}
                    </Typography>


                    <Sheet
                        sx={{
                            bgcolor: 'background.level1',
                            borderRadius: 'sm',
                            p: 1.5,
                            my: 1.5,
                            display: 'flex',
                            gap: 2,
                            '& > div': { flex: 1 },
                            width: '80%'
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Total Seats
                            </Typography>
                            <Typography fontWeight="lg">{event.seats}</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg" color={isSeatsLow(event.availableSeats) ? 'danger' : ''}>
                                Available Seats
                            </Typography>
                            <Typography fontWeight="lg" color={isSeatsLow(event.availableSeats) ? 'danger' : ''}>{event.availableSeats}</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Event Date
                            </Typography>
                            <Typography fontWeight="lg">{event.dateOfEvent}</Typography>
                        </div>
                    </Sheet>

                    <Sheet
                        sx={{
                            bgcolor: 'background.level1',
                            borderRadius: 'sm',
                            p: 1.5,
                            my: 1.5,
                            display: 'flex',
                            gap: 2,
                            '& > div': { flex: 1 },
                            width: '80%'
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Registration starts at
                            </Typography>
                            <Typography fontWeight="lg">{event.registrationBegin}</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Registration ends at
                            </Typography>
                            <Typography fontWeight="lg">{event.registrationEnd}</Typography>
                        </div>
                    </Sheet>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            mt: 2,
                            '& > button': { borderRadius: '2rem' },
                        }}
                    >
                        <IconButton size="sm" variant="plain" color="neutral">
                            <SvgIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                                    />
                                </svg>
                            </SvgIcon>
                        </IconButton>
                        <IconButton size="sm" variant="plain" color="neutral">
                            <SvgIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                                    />
                                </svg>
                            </SvgIcon>
                        </IconButton>
                        <IconButton size="sm" variant="plain" color="neutral">
                            <SvgIcon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351a9.757 9.757 0 0 1-.92.87a13.156 13.156 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003c.027.061.05.118.094.229l.017.04c1.513-.17 3.109-.107 4.656.103c.206.027.4.056.584.087Zm-9.385-7.45a46.15 46.15 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767c.33-.274.594-.532.796-.755A7.968 7.968 0 0 0 12 4c-.476 0-.942.042-1.396.121ZM4.253 9.997a29.21 29.21 0 0 0 2.04-.123a31.53 31.53 0 0 0 4.862-.822a54.36 54.36 0 0 0-2.7-4.227a8.018 8.018 0 0 0-4.202 5.172Zm1.53 7.038a14.21 14.21 0 0 1 1.575-1.899c1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995c-1.836.535-3.77.869-5.697 1.042c-.94.085-1.783.122-2.403.128a7.966 7.966 0 0 0 1.784 5.032Zm9.221 2.38a35.951 35.951 0 0 0-1.632-5.709c-2 .727-3.596 1.79-4.829 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583Zm1.874-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.025 12.025 0 0 0-3.18-.033a39.39 39.39 0 0 1 1.438 5.14ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Z"
                                    />
                                </svg>
                            </SvgIcon>
                        </IconButton>

                        {bookmarkLoading ?
                            <Chip variant='plain' startDecorator={<CircularProgress variant='soft' color='neutral' size="sm" />} />
                            : <Chip variant="plain" startDecorator={
                                bookmark ? <Bookmark /> : <BookmarkBorder />
                            } size='sm' onClick={() => handleBookmarkEvent(!bookmark)} />
                        }


                    </Box>
                </CardContent>

                <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                    <CardActions buttonFlex="1">
                        <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                            
                            {moreEventsEnabled
                                ? <Button onClick={() => handleCollegeEvent(event.college.id)}>More events in this college</Button>
                                : ''
                            }

                            {isEventRegistrationAvialable(event.registrationBegin)
                                ? <Button variant="solid" color='primary'>Register Now</Button>
                                : <Button variant="solid" color=''>Know More</Button>
                            }

                        </ButtonGroup>
                    </CardActions>
                </CardOverflow>
            </Card>
        </div>
    )
}
