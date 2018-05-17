import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    onSubmitEditing={this.props.onAddItem}
                    placeholder="What needs to be done?"
                    blurOnSubmit={false}
                    returnKeytype="done"
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 50
    }
});