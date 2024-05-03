import { googleCollection } from "../../model/signin-with-google.mjs";
import { userAddressCollection } from "../../model/userAddress.mjs";
import { userCollection } from "../../model/userData.mjs";

export async function findUser (data){
    return await userCollection.findOne({email:data})
}

export async function findUserUsingId (userId){
    return await userCollection.findById(userId)  
}

export async function findUserAddress(data){
    return await userAddressCollection.findOne({home_address:data})
}

export async function findUserAddressUsingId (addressId){
    return await userAddressCollection.findById(addressId)
}

export async function findUserAddressUsingIdAndPopulate(userId){
    return await userCollection.findById(userId).populate('addresses')
}

export async function findUserAddressUsingPopulate(data) {
    return await userCollection.findOne({email:data}).populate('addresses')
}

export async function findSigninWithGoogleUser (data){
    return await googleCollection.findOne({googleId:data})
}

export async function findUserUsingIdAndPopulateAddress(userId){
    return await userCollection.findById(userId).populate('addresses')
}