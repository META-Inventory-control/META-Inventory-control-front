import SideBar from "../components/sidebar"
import { StyledDashboardMain } from "./styles/dashboard-style"
import ContactList from "../components/contactList"
import { useEffect } from "react"
import { useContext } from "react"
import { ClientContext } from "../contexts/clientContext"

const Dashboard = () => {
    const {populateContacts} = useContext(ClientContext)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            populateContacts()
        }
    }, [])

    return (
        <StyledDashboardMain>
            <SideBar></SideBar>
            <ContactList></ContactList>
        </StyledDashboardMain>
    )
}

export {Dashboard}