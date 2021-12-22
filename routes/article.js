const {Router} = require('express');
const router = Router();
const Article = require('../models/article');


router.get('/:id', async (req, res)=> {
   const articlesMongoose  = await Article.find()
   const articles = JSON.parse(JSON.stringify(articlesMongoose)).sort((a, b) => b.number - a.number);
   const article = articles.find((art => art.number === req.params.id))
   console.log('articles', articles)

//    const article = new Article({
//       date: new Date('October 22, 2021'),
//       title: 'Настроение на собеседовании',
//       title2: 'Настрой-это важно',   
//       previewText: 'Собеседование — это всегда волнительно. Узнайте, как управлять своими эмоциями перед встречей с работодателем.',
//       text: 'Для многих людей собеседование – это большой стресс, ведь на кону стоит будущее.Если же стрессы следуют один за другим, они постепенно теряют присутствие духа и контроль над своими эмоциями. От того, в каком настроении вы будете, зависит, получите ли вы работу или нет.',
//       listTitle: '10 способов поднять себе настроение перед собеседованием:',
//          listItems: [
//             'Проведите время с друзьями и близкими.',
//             'Поговорите с незнакомцем',
//             'Сделайте репетицию собеседования.',
//             'Прогуляйтесь перед собеседованием.',
//             'Проверьте информацию о работодателе.',
//             'Проработайте собственное резюме и ответы на возможные вопросы.',
//             'Репетируйте перед зеркалом или запишите себя на видео.',
//             'Перед тем, как начать собеседование, сделайте 10 глубоких и медленных вдохов и выдохов.',
//             'Представьте, что вы уже приняты на эту должность.'
//          ],
//          list2Tittle: '',
//          list2items: '',
//          bgImageUrl: 'images/background/bg-event-1.jpg' // 'images/background/bg-2.png', images/background/bg-event-1.jpg {{article.bgImageUrl}}
//          previewImageUrl: 'images/services/1.jpg'
    
// });

//       try {
//          await article.save()
//       } catch (e) {
//          console.log(e)
//       }


    res.render('article', {
       title: article.title,
       isLightMenu: true,
       article,
       articles
    })
 })

module.exports = router;