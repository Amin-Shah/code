import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, CardItemFooter, CardItem } from 'native-base';
import { Image, TouchableOpacity, StyleSheet, Platform, View, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob'
import * as FirebaseClient from '../database/firebase'

var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Logo',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

class Home extends Component {
    constructor() {
        super()
        this.getImage = this.getImage.bind(this)
        this.state = {
            image_uri: 'https://avatars0.githubusercontent.com/u/12028011?v=3&s=200'
        }
    }
    uploadImage(uri, mime = 'application/octet-stream') {
        return new Promise((resolve, reject) => {
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            let uploadBlob = null
            let currentUser = FirebaseClient.auth.currentUser.uid;
            const imageRef = FirebaseClient.storage.ref(`${currentUser}/`).child('image_001')

            fs.readFile(uploadUri, 'base64')
                .then((data) => {
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                })
                .then(() => {
                    uploadBlob.close()
                    return imageRef.getDownloadURL()
                })
                .then((url) => {
                    resolve(url)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    getImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.uploadImage(response.uri)
                    .then(url => { ToastAndroid.show('Image uploaded Successfully', ToastAndroid.SHORT); this.setState({ image_uri: url }) })
                    .catch(error => console.log(error))
            }
        });
    }
    
    logout() {
        FirebaseClient.auth.signOut().then(function () {
            Actions.login()
        }, function (error) {
            console.log(error)
        });
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#62B1F6' }}>
                    <Left>
                        <Button transparent></Button>
                    </Left>
                    <Title style={styles.title}>Patient Tracker App</Title>
                    <Right>
                        <Button transparent onPress={this.logout.bind(this)}>
                            <Icon name='ios-log-out' />
                        </Button>
                    </Right>
                </Header>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 110, height: 110, borderRadius: 80, marginTop: '3%' }}
                        source={{ uri: this.state.image_uri }}
                    />
                    <Button style={{ height: 26, width: 112, marginTop: '1%', alignSelf: 'center' }} onPress={this.getImage} info>
                        <Text style={{ fontSize: 11 }}>Change Image</Text>
                    </Button>
                </View>
                <Button style={styles.btn} vertical info onPress={() => Actions.viewpatient()} >
                    <Icon name="ios-briefcase" />
                    <Text>Patient Details</Text>
                </Button>
                <Button style={styles.btn1} vertical info onPress={() => Actions.addPatient()}>
                    <Icon active name='md-medkit' />
                    <Text>Add Patient</Text>
                </Button>
                <Button style={styles.btn1} vertical info onPress={() => Actions.searchByName()}>
                    <Icon name="ios-people" />
                    <Text>Search By Name</Text>
                </Button>
                <Button style={styles.btn1} vertical info onPress={() => Actions.searchByDate()}>
                    <Icon name="ios-people" />
                    <Text>Search By Date</Text>
                </Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: '10%'
    },
    btn: {
        marginTop: '20%',
        width: 280,
        alignSelf: 'center'
    },
    btn1: {
        marginTop: '1%',
        width: 280,
        alignSelf: 'center'
    },
    text: {

    }
})


export default Home;