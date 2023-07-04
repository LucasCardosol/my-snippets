import { HomeStyle } from "./style"
import { PlusCircle } from "phosphor-react"
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";
import { CreateFolder } from "../../components/modals/CreateFolder";
import { getFolders, typeListFolder } from "../../axios/services/getFolders";

export function Home() {

    const [modalShow, setModalShow] = useState(false);
    const [listFolder, setListFolder] = useState<typeListFolder[]>([]);

    useEffect(() => {
        getFolders(setListFolder)
    }, [])

    return (
        <HomeStyle>
            <main className="container">
                <div>

                    <button onClick={() => setModalShow(true)}>
                        <PlusCircle size={100} weight='bold' />
                    </button>

                </div>
                
                     

                        {
                            listFolder.map((folder, index) =>
                                <div key={folder._id ? folder._id?.toString() : index}><NavLink to={`/folder/${folder.name}/${folder._id}`}>{folder.name}</NavLink></div>
                            )
                        }
                    
                
            </main>
            <CreateFolder
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </HomeStyle>
    )
}