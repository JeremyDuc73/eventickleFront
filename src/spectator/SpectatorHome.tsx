export default function SpectatorHome()
{
    return (
        <>
            <h1>COUCOU Spectateur</h1>
            <p>{localStorage.getItem("role")}</p>
        </>


    )
}