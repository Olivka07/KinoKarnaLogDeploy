import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'
 export const TrillersPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Триллеры"/>
          </div>


        <ul>
            <hr></hr>
            <Film  text_head = "Бойцовский клуб" ref_video = "https://youtu.be/GbS-kM6jb9w"
                   ref_img = "https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg"
                   text_desc ="Герой тратит своё время на нелюбимой работе и даже толком не может выспаться.
                   Но всё меняется после встречи с торговцем мылом по имени Тайлер Дёрден. Тот убеждает героя, что главная и единственная
                   цель жизни — саморазрушение. Тогда друзья открывают «Бойцовский клуб» — тайное место, куда любой может прийти, чтобы подраться."/>

            <Film  text_head = "Остров проклятых" ref_video = "https://youtu.be/wd6LnQm9HPo"
                   ref_img = "https://upload.wikimedia.org/wikipedia/ru/2/22/Kinopoisk.ru-Shutter-Island-1094940.jpg"
                   text_desc ="Судебные приставы отправляются в психиатрическую лечебницу на закрытый остров.
                   Им предстоит разобраться в обстоятельствах исчезновения пациентки, но, похоже, сам персонал больницы
                   пытается скрыть улики. Вдобавок ко всему на остров обрушивается ураган, который отрезает героев от остального мира."/>

            <Film  text_head = "Престиж" ref_video = "https://youtu.be/sGeWKJyJC9s"
                   ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a0/Prestige10.jpg/307px-Prestige10.jpg"
                   text_desc ="В центре сюжета картины Кристофера Нолана иллюзионисты Альфред Борден и Роберт Энжиер. Когда-то они были друзьями,
                   но конкуренция и любовный треугольник превратили их в злейших врагов. И теперь каждый из них готов не только сорвать выступление соперника,
                   но и подвергнуть опасности жизни его близких."/>

            <Film  text_head = "Шестое чувство" ref_video = "https://youtu.be/Fajc7Hc5uXs"
                   ref_img = "https://upload.wikimedia.org/wikipedia/ru/6/66/The_sixth_sense.jpg"
                   text_desc ="Детский психиатр Малкольм Кроу знакомится с необычным мальчиком Коулом, который видит призраков людей,
                   не осознавших своей смерти. Все считают, что у ребёнка просто галлюцинации, но Кроу понимает: это действительно способ связаться с потусторонним миром."/>
        </ul>
          </div>
  )
}