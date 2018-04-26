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
                    {
                        this.props.items.map((item) => {
                            return <List>
                                <ListItem
                                    button
                                    onPress={() => { this.onPress(item.viewKey); }}
                                >
                                    <Text>{item.label}</Text>
                                </ListItem>
                            </List>

                        })
                    }
                </Content>
            </Container>
        );
    }

    onPress(screenID) {
        this.props.navigateTo(screenID);
    }
}
