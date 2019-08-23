import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

export default class Message extends React.Component {
    render() {
        return (
            <View style={styles.header}><Text style={styles.title}>チャット</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        top: 0,
        flex: 1,
        backgroundColor: "#202124",
        height: 60,
        color: "#FFFFFF",
        flexDirection: 'row',
    },
    title: {
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 30,
        fontWeight: "600",
    },
});