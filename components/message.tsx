import * as React from "react"
import {StyleSheet, Text, View} from "react-native";


interface Props {
    key: string
    name: string;
    message: string;
    timestamp: string;
}

export default class Message extends React.Component<Props> {
    render() {

        return (
            <View style={styles.messageContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.time}>{this.props.timestamp}</Text>
                </View>
                <Text style={styles.messageTextContainer}>{this.props.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        color: "#4a4a4a",
        display: "block",
        padding: 0.5,
        marginTop: 0.5,
    },
    messageTextContainer: {
        maxWidth: 800,
        marginRight: 0.5,
        marginLeft: 0.5,
    },
    topContainer: {
        flexDirection: 'row',
    },
    name: {
        fontWeight: 600,
        marginRight: 0.5,
        marginLeft: 0.5,
    },
    time: {
        fontSize: 14,
        marginLeft: 1.5,
    },
});
