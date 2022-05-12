import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'

 export const MusiclesPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Мюзиклы"/>
            </div>
            <ul>
            <hr></hr>
            <Film  text_head = "Чарли и шоколадная фабрика" ref_video = "https://youtu.be/OFVGCUIXJls"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e8/CharlieChocolateFactory.jpg/317px-CharlieChocolateFactory.jpg"
  text_desc ="Какие чудеса ждут вас на фабрике Вилли Вонки? Только представьте: травяные луга из сладкого мятного 
  сахара в Шоколадной Комнате ... Можно проплыть по Шоколадной реке на розовой сахарной лодке ... Или поставить 
  эксперименты в Комнате изобретений с леденцами, которые никогда не тают ... Понаблюдать за дрессированными белками 
  в Ореховой Комнате или отправиться в стеклянном лифте в Телевизионную Комнату. Вы найдете слишком много смешного, 
  чуть таинственного и настолько захватывающего в этом путешествии, что оно станет настолько же приятным и сладким для вас, 
  как восхитительная сладкая палочка с розовой сливочной помадкой от Вилли Вонки."/>
            
            <Film  text_head = "Аладдин" ref_video = "https://youtu.be/foyufD52aog"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/1/19/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%90%D0%BB%D0%B0%D0%B4%D0%B4%D0%B8%D0%BD%C2%BB.jpg"
  text_desc ="Молодой воришка по имени Аладдин хочет стать принцем, чтобы жениться на принцессе Жасмин. Тем временем 
  визирь Аграбы Джафар намеревается захватить власть над Аграбой, а для этого он стремится заполучить волшебную лампу, 
  хранящуюся в пещере чудес, доступ к которой разрешен лишь тому, кого называют «алмаз неограненный», и этим человеком 
  является не кто иной, как сам Аладдин."/>
   
   <Film  text_head = "Отверженные" ref_video = "https://youtu.be/YmvHzCLP6ug"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/d/d9/Les_Miserables_2012_poster.jpg"
  text_desc ="Действие развивается в начале XIX столетия. Беглый каторжник Жан Вальжан, приговоренный к тюремному заключению, 
  вынужден долгие годы скрываться от жестокого правосудия. Инспектор парижской полиции Жавер считает его поимку делом всей 
  своей жизни. После смерти Фантины — женщины, за судьбу которой Жан Вальжан считал себя в ответе, — единственным близким ему 
  человеком остается ее дочь Козетта. Ради счастья девушки Жан готов на все."/>
         
           </ul> 
          </div>
  )
}