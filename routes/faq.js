const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('faq', {
       title: 'Часто задаваемые вопросы',
       isLightMenu: true
    })
 })

module.exports = router;