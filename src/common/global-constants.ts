
export class GlobalConstants{


    public static token = localStorage.getItem("bearerToken")
    public static baseUrl: string = ""
    public static isLoggedIn :boolean = localStorage.getItem("bearerToken") !== null

}