const {Router} = require('express');
const router = Router();
const Message = require('../models/message');


router.get('/', (req, res)=>{
    res.render('contacts', {
       title: 'Контакты',
       isLightMenu: true
    })
 })


  const getClientAddress = function (req) {
   var ip = req.ip|| req.headers['x-forwarded-for'] || 
   req.connection.remoteAddress || 
   req.socket.remoteAddress ||
   req.connection.socket.remoteAddress;
   console.log('IP adress_:', ip);

   return ip.split(":").pop();
   };

 router.post('/', async (req, res)=>{
    const message = new Message({
      messageDate: new Date(),
      name: req.body.name,
      email:req.body.email,
      telephoneNumber: req.body.telephoneNumber,
      text: req.body.message,
      ip: getClientAddress(req),
    })

      try {
         if((req.body.email || req.body.telephoneNumber) && req.body.message ) {
            await message.save()

            res.render('contacts', {
               title: 'Контакты',
               isLightMenu: true,
               mesengerName: req.body.name,
               isSuccesMessage: true,
               isErrorMEssage: false,
            })
         } else {
            res.render('contacts', {
               title: 'Контакты',
               isLightMenu: true,
               mesengerName: req.body.name,
               isSuccesMessage: false,
               isErrorMessage: true,
            })
         }
         
      } catch (e) {
         console.log(e)

         res.render('contacts', {
            title: 'Контакты',
            isLightMenu: true,
            mesengerName: req.body.name,
            isSuccesMessage: false,
            isErrorMessage: true,
         })
      }
})

module.exports = router;