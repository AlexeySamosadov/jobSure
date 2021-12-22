const {Router} = require('express');
const Article = require('../models/article')
const router = Router();

router.get('/', (req, res)=>{
    res.render('team', {
       title: 'Команда',
       isLightMenu: true
    })
 })

 router.post('/', async (req, res)=>{
   console.log('ОТработала', req.body.email)






   try {
      await article.save()
      res.json({
         email: req.body.email,
      })
   } catch (e) {
      console.log(e)
   }
});

module.exports = router;