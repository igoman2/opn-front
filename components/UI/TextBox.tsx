import styled from "styled-components";

interface ITextBoxProps {
    header: string;
    body: string;
}

const TextBox: React.FC<ITextBoxProps> = (props) => {
    return (
        <Wrapper>
            <div className="key-number-box-fat">
                <div className="key-number-box-header">{props.header}</div>
                <div className="key-number-box-line"></div>
                <div className="key-number-box-body">{props.body}</div>
            </div>
        </Wrapper>
    );
};

export default TextBox;

const Wrapper = styled.div`
    width: 50%;
    display: inline-flex;

    .key-number-box-lean-container {
        margin: 20px 15px 16px 15px;
        display: flex;
    }

    .key-number-box-lean-wrapper {
        width: 33%;
        display: inline-flex;
    }

    .key-number-box-fat {
        box-sizing: border-box;
        width: 100%;
        margin: 3px 6px 3px 6px;
        background: #3955b4;
        border: 0.645524px solid #ededec;
        border-radius: 12.265px;
        display: flex;
        flex-direction: column;
        padding: 8px;
    }

    .key-number-box-lean {
        box-sizing: border-box;
        width: 100%;
        margin: 0px 5px 0px 5px;
        background: #3955b4;
        border: 0.645524px solid #ededec;
        border-radius: 12.265px;
        display: flex;
        flex-direction: column;
        padding: 16px;
    }

    .key-number-box-header {
        font-weight: 400;
        font-size: 14px;
        width: 100%;
        text-align: center;
        color: #ffffff;
    }

    .key-number-box-line {
        width: 9.36px;
        height: 0px;
        align-self: center;
        border: 0.645524px solid #ededec;
        margin: 8px 0px 8px 0px;
    }

    .key-number-box-body {
        font-weight: 700;
        font-size: 16px;
        width: 100%;
        text-align: center;
        color: #ffffff;
    }
`;
