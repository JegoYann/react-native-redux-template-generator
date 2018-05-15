'use strict';

import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    Left,
    Right,
    Body,
    Title,
    Button,
    Header,
    Text,
    Toast
} from 'native-base';

export default class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errors.length > 0) {
            nextProps.errors.forEach((error)=>{
                Toast.show({
                    text: error,
                    position: 'bottom',
                    buttonText: 'Okay'
                });
            });
            this.props.resetErrorStack();
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    {/* <Left /> */}
                    <Body>
                        <Title>{this.props.labels.title}</Title>
                    </Body>
                    {/* <Right /> */}
                </Header>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>{this.props.labels.login}</Label>
                            <Input onChangeText={this.onChangeLogin.bind(this)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>{this.props.labels.password}</Label>
                            <Input onChangeText={this.onChangePassword.bind(this)} />
                        </Item>
                    </Form>
                    <Button block onPress={this.onLoginPress.bind(this)}>
                        <Text>{this.props.labels.loginButton}</Text>
                    </Button>
                    {
                        this.props.flags.hideSignupButton === true ? null :
                            <Button block transparent onPress={this.onRegisterPress.bind(this)}>
                                <Text>{this.props.labels.signupButton}</Text>
                            </Button>
                    }
                    {
                        this.props.flags.hideLostPasswordButton === true ? null :
                            <Button block transparent onPress={this.onLostPasswordPress.bind(this)}>
                                <Text>{this.props.labels.lostPasswordButton}</Text>
                            </Button>
                    }
                </Content>
            </Container>
        );
    }

    onChangeLogin(text) {
        this.setState({
            login: text
        });
    }

    onChangePassword(text) {
        this.setState({
            password: text
        });
    }

    onLoginPress() {
        this.props.onLoginPress(this.state.login, this.state.password);
    }
    onRegisterPress() {
        this.props.onRegisterPress();
    }
    onLostPasswordPress() {
        this.props.onLostPasswordPress();
    }
}
