const {Router} = require("express")
const router = Router()
const path = require('path')

const region = require('./region')
const login = require('./login')
const categories = require('./categories')
const upload = require('./upload')
const article = require('./article')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
})
router.get('/demo', (req, res) => {
    res.json({
        text: "测试",
        data: "测试数据"
    })
})
router.use(region);
router.use(login);
router.use(categories);
router.use(upload);
router.use('/article', article);

module.exports = router;
