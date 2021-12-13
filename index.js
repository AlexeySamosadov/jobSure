const express  = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const compression = require('compression');


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


const addRoutes = require('./routes/add');
const reservationRoutes = require('./routes/reservation');

const coursesRoutes = require('./routes/courses');

const hbs  = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'

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

app.use('/courses', coursesRoutes)




const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
   console.log(`Server is running on port ${PORT}`);
})