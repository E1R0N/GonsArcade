import decode from "jwt-decode";

export const state = () => ({
    token: "",
    user: "",
    userRole: "",
    authenticated: false,
});
