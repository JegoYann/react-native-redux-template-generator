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
                            <Label>{this.props.labels.price}</Label>
                            <Input keyboardType='numeric' onChangeText={this.onChangePrice.bind(this)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>{this.props.labels.description}</Label>
                            <Input onChangeText={this.onChangeDescription.bind(this)} />
                        </Item>
                    </Form>
                    <Button block onPress={this.onSubmitPress.bind(this)}>
                        <Text>{this.props.labels.button}</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

    onChangePrice(text) {
        this.setState({
            price: text
        });
    }

    onChangeDescription(text) {
        this.setState({
            description: text
        });
    }

    onSubmitPress() {
        this.props.onSubmit({
            price: this.state.price,
            description: this.state.description
        });
    }
}
