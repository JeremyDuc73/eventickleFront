export function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Eventickle</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        {!localStorage.getItem("bearerToken") ?
                            <>
                                <a href="/register" type="button" className="btn btn-primary">S'inscrire</a>
                                <a href="/login" type="button" className="btn btn-primary ms-2">Se connecter</a>
                            </>
                            :
                            <>
                                <a href="/logout" type="button" className="btn btn-primary ms-2">Se déconnecter</a>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}