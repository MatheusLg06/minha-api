import { UserModel } from "../model/user.model.js";

export const createUser = async (payload) => {
    const { dateOfBirth, ...rest } = payload

    // fazer validação para a data de nascimento...
    console.log(dateOfBirth);

    const user = await UserModel.create({
        ...rest,
        dateOfBirth
    })

    return user;
}