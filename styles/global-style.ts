import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";
export const GlobalStyle = createGlobalStyle` ${normalize}  
    html {    
        box-sizing: border-box;    
        min-width: 320px;  
        max-width: 900px;
        margin: 0 auto;
        font-size: 62.5%; 
        font-family: "Noto Sans";
        height:100%; 
    } 

    a { 
        cursor: pointer; 
        text-decoration: none; 
        
        #root
        {
            max-width: 900px;
            margin: 0 auto;
        }
    }

    li {
        list-style: none;
    }

    ul {
        margin: 0px;
        padding: 0px;
    }

    input {
        box-sizing:border-box
    }

    body {
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 30px;
        margin-top: 90px;
    }

    button {
        cursor: pointer;
    }

    button:disabled {
        cursor: not-allowed;
    }
`;
