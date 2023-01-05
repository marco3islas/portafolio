import {Injectable} from '@angular/core';



@Injectable()
export class PortafolioService{

  private portafolio: Proyecto [ ] = [
    {
      nombre: 'Juanito Travel',
      descripcion: 'Blog para un viajero, donde pueda anotar sus experiencias y compartir sus fotos, el blog puede llevar algo de publicidad para generar ingresos pasivos. Esta pagina web esta hecha con HTML5, CSS3, JavaScript, Jquery, BootStrap',
      img: 'assets/img/blogViajero.png',
      direccion: 'https://blogdel-viajero.netlify.app/index.html',
    },
    {
      nombre: 'Festival-Musica',
      descripcion: 'Este es un proyecto para un festival musical. Esta pagina web esta hecha con HTML5, CSS3, JavaScript',
      img: 'assets/img/festival-musica.webp',
      direccion: 'https://rock-djm-festival.netlify.app/',
    },
    {
      nombre: 'Mascotas Exchange',
      descripcion: 'Pagina web que puede servir como blog o tienda hecha con HTML5, CSS3 y JavaScript.',
      img: 'assets/img/mascotas.webp',
      direccion: 'https://mascotaexchange.netlify.app/'
    },
    {
      nombre: 'BUSCANDO CASA',
      descripcion: 'Pagina que podria servir para bienes raices, realizada con HTML5, CSS3 y JavaScript.',
      img: 'assets/img/buscandocasas.png',
      direccion: 'https://buscandocasa.netlify.app/'
    },
    {
      nombre: 'Blog De Cafe',
      descripcion: 'Blog de una amante del cafe hecho con HTML5, CSS3',
      img: 'assets/img/barraCafe.png',
      direccion: 'https://barra-cafe.netlify.app',
    },
     {
      nombre: 'Rento Bicis',
      descripcion: 'Pagina para renta de bicis y venta de souvenirs hecha con HTML5, Jquery, CSS3, JavaScript.',
      img: 'assets/img/bicis.webp',
      direccion: 'https://rentobicis.netlify.app/',
    },
    {
      nombre: 'Mis Heroes',
      descripcion: 'Aplicacion hecha en Angular, con HTML5, CSS3, TypeScript y que se conecta a la base de datos de Marvel Comics.',
      img: 'assets/img/heroesApp.png',
      direccion: 'https://mis-heroes.netlify.app/'
    },
    {
      nombre: 'Tenis Rafaga, tienda en linea',
      descripcion: 'Este esta es una idea para una tienda de Tenis en linea esta pagina esta hecha con HTML5, CSS3, CSS GRID, y JavaScript.',
      img: 'assets/img/tenisRafaga.png',
      direccion: 'https://tenisrafaga.netlify.app/',
    },
    {
      nombre: 'Cafeteria Mi Lugar',
      descripcion: 'El sitio web de Cafeteria mi Lugar es una pagina donde se muestra un ejemplo de un lugar comodo y agradable para pasar el rato con los amigos con un ejemplo de menus y fotos de las personas que frecuentan Mi Lugar hecho con HTML5, CSS3, JavaScript',
      img: 'assets/img/cafeteriaMilugar.png',
      direccion: 'https://cafe-mi-lugar.netlify.app/#/about',
    },
    {
      nombre: 'Blog de Viajes',
      descripcion: 'Blog de viajes: Otro ejemplo de como quedaria una pagina web para una agencia de viajes, hecha con:  HTML5, CSS3, JavaScript, Jquery',
      img: 'assets/img/blogViajes.png',
      direccion: 'https://blogde-viajes.netlify.app/',
    },
    {
      nombre: 'Ahorcado',
      descripcion: 'El tipico juego del Ahorcado, hecho en React',
      img: 'assets/img/ahorcado2.png',
      direccion: 'https://ahorcado-marco3islas.netlify.app/',
    },
    {
      nombre: 'Mi bateria',
      descripcion: 'App que emula una bateria, hecha HTML, CSS# y JavaScript',
      img: 'assets/img/mi-bateria.png',
      direccion: 'https://mibateria.netlify.app/',
    },
    {
      nombre: 'Simonazo',
      descripcion: 'Juego que simula el clasico Simon Dice, hecho con Jquery',
      img: 'assets/img/simonazo.png',
      direccion: 'https://simonazo.netlify.app/',
    },
  ];
  constructor(){
    console.log('Servicio listo para usar!');
  }
  getPortafolio(): Proyecto[]{
    return this.portafolio;
  }
  getPortafolios( idx: string ){
  return this.portafolio[idx];
}
buscarTermino( termino: string ):Proyecto[]{

  const portafolioArr: Proyecto [] = [];

  termino = termino.toLowerCase();

  for (const portafolio of this.portafolio){
    const descripcion = portafolio.descripcion.toLowerCase();

    if (descripcion.indexOf( termino ) >= 0 ){
      portafolioArr.push( portafolio );
    }
  }
  return portafolioArr;

}
}


export interface Proyecto{
    id?: string;
  nombre: string;
  descripcion: string;
  img: string;
  direccion: string;
}
