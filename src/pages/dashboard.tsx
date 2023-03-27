import SideBar from "../components/sidebar"
import { StyledDashboardMain } from "./styles/dashboard-style"
import ContactList from "../components/contactList"
import { useEffect } from "react"
import { useContext } from "react"
import { ClientContext } from "../contexts/clientContext"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const {populateContacts} = useContext(ClientContext)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            populateContacts()
        } else {
            localStorage.clear()
            navigate("/login")
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