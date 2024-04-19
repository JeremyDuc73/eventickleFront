export class GlobalConstants{
    public static baseUrl: string = "https://apieventickle.oscadeberranger.com/api"
    public static isLoggedIn :boolean = localStorage.getItem("bearerToken") !== null

}