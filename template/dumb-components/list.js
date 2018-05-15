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
                    {/* <Left /> */}
                    <Body>
                        <Title>{this.props.labels.title}</Title>
                    </Body>
                    {/* <Right /> */}
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
                    {this.props.items.map(element => {
                        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        return <Card key={index++}>
                            <CardItem>
                                <Body>
                                    <Text style={{fontWeight:'bold'}}>Date:</Text>
                                    <Text>{element.date.toLocaleDateString('fr-FR', options)}</Text>
                                    <Text style={{fontWeight:'bold'}}>From:</Text>
                                    <Text>{element.from}</Text>
                                    <Text style={{fontWeight:'bold'}}>To:</Text>
                                    <Text>{element.to}</Text>
                                    <Text style={{fontWeight:'bold'}}>Price:</Text>
                                    <Text>{element.price}€</Text>
                                    <Text style={{fontWeight:'bold'}}>Description:</Text>
                                    <Text>{element.description}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    })}
                </Content>
            </Container>
        );
    }
}
