import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "https://auth0.enved.space/",
    realm: "lms",
    clientId: "enved-front",
});

export default keycloak;