import { Schema } from "mongoose";

import { userCollection } from "../../model/user-entities/userData.mjs";

export async function updateUser(data, addressOfUser) {

    return await userCollection.updateOne({ email: data }, { $addToSet: { ownerId: addressOfUser} })
}

export async function updateUserPassword(userEmail, newPassword) {
    const updated = await userCollection.updateOne({ email: userEmail }, { $set: { password: newPassword } })
    console.log(updated)
}