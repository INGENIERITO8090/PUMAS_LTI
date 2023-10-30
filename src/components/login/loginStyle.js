import  {css} from "lit-element"

export default css`
.form{
    border:2%;
    width:32%;
    height:65vh;
    background-color:white;
    margin-top: 10%;
    margin-left: 35%; 
    border-radius:2%;
    border: 10px;
    border-color: red;
    box-shadow: 4px 5px 7px 1px rgb(0 0 0 / 60%);
    }
    .header_form{
        font-size: 5vh;
        background-color: red;
        color:white;
        margin: 3px , blue;
        border-radius: 2%;
        height: 60px;
        text-align: center;
    }
    
    .input{
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 0.5px solid #FF0000; 
        border-radius: 0px;
        width: 93%;
        height: 50px;
        margin-bottom: 7%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .button{
        background-color: #FF0000;
        border-radius: 12px;
        border: 0px;
        height: 40px;
        width: 40%;
        margin-left:28%;
        margin-top: 9%;
        text-transform: uppercase;
        color: white;
    }
    .link{
    text-align: center;
    margin-left: 25%;
    color: #4C4C4C;
    font-family: RobotoBold;
    }   
`