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
            res.json({
                code: 200,
                msg: '登录成功'
            })
        }

    })
})


module.exports = router;
