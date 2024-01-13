import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import College from "./Components/College";
import Event from "./Components/Events";
import EventsByCollege from "./Components/Events/EventsByCollege";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Event />
        },
        {
            path: "/colleges",
            element: <College />
        },
        {
            path: "/events/college/:collegeId",
            element: <EventsByCollege />
        },
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
