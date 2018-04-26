'use strict';

import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Header,
    Left,
    Right,
    Title,
    Body,
    CardItem,
    Card,
    StyleProvider,
    getTheme,
    Button,
    Icon
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
        let index = 0;
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>{this.props.labels.title}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <StyleProvider style={{ ...getTheme({ iconFamily: "Entypo" }) }}>
                        <Button transparent
                            onPress={
                                () => {
                                    this.props.navigation.navigate('DrawerToggle');
                                }
                            }>
                            <Icon name='menu' />
                        </Button>
                    </StyleProvider>
                    {this.props.deliveries.map(element => {
                        return <Card key={index++}>
                            <CardItem>
                                <Body>
                                    <Text>Date: {element.date.toString()}</Text>
                                    <Text>From: {element.from.name}</Text>
                                    <Text>To: {element.to.name}</Text>
                                    <Text>Price: {element.price}</Text>
                                    <Text>Description: {element.description}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    })}
                </Content>
            </Container>
        );
    }
}
