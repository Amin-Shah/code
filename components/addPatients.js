import React, { Component } from 'react'
import { Container, Content, Item, Form, Input, Button, Label, Picker, Icon, Card } from 'native-base';
import DatePicker from 'react-native-datepicker'
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';

class AddPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleDateString(),
            name: '',
            disease: '',
            medison: '',
            cost: '',
            age: '',
            gender: '',
            errors: ''
        }
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitName = this.onSubmitName.bind(this);
        this.onSubmitAge = this.onSubmitAge.bind(this);
        this.onSubmitDisease = this.onSubmitDisease.bind(this);
        this.onSubmitMedison = this.onSubmitMedison.bind(this);
        this.onSubmitCost = this.onSubmitCost.bind(this);

        this.nameRef = this.updateRef.bind(this, 'name');
        this.ageRef = this.updateRef.bind(this, 'age');
        this.diseaseRef = this.updateRef.bind(this, 'disease');
        this.medisonRef = this.updateRef.bind(this, 'medison');
        this.costRef = this.updateRef.bind(this, 'cost');
        
        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    }

    onFocus() {
        let { errors = {} } = this.state;

        for (let name in errors) {
            let ref = this[name];

            if (ref && ref.isFocused()) {
                delete errors[name];
            }
        }
        this.setState({ errors });
    }

    onChangeText(text) {
        ['name', 'age', 'disease', 'medison', 'cost']
            .map((name) => ({ name, ref: this[name] }))
            .forEach(({ name, ref }) => {
                if (ref.isFocused()) {
                    this.setState({ [name]: text });
                }
            });
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        let errors = {};
        if (this.nameRef && this.ageRef && this.diseaseRef && this.medisonRef && this.costRef) {
            ['name', 'age', 'disease', 'medison', 'cost']
                .forEach((name) => {
                    let value = this[name].value();
                    if (!value) {
                        errors[name] = 'Should not be empty';
                    }
                });

            this.setState({ errors });
        }
        let { name, disease, medison, cost, gender, age } = this.state
        if(name && disease && medison && cost && age){
            let obj = {
                name: this.state.name.toLowerCase(),
                disease: this.state.disease,
                medison: this.state.medison,
                cost: this.state.cost,
                gender: this.state.gender,
                age: this.state.age,
                date: this.state.date
            }
            this.props.AddPatient(obj)
        } else {
            alert('Please fill all Fields')
        }
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    onSubmitName() {
        this.age.focus();
    }

    onSubmitAge() {
        this.disease.focus();
    }

    onSubmitDisease() {
        this.medison.focus();
    }

    onSubmitMedison() {
        this.cost.focus();
    }

    onSubmitCost() {
        this.cost.blur();
    }

    handleInput = (evt) => {
        this.setState({ value: evt.target.value });
    }

    onValueChanges(value, string) {
        this.setState({
            gender: value
        });
    }
    render() {
        let { errors = {}, ...data } = this.state;
        return (
            <Image source={require('../assets/images/f.jpg')} style={styles.container}>
                <Container>
                    <Content style={styles.content}>
                        <Card style={styles.container}>
                            <Form onSubmit={this.handleFormInput}>
                                <TextField
                                    ref={this.nameRef}
                                    value={data.name}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitName}
                                    returnKeyType='next'
                                    label='Patient Name'
                                    error={errors.name}
                                    autoFocus={true}
                                    style={styles.input}
                                />
                                <TextField
                                    ref={this.ageRef}
                                    value={data.age}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitAge}
                                    returnKeyType='next'
                                    label='Patient Age'
                                    characterRestriction={2}
                                    maxLength={3}
                                    error={errors.age}
                                    style={styles.input}
                                />
                                <TextField
                                    ref={this.diseaseRef}
                                    value={data.disease}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitDisease}
                                    returnKeyType='next'
                                    label='Disease'
                                    error={errors.disease}
                                    style={styles.input}
                                />
                                <Picker
                                    style={{ marginTop: '7%', width: '100%', color: '#8B9095' }}
                                    mode="dropdown"
                                    selectedValue={this.state.gender}
                                    onValueChange={this.onValueChanges.bind(this)}
                                    onChangeText={(gender) => this.setState({ gender })}>
                                    <Item label="Gender" value="Gender" />
                                    <Item label="male" value="male" />
                                    <Item label="female" value="female" />
                                </Picker>
                                <TextField
                                    ref={this.medisonRef}
                                    value={data.medison}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitMedison}
                                    returnKeyType='next'
                                    label='Provide Medison'
                                    error={errors.medison}
                                    style={styles.input}
                                />
                                <TextField
                                    ref={this.costRef}
                                    value={data.cost}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    onFocus={this.onFocus}
                                    onChangeText={this.onChangeText}
                                    onSubmitEditing={this.onSubmitCost}
                                    returnKeyType='next'
                                    label='Total Cost'
                                    error={errors.cost}
                                    style={styles.input}
                                />
                                <TouchableOpacity>
                                    <Button full type="submit" info style={styles.primaryButton} onPress={this.onSubmit}>
                                        <Text style={styles.primaryButtonText}>Submit</Text>
                                    </Button>
                                </TouchableOpacity >
                            </Form>
                        </Card>
                    </Content>
                </Container>
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        padding: '7%'
    },
    content: {
        width: 310,
        alignSelf: 'center'
    },
    input: {
        fontFamily: 'Arial',
        fontSize: 16
    },
    primaryButton: {
        marginTop: '15%'
    },
    primaryButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    }
})


export default AddPatients