import React from 'react';
import {Text, Platform, StyleSheet, View} from 'react-native';
import Footer from "./footer";
import Header from "./header";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            items: []
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem() {
        if (!this.state.value) return;
        const newItems = [
            ...this.state.items,
            {
                key: Date.now(),
                text: this.state.value,
                complete: false
            }
        ];

        this.setState({
            items: newItems,
            value: ""
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    value={this.state.value}
                    onAddItem={this.handleAddItem}
                    onChange={(value) => this.setState({value})}
                />
                <View style={styles.content}>

                </View>
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        ...Platform.select({
            ios: {paddingTop: 30}
        })
    },
    content: {
        flex: 1
    },
});