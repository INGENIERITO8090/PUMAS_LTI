import  {css} from "lit-element"

export default css`
.fondo_cartas{
    width: 70%;
    height: 80%;
    background-color:white;
    display: inline-block;
    margin-left:2%;

    }
    .card{
        margin-left:8%;
        margin-bottom: 7%;
        display: inline-block;
        background-color:white;
        height: 15rem;
        width: 20%;
        box-sizing: border-box;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.527);
        border-radius: 5px;
        }
        .title{
        padding-left: 38%;
        padding-top: 10%;
        }
        .logo{
        padding-left: 17%;
        height: 65%;
        width: 60%;
        }
        .button{
            background-color: #FF0000;
            border-radius: 12px;
            border: none;
            width: 100% !important;
            text-transform: uppercase;
            color: white;
            margin-top: 10%;
            margin-bottom:10%; 
        }     
`