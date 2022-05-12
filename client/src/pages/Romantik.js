import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'

 export const RomantikPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Романы"/>
            </div>
            <ul>
            <hr></hr>
            <Film  text_head = "Титаник" ref_video = "https://youtu.be/kVrqfYjkTdQ"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/1/19/Titanic_%28Official_Film_Poster%29.png"
  text_desc ="В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек 
  выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых 
  людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути 
  считавшегося непотопляемым лайнера."/>
            
            <Film  text_head = "В джазе только девушки" ref_video = "https://youtu.be/rI_lUHOCcbc"
    ref_img = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Some_Like_It_Hot_%281959_poster%29.jpg/292px-Some_Like_It_Hot_%281959_poster%29.jpg"
  text_desc ="Когда чикагские музыканты Джо и Джерри случайно становятся свидетелями бандитской перестрелки, они в 
  срочном порядке смываются на поезде во Флориду, прикинувшись женщинами. Теперь они — Джозефина и Дафна, новенькие и 
  хорошенькие инструменталистки женского джаз-бэнда.
  До поры до времени их маскировка срабатывает. Но вскоре любвеобильная солистка влюбляется в «переодетого» мужчиной 
  Джозефину, престарелый миллионер подкатывает к Дафне, а босс мафии, разгадав тайну маскарада, решает срочно 
  разделаться со свидетелями."/>
   
   <Film  text_head = "Дневник памяти" ref_video = "https://youtu.be/FC6biTjEyZw"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/8/86/Posternotebook.jpg/315px-Posternotebook.jpg"
  text_desc ="Это история отношений юноши и девушки из разных социальных слоев, живших в Южной Каролине. Ной и Элли 
  провели вместе незабываемое лето, пока их не разделили вначале родители, а затем Вторая мировая война.
  После войны все изменилось: Элли обручилась с удачливым бизнесменом, а Ной жил наедине со своими воспоминаниями в старинном доме, 
  который ему удалось отреставрировать. Когда Элли прочла об этом в местной газете, она поняла: ей нужно найти его и решить наконец 
  судьбу их любви..."/>
         
           </ul> 
          </div>
  )
}