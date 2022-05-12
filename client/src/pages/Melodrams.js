import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'

 export const MelodramsPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Мелодрамы"/>
            </div>
            <ul>
            <hr></hr>
            <Film  text_head = "Любовь и голуби" ref_video = "https://youtu.be/JKb4rUfHJbY"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/f/fb/1984_lyubov_i_golubi.jpg/299px-1984_lyubov_i_golubi.jpg"
  text_desc ="Ликвидируя неисправность лебедки, Василий Кузякин получил травму и путевку на юг. Там он встретил роковую женщину 
  Раису Захаровну и… вернулся Вася с курорта не к себе в деревню, а в дом Раисы Захаровны. Началась для него новая жизнь, 
  в которой было много непонятного и интересного, но не было дома, где остались Надя, дети и голуби."/>
            
            <Film  text_head = "Стажер" ref_video = "https://youtu.be/ZU3Xban0Y6A"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/2/27/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D1%82%D0%B0%D0%B6%D1%91%D1%80%C2%BB_%282015%29.jpg"
  text_desc ="70-летний вдовец Бен Уитакер обнаруживает, что выход на пенсию — еще не конец. Пользуясь случаем, 
  он становится старшим стажером в интернет-магазине модной одежды под руководством Джулс Остин."/>
   
   <Film  text_head = "Амели" ref_video = "https://youtu.be/HUECWi5pX7o"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9b/Amelie_DVD_box.jpg/299px-Amelie_DVD_box.jpg"
  text_desc ="Знаете ли вы, что все события, происходящие в нашем мире, даже самые незначительные, взаимосвязаны 
  самым удивительным и чудесным образом?
  Как полет крошечной мухи может вызвать где-то далеко мощный ураган, так и странные и, на первый взгляд, непонятные 
  поступки тихой и одинокой девушки, живущей в мире своих фантазий, могут навсегда изменить жизнь совершенно разных людей, 
  подарив им счастье и раскрасив окружающий мир яркими красками. Эту девушку зовут Амели Пулен."/>

                <Film  text_head = "В метре друг от друга" ref_video = "https://youtu.be/W-NNGWsc7ho"
                       ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/FIVEFEETAPART_poster.jpg/315px-FIVEFEETAPART_poster.jpg"
                       text_desc ="Пространство, в котором они существуют, диктует жестокое условие – влюбленные должны находиться не ближе метра друг от друга,
                       им недоступно даже прикосновение. Но истинная любовь не знает границ, и чем сильнее чувства, тем больше соблазн нарушить правила"/>
         
           </ul>
          </div>
  )
}