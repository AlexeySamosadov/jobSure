const {Router} = require('express');
const router = Router();
const Mailing = require('../models/mailing');

const getClientAddress = function (req) {
   var ip = req.ip|| req.headers['x-forwarded-for'] || 
   req.connection.remoteAddress || 
   req.socket.remoteAddress ||
   req.connection.socket.remoteAddress;
   console.log('IP adress_:', ip);

   return ip.split(":").pop();
};

 router.post('/', async (req, res)=>{
   console.log('req.body', req.body)

   const mail = new Mailing({
      messageDate: new Date(),
      email: req.body.email,
      ip: getClientAddress(req),
    })


    
      try {
         if(req.body.email) {
            await mail.save()
            res.render('contacts', {
               title: 'Контакты',
               isLightMenu: true,
               isSuccesMailing: true,
               isErrorMailing: false,
            })
         } else {
            res.render('contacts', {
               title: 'Контакты',
               isLightMenu: true,
               isSuccesMailing: false,
               isErrorMailing: true,
            })
         }

      } catch (e) {
         console.log(e)

         res.render('contacts', {
            title: 'Контакты',
            isLightMenu: true,
            isSuccesMailing: false,
            isErrorMailing: true,
         })
      }
})

module.exports = router;