// Redux の更新があったときに React を呼ぶ処理です
// このファイルについては理解できなくて OK です

import * as React from "react";
import {Provider} from "react-redux";
import App from "./containers/App";

import createFinalStore from "./stores";

const store = createFinalStore();

// export default  (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );
export default class reduxApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

