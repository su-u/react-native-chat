import * as React from "react";
import {bindActionCreators} from "redux";
import {connect, Dispatch} from "react-redux";
import {StyleSheet, Image, View, Text} from "react-native";

import * as Actions from "../actions/app";
import ChatBox from "./ChatBox";
import MessageList from "./MessageList";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import Button from "../components/Button";
import Input from "../components/Input";
import UserField from "../components/UserField";


interface Props {
    name: string;
    app_actions: any;
}

export class App extends React.Component<Props> {
    render() {
        const {app_actions, name} = this.props;

        let input;
        return (
            <View style={styles.body}>
                <Text>React-native build test</Text>
                {/*<GlobalStyle/>*/}
                <Header/>
                <View style={styles.container}>
                    <UserField>
                        {/*{!name &&*/}
                        {/*<form*/}
                        {/*    onSubmit={(e) => {*/}
                        {/*        e.preventDefault();*/}
                        {/*        if (input) {*/}
                        {/*            app_actions.login(input);*/}
                        {/*            input = '';*/}
                        {/*        } else {*/}
                        {/*            return*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Input onChange={(e) => {*/}
                        {/*        input = e.target.value;*/}
                        {/*    }} placeholder="ユーザー名"/>*/}
                        {/*    <Button type="submit">ログイン</Button>*/}
                        {/*</form>*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    name && <ChatBox/>*/}
                        {/*}*/}
                    </UserField>
                    <MessageList/>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.app.get("login_user_name"),
        text: state.app.get("send_message"),
        message_list: state.app.get("message_list"),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        app_actions: bindActionCreators(Actions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);


const styles = StyleSheet.create({
    body: {
    },
    container: {
        maxWidth: 800,
    }
});
