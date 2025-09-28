import Cookies from "js-cookie";
export const LOGINUSER = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                console.log(data);

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};
export const GET_USERDATA = () => {
    return new Promise(
        async (resolve, reject) => {
            try {
                const token = Cookies.get("access_token");
                if (!token) {
                    // OneTapLogin()
                }

                const data = {};
                resolve({ data });
            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};