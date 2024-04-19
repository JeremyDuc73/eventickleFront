export class GlobalConstants{
    public static baseUrl: string = "https://localhost:8000/api"
    public static isLoggedIn :boolean = localStorage.getItem("bearerToken") !== null
}