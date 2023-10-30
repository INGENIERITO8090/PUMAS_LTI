import {LitElement,html} from "lit-element";
 import stylesCss from'./menuStyle' 
export class Menu extends LitElement {

 static get styles(){
    return[stylesCss];
} 
render(){
return html ` 

<div class="fondo_menu"> 
<ul>
    <div class="item"> 
    <li>Inicio</li>
    </div>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp     <a href=" ">Precidencia</a></li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Viceprecidencia</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Secretaria</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Tesoria</li> 
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Revisoria Fiscal</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Lista afiliados</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Lista de jugadores</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Lista de Coachs</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Lista Material</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Lista Asistencia</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Cronograma</li>
    <li><img src="/src/img/iconoBalon.png" alt="">&nbsp Varios</li>
</ul>
</div> 

` ;
}
}
customElements.define('my-menu',Menu)