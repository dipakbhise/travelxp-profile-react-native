import { StatusBar } from 'expo-status-bar';
import React from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
    return (

        <View>


            <View style={{ backgroundColor: '#e1e7ee', padding: 20, marginTop: 40, marginBottom:20, marginHorizontal: 10, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ backgroundColor: '#1d3554', borderColor: '#D9243D', borderWidth: 3, padding: 15, borderRadius: 30, marginRight: 10, }}>
                        <Text style={{ color: 'white' }}>DB</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ marginBottom: 5 }}>Dipak Bhise</Text>
                            <Text>Personal Account</Text>
                        </View>
                    </View>

                </View>
            </View>



            <View style={{ backgroundColor: '#e1e7ee', padding: 20, marginHorizontal: 10, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={{ backgroundColor: '#1d3554', borderColor: '#D9243D', borderWidth: 3, padding: 15, borderRadius: 30, marginRight: 10, }}>
                        <Text style={{ color: 'white' }}>DB</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ marginBottom: 5 }}>Dipak Bhise</Text>
                            <Text>Personal Account</Text>
                        </View>
                    </View>

                </View>
            </View>



        </View>

    )
}

export default Main