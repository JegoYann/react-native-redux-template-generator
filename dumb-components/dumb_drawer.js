'use strict';

import React, { Component } from 'react';
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
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
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem
                            button
                            onPress={() => {this.onPress('deliveryFrom');}}
                        >
                            <Text>Home</Text>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem
                            button
                            onPress={() => {this.onPress('myDeliveries');}}
                        >
                            <Text>Deliveries</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

    onPress(screenID){
        this.props.navigateTo(screenID);
    }
}
