import { createContext, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const NotificationContext = createContext(toast);

export function NotificationProvider({ children }: { children: ReactNode }) {
    return (
        <NotificationContext.Provider value={toast}>
            {children}
            <ToastContainer />
        </NotificationContext.Provider>
    )
}

export default NotificationContext;