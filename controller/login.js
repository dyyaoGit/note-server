const {Router} = require("express");
const router = Router();
const user = require('../database/user')

router.post('/login', (req, res) => {
    let {email, password} = req.body;
    user.findOne({email}).then((data) => {

        if (!data) {
            res.json({
                code: 401,
                msg: '该用户名不存在'
            })
        }
        else if (data.password != password) {
            res.json({
                code: 401,
                msg: '密码不正确'
            })
        }
        else if (data.password == password) {
            req.session.user = data;

            console.log(data)

            let userMsg = {
                username: data.username,
                email: data.email
            };

            res.json({
                code: 200,
                data: userMsg,
                msg: '登录成功'
            })
        }

    })
})

router.put('/logOut', (req, res) => {
    res.session.destroy(function (err) {
        if(err){
            console.log(err)
        }
        else {
            res.json({
                code: 200,
                msg: '退出登陆成功'
            })
        }
    })
})


module.exports = router;
