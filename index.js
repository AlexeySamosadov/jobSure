const express  = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const compression = require('compression');
const mongoose = require('mongoose')
const moment = require('moment');
moment.locale('ru');




// Импорт модели дата:
const Course = require('./models/course')
// Импорт рутов:
const homeRoutes = require('./routes/home');
const resumeRoutes = require('./routes/resume');
const teamRoutes = require('./routes/team');
const pricesRoutes = require('./routes/prices');
const contactsRoutes = require('./routes/contacts');
const privacyPolicyRoutes = require('./routes/privacy-policy');
const faqRoutes = require('./routes/faq');
const articleRoutes = require('./routes/article');
const mailingRoutes = require('./routes/mailing');


const addRoutes = require('./routes/add');
const reservationRoutes = require('./routes/reservation');

const coursesRoutes = require('./routes/courses');

const hbs  = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs',

   helpers: {
      formatDate: function(date) {
         return moment(date).format('DD MMMM YYYY')
      },
      getMonth: function(date) {
         return moment(date).format('MMMM').slice(0,3)
      },
      getDay: function(date) {
         return moment(date).format('DD')
      }
   }

})

app.use(compression({
   level: 9,
   threshold: 10,
   filter: (req, res) => {
      if(req.headers['x-no-compression']) {
         return false
      }
      return compression.filter(req, res)
   }
}))
 
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// Регистрируем статическую папку с файлам css
app.use(express.static('public'))

// Добавляем midleware для обработки POST запросов
app.use(express.urlencoded({extended: true}))

// Регистрируем руты
app.use('/', homeRoutes)
app.use('/resume', resumeRoutes)
app.use('/team', teamRoutes)
app.use('/prices', pricesRoutes)
app.use('/contacts', contactsRoutes)
app.use('/privacy-policy', privacyPolicyRoutes)
app.use('/faq', faqRoutes)
app.use('/add', addRoutes)
app.use('/reservation', reservationRoutes)
app.use('/article', articleRoutes) 
app.use('/mailing', mailingRoutes)

app.use('/courses', coursesRoutes)




const PORT = process.env.PORT || 3000

async function start() {
   try {
     // const url = `mongodb+srv://alexey:1qa2ws3ed@cluster0.thlim.mongodb.net/shop`,
     const url = `mongodb+srv://alexey:1qa2ws3ed@cluster0.thlim.mongodb.net/jobSure?retryWrites=true&w=majority`
     await mongoose.connect(url, {
       useNewUrlParser: true,
      //  useFindAndModify: false,
       useUnifiedTopology: true
     })
 
      app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`)
     })
   } catch (e) {
     console.log(e)
   }
 }
 
 start()