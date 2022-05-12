import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Author } from '../Author'


 export const About = () => {
    const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "О нас"/>
            </div>
            <ul>
<hr></hr>
  <Author  name_author = "Максим" 
    desc_author ="Пирюшов Максим Сергеевич. Студент 3 курса Самарского университета имени С.П.Королёва. Люблю работать в команде
    с ответственными молодыми людьми. Представляю интересы 
    команды разработчиков. По всем вопросам в лс. В будни с 9:30 до 10:00."
    ref_img="https://avatars.mds.yandex.net/get-zen_doc/3502647/pub_602cdb66fbc9d262b9e79071_602ce01c2ca49f5948a08102/scale_1200"
    ref_author="https://vk.com/twsmfu"
    />



<Author  name_author = "Кирилл" 
    desc_author ="Сушко Кирилл Евгеньевич. Студент 3 курса Самарского университета имени С.П.Королёва. Представитель 
    представителей интересов нашей команды, разработчик лени. По всем вопросам можете обращаться в лс, но лучше не надо."
    ref_img="https://adventuretime.cn-fan.tv/characters/1.jpg"
    ref_author="https://vk.com/id559208872"
    />
   
   <Author  name_author = "Александр" 
    desc_author ="Пирюшов Александр Сергеевич. Студент 3 курса Самарского университета имени С.П.Королёва. Младший брат 
    представителя интересов нашей команды - lil star, young bro, junior helper, а также представляю его интересы."
    ref_img="https://i.pinimg.com/originals/78/c3/4f/78c34fb5f7dfd0d4349b3f8deaa1e815.jpg"
    ref_author="https://vk.com/0livka7"
    />

<Author  name_author = "Пётр" 
    desc_author ="Спиркин Пётр Евгеньевич. Студент 3 курса Самарского университета имени С.П.Королёва. Один 
    из представителей команды разработчиков. Ищу лекарство от лени. А также ленюсь искать лекарство от лени.
     По всем вопросам тыкать в лс."
    ref_img="https://cs12.pikabu.ru/post_img/big/2020/05/28/5/1590651517158627680.jpg"
    ref_author="https://vk.com/observanto_la_maldekstra"
    />

<Author  name_author = "Валентина" 
    desc_author ="Улитина Валентина Александровна. Студентка 3 курса Самарского университета имени С.П.Королёва. Одна из участников команды разработчиков.
    Интересуюсь визуальной составляющей приложений и сайтов, так же улучшаю свои навыки в графредакторах. Добро пожаловать в лс :)"
    ref_img="https://i.pinimg.com/originals/46/07/8b/46078bce41a432f2dc1abfa2bc56711f.jpg"
    ref_author="https://vk.com/velllvale"
    />
   

</ul>
            
          </div>
  )
}