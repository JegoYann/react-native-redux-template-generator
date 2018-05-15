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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors.length > 0) {
            nextProps.errors.forEach((error) => {
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
                    <Text>{this.props.labels.help}</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>{this.props.labels.email}</Label>
                            <Input onChangeText={this.onChangeEmail.bind(this)} />
                        </Item>
                    </Form>
                    <Button block onPress={this.onSendPress.bind(this)}>
                        <Text>{this.props.labels.sendButton}</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    onChangeEmail(text) {
        this.setState({
            email: text
        });
    }

    onSendPress() {
        this.props.onSendPress(this.state.email);
    }
}
