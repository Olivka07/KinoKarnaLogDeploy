import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'

 export const SciencePage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Наука"/>
            </div>
            <ul>
            <hr></hr>

            <Film  text_head = "Космос между нами" ref_video = "https://www.youtube.com/watch?v=WaW7hTcGLuM"
    ref_img = "https://ic.pics.livejournal.com/geeklive/22166025/730903/730903_900.jpg"
  text_desc ="Межпланетная история любви земной девушки и Гарднера Эллиота, выросшего в экспериментальной колонии на Марсе. 
  Их роман начался в интернете, и теперь Эллиот летит на Землю, чтобы встретиться с возлюбленной…"/>

            <Film  text_head = "Дальний космос" ref_video = "https://www.youtube.com/watch?v=n-CVWZHoPRM"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/d/d7/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81.jpg"
  text_desc ="Экипаж космического корабля, направляющегося на Марс, обнаруживает на борту случайного пассажира — техника без сознания. 
  Однако миссию остановить уже невозможно, впереди два года пути, а внимательно обследовав повреждённый прибор, команда понимает, 
  что ресурсов до конца полета на всех не хватит."/>

  <Film  text_head = "Проксима" ref_video = "https://www.youtube.com/watch?v=ivnMvgMXpfs"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/2/29/%D0%9F%D1%80%D0%BE%D0%BA%D1%81%D0%B8%D0%BC%D0%B0_%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC_%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg"
  text_desc ="Сара - астронавт, которая проходит подготовку в России для последней экспедиции перед полетом на Марс. 
  Ее партнер по полету Майк помогает ей справиться с запредельными нагрузками и поддерживает эмоционально перед расставанием с 
  дочерью. Старт миссии «Проксима» должен состояться на космодроме Байконур."/>
            
           </ul>
            
          </div>
  )
}