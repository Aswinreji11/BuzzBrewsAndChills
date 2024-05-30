import { findAllCouponForAdmin } from "../../../data/coupon/find.mjs"
import { insertCouponAdmin } from "../../../data/coupon/insert.mjs"


export const admin_couponGet = async (req,res)=>{
    try {
        const limit = 6; 
        let page = Number(req.query.page) || 1; 
            
        const TOTAL_COUNT_OF_USERS = await findTotalCountOfAllUsersForAdmin();
        const totalPages = Math.ceil(TOTAL_COUNT_OF_USERS / limit);
        console.log(TOTAL_COUNT_OF_USERS,'total count is showing');
        page = Math.max(1, Math.min(page, totalPages));
    
        const skip = (page - 1) * limit;

        const userList = await findAllUser(skip,limit)
        console.log(userList)
        res.render('usersList', {userList, page,totalPages, count: TOTAL_COUNT_OF_USERS})
        const coupon = await findAllCouponForAdmin()
        res.render('coupon',{coupon,message:'some error occured'})
    } catch (error) {
        console.log(error,'admin coupon get error ');
    }
   
}

export const admin_couponPost = async (req,res)=>{
    try {
        const couponData = {
            name : req.body.name,
            discount:req.body.discount,
            description:req.body.description,
            minimum_cart_price:req.body.minimum_cart_price,
            starting_date:new Date(),
            ending_date:new Date() + 10 
        }
        console.log(couponData,'coupon data is showing');
        console.log(typeof couponData.discount);    
            console.log(typeof couponData.minimum_cart_price,'hhhhhhadsofikh');

        const data = await insertCouponAdmin(couponData)
        console.log(data,'coupon data is shwoing of ');
        res.redirect('/admin/coupon')
    } catch (error) {
        console.log(error,'admin coupon post error');
    }
}