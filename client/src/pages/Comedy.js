import React, {useContext} from 'react'
import { useAuth } from '../hooks/auth.hook'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  import {AuthContext} from '../context/AuthContext'
  import {Navbar} from '../Navbar'
  import { Header } from '../Header'
  import { Film } from '../Film'

 export const ComedyPage = () => {
  const auth = useContext(AuthContext)
  // const auth = useContext(AuthContext)
  // const message = useMessage()
  
  // const [form, setForm] = useState({
  //   email: '', password: ''
  // })

//   useEffect(() => {
//     message(error)
//     clearError()
//   }, [error, message, clearError])

//   useEffect(() => {
//     window.M.updateTextFields()
//   }, [])

//   const changeHandler = event => {
//     setForm({ ...form, [event.target.name]: event.target.value })
//   }

//   const registerHandler = async () => {
//     try {
//       const data = await request('/api/auth/register', 'POST', {...form})
//       message(data.message)
//     } catch (e) {}
//   }


  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
         
          <Header text = "Комедии"/>
            <ul>
            <hr></hr>
  <Film  text_head = "Огни большого города" ref_video = "https://youtu.be/7vl7F8S4cpQ"
    ref_img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/City_Lights_%281931_theatrical_poster_-_retouched%29.jpg/300px-City_Lights_%281931_theatrical_poster_-_retouched%29.jpg"
  text_desc ="Бродяга влюбляется в красивую слепую девушку, её семья очень бедна, а молодого человека 
  по ошибке принимают за богатого вельможу. Родители позволяют стать бродяге благодетелем для девушки: 
  нужно найти большую сумму денег, чтобы сделать операцию и вернуть зрение его возлюбленной."/>

<Film  text_head = "Джентельмены удачи" ref_video = "https://youtu.be/bJlTZraE2n8"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/1972_dzhentlmeny_udachi.jpg/413px-1972_dzhentlmeny_udachi.jpg"
  text_desc ="Неожиданно для себя самого Трошкин, работающий заведующим детского сада, выясняет, 
  что он копия бандита по кличке «Доцент». Бандит украл золотой шлем Александра Македонского, и 
  чтобы выяснить где он его спрятал, Трошкина внедряют в группировку «Доцента». Однако вскоре он настолько 
  входит в образ, что уже не знает где он сам, а где разыгрываемый персонаж."/>

<Film  text_head = "Форрест Гамп" ref_video = "https://youtu.be/bLvqoHBptjg"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg/341px-%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg"
  text_desc ="В детстве родителям Форреста Гампа говорили, что он слабоумный и не добьётся успеха в жизни. 
  В мальчика никто не верил, кроме матери и подруги, в которую Форрест безумно влюбился. Но судьба 
  распорядилась иначе: Форрест действительно обладал не таким мышлением, как у обычных людей, 
  но именно это помогло ему стать высокоуважаемым человеком, а бескорыстие и доброе сердце позволило 
  совершить поистине героические поступки."/>
            
           </ul>
            </div>
  )
}
