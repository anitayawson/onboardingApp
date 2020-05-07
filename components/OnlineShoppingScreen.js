import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class OnlineShoppingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>ONLINE SHOPPING</Text>
                    <Text style={styles.description}>
                        Quis est velit cillum reprehenderit sit. Consequat proident dolor officia voluptate aute laboris officia. Est ex excepteur velit Lorem occaecat aliquip cupidatat magna laborum officia laborum reprehenderit non duis.
                    </Text>
                </View>

                <View style={{alignSelf: "center"}}>
                    <Image source={require('../assets/onlineshopping.png')} style={styles.image} />
                </View>

                <View style={{alignSelf: "center"}}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>

                <View>
                <View style={styles.progressBarContainer}>
                    <TouchableOpacity style={[styles.progressBar, styles.progressBarHover]}></TouchableOpacity>
                    <TouchableOpacity style={styles.progressBar}></TouchableOpacity>
                    <TouchableOpacity style={styles.progressBar}></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.skipButton}>Skip</Text></TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        marginHorizontal: 30
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    description: {
        color: "#787878",
        fontSize: 14,
        marginBottom: 25,
    },
    image: {
        width: 270,
        height: 270
    },
    buttonContainer: {
        backgroundColor: "#873756",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 140,
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17
    },
    progressBarContainer: {
        flexDirection: 'row',
        position:'absolute',
        top: 70,
        alignSelf: "center"
    },
    progressBar: {
        backgroundColor: '#CE98A1',
        height: 9,
        width:9,
        borderRadius: 40,
        marginHorizontal: 1
    },
    progressBarHover: {
        backgroundColor: '#873756',
        width: 16
    },
    skipButton:{
        position:'absolute',
        left: 110,
        bottom: -6,
        color: '#b8b2bf',
        fontSize: 15
    }
})

