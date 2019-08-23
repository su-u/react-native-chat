import * as React from "react";
import styled from 'styled-components';
import {StyleSheet, View} from "react-native";

// const UserField = styled.div`
//     margin: 2rem 0;
// `;

const styles = StyleSheet.create({
    userFiled: {
        marginTop: 2,
        marginBottom: 2,
    }
});

const UserFieldComponent = ({...props}: any) => <View style={styles.userFiled} {...props} />;

export default UserFieldComponent;