type AuthRequestType = "login" | "logout";

export type IAuthenticationRequestEndpoints = {
    [key in AuthRequestType]: string;
};
