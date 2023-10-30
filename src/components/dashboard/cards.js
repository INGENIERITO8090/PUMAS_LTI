import {LitElement,html} from "lit-element";
 import stylesCss from'./cardsStyle' 
export class Cards extends LitElement {

 static get styles(){
    return[stylesCss];
} 
render(){
return html ` 
<div class="fondo_cartas"> 
<div class="card">
    <h5 class="title"> TITLE</h5> 
    <div class="logo">
        <img src="/src/img/iconoCategoSecret.png" alt="" class="logo"> 
        <br>
 <button class="button">GESTIONAR<</button>
</div>
</div>


<div class="card">
    <h5 class="title"> GESTION</h5> 
    <div class="logo">
        <img src="/src/img/iconoCategoSecret.png" alt="" class="logo"> 
        <br>
 <button class="button">GESTIONAR<</button>
</div>
</div>

<div class="card">
    <h5 class="title"> GESTION</h5> 
    <div class="logo">
        <img src="/src/img/iconoCategoSecret.png" alt="" class="logo"> 
        <br>
 <button class="button">GESTIONAR<</button>
</div>
</div>
<div class="card">
    <h5 class="title"> GESTION</h5> 
    <div class="logo">
        <img src="/src/img/iconoCategoSecret.png" alt="" class="logo"> 
        <br>
 <button class="button">GESTIONAR<</button>
</div>
</div>
<div class="card">
    <h5 class="title"> GESTION</h5> 
    <div class="logo">
        <img src="/src/img/iconoCategoSecret.png" alt="" class="logo"> 
        <br>
 <button class="button">GESTIONAR<</button>
</div>
</div>
<div class="card">
    <h5 class="title"> GESTION</h5> 
    <div class="logo">
        <img src="/src/img/iconoCategoSecret.png" alt="" class="logo"> 
        <br>
 <button class="button">GESTIONAR<</button>
</div>
</div>

</div>
` ;
}
}
customElements.define('my-cards',Cards)