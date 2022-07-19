import ReactLoading, { LoadingType } from "react-loading";

import styled from "styled-components";
import { theme } from "../styles/theme";

interface ILoaderProps {
    type: LoadingType;
    color: string;
    message: string;
}

const Loader: React.FC<ILoaderProps> = (props) => {
    return (
        <div>
            <LoaderIconWrapper>
                <h2>{props.message}</h2>
                <ReactLoading
                    type={props.type}
                    color={theme.colors[props.color]}
                    height={"80%"}
                    width={"80%"}
                />
            </LoaderIconWrapper>
        </div>
    );
};

export default Loader;

const LoaderIconWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
`;
