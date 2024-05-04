import { orderCollection } from "../../model/order.mjs";
import { findSingleProduct } from "../products/find.mjs";
import { updateProducts } from "../products/update.mjs";

export async function updateProductStockInOrder (order){
    try {

        for(const item of order[0].items){
            const product = await findSingleProduct(item.productId)
            console.log(product.stock,'product stock',item.quantity,'item and quantity');
            let updatedStock = product.stock - item.quantity
            console.log(updatedStock,'updateStock is ');
            const data = await updateProducts(product._id,{stock:updatedStock})
            console.log(data,'product data is updated');
        }
        
    } catch (error) {
        console.log(error,'update product stock func in order');
    }
}

export async function updateCancelProduct(productId){
    try {
        const data = await orderCollection.updateOne({"items.productId":productId},{$set:{productStatus:'CANCELLED'}})
        console.log(data,'cancelled data is working');
    } catch (error) {
        console.log(error,'update cancel product func error');
    }
}