import Guid from "../utils/guidNotForProd";

export default (store) => (next) => (action) => {
    if (action.type === "addTodo") {
        const asyncReturnId = async function apiCallExample() {
            return await new Promise((resolve, reject) => {
                // как пример обращения к api для сохранения
                // обратно получаем id
                setTimeout(() => {
                    resolve(Guid.newGuid());
                }, 100);

            });
        };
        asyncReturnId().then((res)=>{
            next({
                payload: {
                    ...action.payload,
                    id: res.toString()
                },
                type: "addTodo"
            });
        }).catch((reason => {
            // можно выдать ошибку, что не сохранено
        }));

    } else {
        next(action)
    }
}