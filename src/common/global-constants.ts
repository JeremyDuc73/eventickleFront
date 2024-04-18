
export class GlobalConstants{


    public static token = localStorage.getItem("bearerToken")
    public static baseUrl: string = "https://localhost:8000/api"
    public static isLoggedIn :boolean = localStorage.getItem("bearerToken") !== null
    public static establishmentId: number
    public static comedianId: number
    public static spectatorId: number
    public static comedyClubId: number
}