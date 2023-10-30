import {LitElement,html} from "lit-element";
 import stylesCss from'./loginStyle' 
export class Login extends LitElement {

 static get styles(){
    return[stylesCss];
} 
render(){
return html ` 

    <div  class="form"> 
   <h3 class="header_form">PUMAS D.C</h3>
    <form action="">
    <input  class="input" type="text" placeholder="Usuario" required>
    <br>
    <input class="input" type="" placeholder="Contraseña" required>
    <br>
    <button  class="button" type="submit">Ingresar</button> 
    <br>
    <a class="link" href="./dashboard/dashboar.html">Desea recuperar su contraseña?</a>
    </form>
    </div>

` ;
}
}
customElements.define('my-login',Login)