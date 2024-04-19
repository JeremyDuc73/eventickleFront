export function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={"/" + localStorage.getItem("role") + "/" + localStorage.getItem("roleId") + "/home"}>Eventickle</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        {localStorage.getItem("role") == "comedian" ?
                            <>
                                <a type="button" className="btn btn-primary">Mes réservations</a>
                                <a href={"/comedian/"+localStorage.getItem("roleId")+"/profile"} type="button" className="btn btn-primary ms-2">Mon profil</a>
                            </>
                            : <></>
                        }
                        {localStorage.getItem("role") === "spectator" ?
                            <>
                                <a type="button" className="btn btn-primary">Mes réservations</a>
                                <a type="button" className="btn btn-primary ms-2">Mon profil</a>
                            </>
                            : <></>
                        }
                        {localStorage.getItem("role") == "club" ?
                            <>
                            <a href="/create/event" type="button" className="btn btn-primary">Créer un événement</a>
                            </>
                            : <></>
                        }
                        {localStorage.getItem("role") == "establishment" ?
                            <>
                                <a type="button" className="btn btn-primary">Gestion des disponibilités</a>
                                <a href="/" type="button" className="btn btn-primary ms-2">Gestion des événements</a>
                            </>
                            : <></>
                        }
                        {!localStorage.getItem("bearerToken") ?
                            <>
                            <a href="/register" type="button" className="btn btn-primary">S'inscrire</a>
                                <a href="/login" type="button" className="btn btn-primary ms-2">Se connecter</a>
                            </>
                            :
                            <>
                                <a href="/logout" type="button" className="btn btn-danger ms-2">Se déconnecter</a>
                            </>
                        }

                    </div>
                </div>
            </nav>
        </>
    );
}