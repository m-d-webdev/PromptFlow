import API from "@/lib/axios";

export const ADD_INSPIRATION = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const res = await API.post("/inspirations", data)
                resolve(res.data);

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};
export const GET_INSPIRATION = (data) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const res = await API.get("/inspirations", {
                    params: data
                });

                resolve(res.data);

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};

export const LIKE_POST = ({ _id }) => {
    return new Promise(
        async (resolve, reject) => {
            try {

                const res = await API.post("/inspirations/like", { _id });

                resolve(res.data);

            } catch (error) {
                reject({ message: error.message });
            }
        }
    );
};
