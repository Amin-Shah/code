import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image, View } from 'react-native'
import { Container, Content, Card, Header, Item, Left, Input, Button, CardItem, Icon, Separator, Right, ListItem, List, Body } from 'native-base';


class SearchByName extends Component {
    state = {
        name: ''
    }
    render() {
        this.searchHelper();
        return (
            <Image source={require('../assets/images/back.jpg')} style={styles.container}>
                <Container>
                    <Content>
                        <Header searchBar style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                            <Item>
                                <Input placeholder="Search"
                                    name='name'
                                    ref='name'
                                    value={this.state.value}
                                    onChangeText={(name) => this.setState({ name })}
                                    onSubmitEditing={this.searchDetails}
                                />
                                <Icon name="ios-search" onPress={this.searchDetails} />
                            </Item>
                        </Header>
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
    searchDetails = (e) => {
        e.preventDefault();
        this.props.searchByName(this.state.name)
    }
    searchHelper = () => {
        arr = [];
        const searchName = this.props.Search.searchByName ? this.props.Search.searchByName : [];
        const helper = searchName[0];
        for (var key in helper) {
            arr.push(helper[key])
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        paddingLeft: "7%",
        paddingRight: "7%",
    },
    card: {
        width: 310,
        alignSelf: 'center',
        borderWidth: 30,
        borderColor: '#006D69',
        marginTop: '4%'
    },
    cardItem: {
        marginTop: '3%'
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

export default SearchByName;





