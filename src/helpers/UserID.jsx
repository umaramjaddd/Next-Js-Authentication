import jwt from "jsonwebtoken";

export const UserID = (token) => {
try {

    const ok = jwt.verify(token.value, process.env.Secret_Key);
    console.log(ok);
    return ok.id;
} catch (error) {
    console.log("Token Error: ", error);
    return null;
}
}