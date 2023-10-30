import {LitElement,html} from "lit-element";
// importar css 
export class MyElement extends LitElement {
render(){
return html `    
<p> hola a todos </p> `;
}
}
customElements.define('my-element',MyElement)