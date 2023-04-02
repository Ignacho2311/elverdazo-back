const account = (req,res)=>{
    res.status(200).json({
        ok:true,
        msg:"Home account"
    })
}

module.exports = {account}