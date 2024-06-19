const User=require('../model/Users')
const auth_user=async(req,res)=>{
    let u_name=req.body.u_name
    let u_pwd=req.body.u_pwd
    try{
        let user=await User.findOne({u_name,u_pwd});
        if(user){
            res.json({ 'auth': 'success', 'user': u_name })
        }
        else{
            res.json({ 'auth': 'failed' })
        }

    }
    catch(error){
        console.log('Error in authentication,error')
        res.status(400).json({'auth':'error','message':error.message})
    }
}
const user_inserted = async (req, res) => {
    const user = new User({
        u_serid:req.body.userid,
        u_name:req.body.u_name,
        u_pwd:req.body.upwd,
        u_u_email:req.body.u_email,
        u_addr:req.body.u_addr,
        u_contact:req.body.u_contact
    });
    try {
        const savedUser = await user.save();
        console.log('User inserted');
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
};
const update_user = async (req, res) => {
    let u_serid= req.body.p_id;
    const user = {
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd
    };
    try {
        const updateUser = await User.updateOne({ u_serid }, user);
        if (updateUser.modifiedCount != 0) {
            console.log('User Updated', updateUser);
            res.send({ 'update': 'success' });
        } else {
            console.log('User not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};
const delete_user = async (req, res) => {
    let u_serid = req.body.u_serid;
    try {
        let deletedProduct = await User.deleteOne({ u_serid });
        if (deletedProduct.deletedCount != 0) {
            console.log('User Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('user not deleted');
            res.send({ 'delete': 'Record not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports={
    auth_user,
    user_inserted,
    update_user,
    delete_user
}