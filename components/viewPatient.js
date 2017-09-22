import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, ScrollView, StyleSheet, Image, View } from 'react-native'
import { Container, Content, Card, Header, Item, Input, Button, CardItem, Icon, Right, Left, ListItem, Title, List, Body, Footer, FooterTab, Separator } from 'native-base';


class ViewPatient extends Component {
    state = {
        name: ''
    }
    render() {
        this.viewDetails();
        return (
            <Image source={require('../assets/images/back.jpg')} style={styles.container}>
                <Container>
                    <Content style={{ marginBottom: '-8%' }}>
                        {
                            arr.map((item, i) => {
                                let name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
                                let gender = item.gender.charAt(0).toUpperCase() + item.gender.slice(1);
                                return (
                                    <ScrollView key={i}>
                                        <Card style={styles.card}>
                                            <CardItem style={styles.cardItem}>
                                                <Text style={styles.itemColor}>NAME:</Text>
                                                <Text style={styles.text}>{name}</Text>
                                                <Right style={styles.arrow}>
                                                    <Icon style={styles.iconColor} name="arrow-forward" />
                                                </Right>
                                            </CardItem>
                                            <CardItem style={styles.cardItem}>
                                                <Text style={styles.itemColor}>GENDER:</Text>
                                                <Text style={styles.text}>{gender}</Text>
                                                <Right style={styles.arrow}>
                                                    <Icon style={styles.iconColor} name="arrow-forward" />
                                                </Right>
                                            </CardItem>
                                            <CardItem style={styles.cardItem}>
                                                <Text style={styles.itemColor}>DATE:</Text>
                                                <Text style={styles.text}>{item.date}</Text>
                                                <Right style={styles.arrow}>
                                                    <Icon style={styles.iconColor} name="arrow-forward" />
                                                </Right>
                                            </CardItem>
                                            <CardItem style={styles.cardItem}>
                                                <Text style={styles.itemColor}>DISEASE:</Text>
                                                <Text style={styles.text}>{item.disease}</Text>
                                                <Right style={styles.arrow}>
                                                    <Icon style={styles.iconColor} name="arrow-forward" />
                                                </Right>
                                            </CardItem>
                                            <CardItem style={styles.cardItem}>
                                                <Text style={styles.itemColor}>MEDISON:</Text>
                                                <Text style={styles.text}>{item.medison}</Text>
                                                <Right style={styles.arrow}>
                                                    <Icon style={styles.iconColor} name="arrow-forward" />
                                                </Right>
                                            </CardItem>
                                            <CardItem style={styles.cardItem}>
                                                <View style={{ borderTopColor: 'black', width: '100%', borderTopWidth: 1 }}>
                                                    <Text style={{ marginTop: '5%', color: '#000', fontWeight: 'bold' }}>TOTAL COST:</Text>
                                                    <Text style={styles.text1}>{item.cost} Rs.</Text>
                                                </View>
                                            </CardItem>
                                        </Card>
                                    </ScrollView>
                                )
                            })
                        }
                    </Content>
                </Container>
            </Image>
        )
    }

    viewDetails = () => {
        arr = [];
        const record = this.props.viewPat.viewPatient ? this.props.viewPat.viewPatient : [];
        const data = record[0];
        for (var key in data) {
            arr.push(data[key])
        }
    }
    componentWillMount() {
        this.props.patient()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        padding: "7%"
    },
    card: {
        width: 310,
        alignSelf: 'center',
        borderWidth: 30,
        borderColor: '#006D69'
    },
    cardItem: {
        marginTop: '3%'
    },
    listItems: {
        flex: 1,
        borderLeftWidth: 10,
        marginLeft: '-8%',
        borderLeftColor: '#fff'
    },
    arrow: {
        position: 'absolute',
        left: '100%'
    },
    text: {
        position: 'absolute',
        left: '44%',
        color: '#000'
    },
    text1: {
        left: '82%',
        marginTop: '-7%',
        color: '#000'
    },
    itemColor: {
        color: '#000',
        fontWeight: 'bold'
    },
    iconColor: {
        color: '#000'
    }
})

console.ignoredYellowBox = [
    'Setting a timer'
]

export default ViewPatient;





