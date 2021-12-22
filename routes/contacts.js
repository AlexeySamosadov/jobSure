const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('contacts', {
       title: 'Контакты',
       isLightMenu: true
    })
 })

 router.post('/', (req, res)=>{
    console.log('ip', req.ip)
   console.log('req', req.body)
   const data = req.body
   res.render('contacts', {
      title: 'Контакты',
      isLightMenu: true
   })
})

module.exports = router;