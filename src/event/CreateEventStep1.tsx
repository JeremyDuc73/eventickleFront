import {useState} from "react";

export default function CreateEventStep1()
{
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [duration, setDuration] = useState("")
    const [date, setDate] = useState(new Date())

    function createEvent()
    {
        const event = {name, description, price, duration, date}
        console.log(event)
    }

    return (
        <>
            <h1>Création d'un événement étape 1</h1>
            <input type="text"
                   placeholder="Nom de l'événement"
                   onChange={(e) => setName(e.target.value)}
                   className="form-control mb-4"
            />
            <textarea style={{resize: "none"}}
                      rows={5}
                      placeholder="Description de l'événement"
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control mb-4"
            />
            <input type="number"
                   placeholder="Prix de l'événement"
                   onChange={(e) => setPrice(e.target.valueAsNumber)}
                   className="form-control mb-4"
            />
            <input type="text"
                   placeholder="Durée de l'événement"
                   onChange={(e) => setDuration(e.target.value)}
                   className="form-control mb-4"
            />
            <div>
                <label htmlFor="meeting-time" className="form-label">Choisir une date et une heure pour votre événement : </label>
                <input
                    type="datetime-local"
                    id="meeting-time"
                    className="form-control mb-4"
                    name="meeting-time"
                    onChange={(e)=> setDate(new Date(e.target.value))}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="formFile" className="form-label">Choisir une image pour votre événement : </label>
                <input className="form-control" type="file" id="formFile"/>
            </div>


            <div>
                <button onClick={createEvent} className="mb-3 btn btn-outline-success">Créer l'événement</button>
            </div>
        </>
    )
}