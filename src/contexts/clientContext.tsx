import api from "../services/api";
import { createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { useEffect } from "react";

interface iProvider {
    children: ReactNode
}

export interface iClientLogin {
    email: string,
    password: string,
}

export interface iClientRegister {
    full_name: string,
    email: string,
    password: string,
    phone: number,
}

interface iClient extends iClientRegister {
    id: string,
    createdAt: Date | string
}

interface iContact {
    id: string,
    full_name: string,
    email: string,
    phone: number,
    createdAt: Date | string,
    client: iClient
}

export interface iContactEdit {
    full_name?: string,
    email?: string,
    phone?: number,
}

interface iClientContext {
    client: iClient | null,
    setClient: (value: iClient) => void,
    contacts: iContact[],
    setContacts: (value: iContact[]) => void,
    clientLogin(data: iClientLogin): Promise<void>,
    clientRegister(data: iClientRegister): Promise<void>,
    populateContacts: () => void,
    addContact(data: Omit<iClientRegister, "password">): Promise<void>,
    editContact(data: iContactEdit): Promise<void>,
    deleteContact: () => void
}

export const ClientContext = createContext<iClientContext>({} as iClientContext)

export const ClientProvider = ({children}: iProvider) => {
    const [client, setClient] = useState<iClient | null>(null)
    const [contacts, setContacts] = useState([] as iContact[])

    /*
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("@TOKEN");
            const clientId = localStorage.getItem("@CLIENTID");
            if (token) {
              try {
                const request = await api.get(`/clients/${clientId}`, {
                  headers: { Authorization: `Bearer ${token}` },
                });
                setClient(request.data);
                populateContacts()
              } catch (error) {
                localStorage.clear();
              }
            }
          })()
    }, [])*/

    const populateContacts = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get("/clients/contacts", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setContacts(request.data)
        } catch (error) {
            console.log(error)
        }
    }

    const clientLogin = async (data: iClientLogin): Promise<void> => {
        try {
            const request = await api.post("/login", data)
            localStorage.setItem("@TOKEN", request.data.token);
            localStorage.setItem("@CLIENTID", request.data.client.id);
            setClient(request.data.client)
            populateContacts()
        } catch (error) {
            console.log(error)
        }
    }
    
    const clientRegister = async (data: iClientRegister): Promise<void> => {
        try {
            const request = await api.post("/clients", data)
        } catch (error) {
            console.log(error)
        }
    }

    const addContact = async (data: Omit<iClientRegister, "password">): Promise<void> => {
        const token = localStorage.getItem("@TOKEN");
        const clientId = localStorage.getItem("@CLIENTID");
        try {
            const request = await api.post(`/clients/contacts/add/${clientId}`, data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setContacts([
                ...contacts,
                {
                    full_name: request.data.full_name,
                    email: request.data.email,
                    phone: request.data.phone,
                    createdAt: request.data.createdAt,
                    id: request.data.id,
                    client: client!
                }
            ])
        } catch (error) {
            console.log(error)
        }
    }

    const editContact = async (editObj: iContactEdit): Promise<void> => {
        const token = localStorage.getItem("@TOKEN");
        const contactId = localStorage.getItem("@FOCUS_CONTACT_ID")
        try {
            const request = await api.patch(`/clients/contacts/edit/${contactId}`, editObj, {
                headers: {Authorization: `Bearer ${token}`}
            })
            contacts.forEach((con) => {
                if (con.id === contactId) {
                    con.full_name = request.data.full_name
                    con.email = request.data.email
                    con.phone = request.data.phone
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteContact = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN");
        const contactId = localStorage.getItem("@FOCUS_CONTACT_ID")
        try {
            const request = await api.delete(`/clients/contacts/delete/${contactId}`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            const deletedObjArr = contacts.filter((con) => con.id !== contactId)
            setContacts(deletedObjArr)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ClientContext.Provider value={{
            client, setClient, contacts, setContacts, clientLogin, clientRegister, populateContacts, addContact, editContact, deleteContact
        }}>
            {children}
        </ClientContext.Provider>
    )
}

export {}