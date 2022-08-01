import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            blue_1: string;
            gray_1: string;
            gray_2: string;
            gray_3: string;
            white: string;
            black: string;
            [key: string]: any;
        };
    }
}
