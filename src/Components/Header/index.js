import AppDrawer from "../Drawer";
import Input from '@mui/joy/Input';
import './style.css'

export default function AppHeader () {
    return (
        <div className="header-container">
            <h1 className="header-title">Known Event</h1>

            <div className="header-drawer">
                <div>
                    {/* <Input color="primary" variant="outlined" placeholder="Search..." /> */}
                    <AppDrawer />
                </div>
            </div>
        </div>
    )
}