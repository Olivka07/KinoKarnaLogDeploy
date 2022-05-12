import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import {Film} from '../Film'

 export const DrammaPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
        
            <Header text = "Драмы"/>
            <ul>
            <hr></hr>
            <Film  text_head = "Виноваты звёзды" ref_video = "https://www.youtube.com/watch?v=AjJL_tkzOWk"
    ref_img = "http://ic.pics.livejournal.com/lit_ino/72956634/3993/3993_900.jpg"
  text_desc ="Хэйзел больна раком. Несмотря на то, что болезнь временно отступила, девушка не чувствует ни капли радости. 
  Она ходит в группу поддержки, где однажды знакомится с Огастусом Уотерсом и моментально влюбляется в него. Огастус и Хэйзел
   отправляются в полное страсти и жизни путешествие, которое лишний раз покажет им, что весь смысл жизни можно найти в любом 
   ее отрезке."/>
            
            <Film  text_head = "Хатико: самый верный друг" ref_video = "https://youtu.be/TIl2o1hm1F4"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/e/e3/%D0%A5%D0%B0%D1%82%D0%B8%D0%BA%D0%BE-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC.jpg"
  text_desc ="В основе сюжета - реальная история, случившаяся в Японии и потрясшая весь мир. Однажды, возвращаясь с работы,
   профессор колледжа нашел на вокзале симпатичного щенка породы акита-ину. Профессор и Хатико стали верными друзьями. 
   Каждый день пес провожал и встречал Профессора на вокзале. И даже потеря хозяина не остановила пса в его надежде,
    что друг вернется."/>
   
   <Film  text_head = "Джокер" ref_video = "https://youtu.be/zAGVQLHvwOY"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6f/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg/304px-%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg"
  text_desc ="Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью,
   которая с детства учит его «ходить с улыбкой». Пытаясь нести в мир хорошее и дарить людям радость,
    Артур сталкивается с человеческой жестокостью и постепенно приходит к выводу,
     что этот мир получит от него не добрую улыбку, а ухмылку злодея Джокера."/>

                <Film  text_head = "Курьер" ref_video = "https://youtu.be/QSc3uk8Q5w4"
                       ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2d/1987_kurier.jpg/360px-1987_kurier.jpg"
                       text_desc ="По одноименной повести К.Шахназарова. Герой фильма – выпускник школы Иван Мирошников. Провалившись на экзаменах в институт,
                       он устраивается работать курьером в журнал «Вопросы познания». Выполняя свое первое поручение, Иван знакомится с Катей – студенткой МГУ,
                       дочерью профессора педагогики. Между ними возникает первое чувство, но способно ли оно изменить Ивана?"/>



           </ul>
           
            </div>
  )
}