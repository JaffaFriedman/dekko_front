import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

<ToastContainer position='top-center' />

const notifyError = msg => toast.error(msg)
const notifySuccess = msg => toast.success(msg)

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div>
            <button onClick={showToastMessage}>Notify</button>
            <ToastContainer />
        </div>
    );
}