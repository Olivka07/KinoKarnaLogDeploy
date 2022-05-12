import React from 'react'
import {Navbar} from '../Navbar'
import {Header} from '../Header'
import {Film} from '../Film'

 export const BoevikiPage = () => {

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
        
            <Header text = "Боевики"/>
            <ul>
            <hr></hr>
            <Film  text_head = "Джон Уик" ref_video = "https://youtu.be/M7XM597XO94"
    ref_img = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/DpedroI-brasil-full.jpg/225px-DpedroI-brasil-full.jpg"
  text_desc ="Тайная гильдия профессиональных убийц хочет уничтожить Джона Уика, после того как он нарушил кодекс 
  ассасинов. За его голову назначена награда в 14 миллионов долларов. Лучшие убийцы планеты начинают охоту 
  на киллера."/>
            
            <Film  text_head = "Безумный Макс" ref_video = "https://youtu.be/hEJnMQG9ev8"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/0/03/Mad_max_poster.jpg/297px-Mad_max_poster.jpg"
  text_desc ="Безумный Макс сталкивается с группой людей, которые пересекают Пустошь на Военном Грузовике 
  под предводительством Императора Фуриозы. Фильм — отчёт о Дорожной Войне, которая за этим последует. 
  Он основан на Словобургерах Исторического Человека и свидетельствах очевидцев, которым удалось выжить."/>
   
   <Film  text_head = "Драйв" ref_video = "https://youtu.be/KBiOF3y1W0Y"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/1/13/Drive2011Poster.jpg"
  text_desc ="Днём он потрясающий каскадёр, выполняющий сложнейшие трюки на съёмочных площадках, 
  а ночью он ведёт опасную игру. Один не обдуманный поступок - и за его жизнь объявлена награда. 
  Теперь ему остаётся только одно - виртуозно уйти от погони..."/>
         
           </ul>
           
            </div>
            
        
          
  )
}
