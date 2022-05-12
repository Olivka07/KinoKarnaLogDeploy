import React, {useContext, useEffect} from 'react'
//import { useAuth } from '../hooks/auth.hook'
//import {Link} from 'react-router-dom'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  //import {AuthContext} from '../context/AuthContext'
  import {Navbar} from '../Navbar'
  import { Header } from '../Header'
  import { Mainpage } from '../Mainpage'


  

 export const MainPage = () => {
  
  // const auth = useContext(AuthContext)
  // const message = useMessage()
  
  // const [form, setForm] = useState({
  //   email: '', password: ''
  // })

//   useEffect(() => {
//     message(error)
//     clearError()
//   }, [error, message, clearError])



  useEffect(() => {
    window.M.updateTextFields()
  }, [])

//   const changeHandler = event => {
//     setForm({ ...form, [event.target.name]: event.target.value })
//   }

//   const registerHandler = async () => {
//     try {
//       const data = await request('/api/auth/register', 'POST', {...form})
//       message(data.message)
//     } catch (e) {}
//   }

//-----------------------------------------//
/* <textarea id="message">Авторы данного продукта: Пирюшов Максим, Сушко Кирилл, Пирюшов Александр, Спиркин Пётр, Улитина Валентина</textarea>
<button id="speak" onClick={speak}>Озвучить</button> 
              const speak = async(text) =>
                {
                  try
                  {
                    const txtMessage = document.getElementById("message");
                  const message = new SpeechSynthesisUtterance();
                  message.lang = "ru-RU";
                  message.text = txtMessage.value;
                  //message.text = "Авторы данного продукта: Пирюшов Максим, Сушко Кирилл, Пирюшов Александр, Спиркин Пётр, Улитина Валентина";
                  window.speechSynthesis.speak(message);
                  }
                  catch(e){
                    console.log("Ошибочка)) "+e.text);
                  }
                } */


//---------------------------------//
      
            // const btnSpeak = document.getElementById("speak");
            // const txtMessage = document.getElementById("message");
      
            // btnSpeak.addEventListener("click", () => {
            //   alert("ПРИВЕТ");
            //   speak(txtMessage.value);
            // });


  return (
    <div>
          
          
          <Mainpage/>
          <Navbar text = "Click me"/>

          <div style={{padding: '10px 200px 0px'}}>
          
            
            
            </div>
          </div>
    

          
      
  )
}
