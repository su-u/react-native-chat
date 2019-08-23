import * as React from "react"
import {FormInput} from "react-native";

// const Input = styled.input.attrs({
//     type: 'text',
// })`
//     padding: 0.5rem;
//     border: 1px solid #ddd;
//     border-radius: 2px;
//     color: #000000;
//     font-size: 0.8rem;
//     width: 50%;
// `;

const InputComponent = ({...props}: any) => <FormInput {...props} />;

export default InputComponent;