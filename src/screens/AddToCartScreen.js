import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function AddToCartScreen({navigation}) {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>ADD TO CART</Text>
                    <Text style={styles.description}>
                        Quis est velit cillum reprehenderit sit. Consequat proident dolor officia voluptate aute laboris officia. Est ex excepteur velit Lorem occaecat aliquip cupidatat magna laborum officia laborum reprehenderit non duis.
                    </Text>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <Image source={require('../../assets/addtocart.png')} style={styles.image} />
                </View>

                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("PaymentSuccessful")
                    }} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.progressBarContainer}>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("OnlineShopping")}}
                            ><Text style={styles.previousButton}>Previous</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.progressBar}></TouchableOpacity>
                        <TouchableOpacity style={[styles.progressBar, styles.progressBarHover]}></TouchableOpacity>
                        <TouchableOpacity style={styles.progressBar}></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("PaymentSuccessful")}}>
                                <Text style={styles.skipButton}>Skip</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
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
        marginBottom: 15,
    },
    image: {
        width: 320,
        height: 290
    },
    buttonContainer: {
        backgroundColor: "#873756",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 140,
        borderRadius: 25,
        marginTop: 15,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17
    },
    progressBarContainer: {
        flexDirection: "row",
        position: "absolute",
        top: 30,
        alignSelf: "center"
    },
    progressBar: {
        backgroundColor: "#CE98A1",
        height: 9,
        width: 9,
        borderRadius: 40,
        marginHorizontal: 1
    },
    progressBarHover: {
        backgroundColor: "#873756",
        width: 16
    },
    skipButton: {
        position: "absolute",
        left: 110,
        bottom: -5,
        color: "#b8b2bf",
        fontSize: 15
    },
    previousButton: {
        position: "absolute",
        right: 80,
        bottom: -5,
        color: "#b8b2bf",
        fontSize: 15
    }
})

