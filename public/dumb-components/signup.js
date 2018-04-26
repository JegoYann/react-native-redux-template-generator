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

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>{this.props.labels.title}</Title>
                    </Body>
                    <Right />
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
                    <Button block onPress={this.onSignupPress.bind(this)}>
                        <Text>{this.props.labels.signupButton}</Text>
                    </Button>
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

    onSignupPress() {
        this.props.onSignupPress(this.state.login, this.state.password);
    }
}
