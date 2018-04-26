'use strict';

import React, { Component } from 'react';
import { StatusBar, View } from "react-native";
import {
    Container,
    Content,
    Text,
    Input,
    Item,
    StyleProvider,
    Icon,
    Button,
    getTheme,
    Toast,
    Card,
    CardItem
} from 'native-base';
import { MapView } from 'expo';

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
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    width: '100%',
                    marginTop: 30
                }}>
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
                    <Item regular
                        style={{
                            backgroundColor: 'white',
                            margin: 10,
                            marginLeft: 10
                        }}>
                        <Input
                            onChangeText={this.onInputChange.bind(this)}
                            placeholder={this.props.labels.placeholder || 'address'}
                        />
                    </Item>
                    {
                        this.props.predictions.length === 0 ?
                            null
                            :
                            <Card>
                                {
                                    this.props.predictions.map(result => {
                                        return <CardItem key={result.place_id}>
                                            <Button transparent textStyle={{ color: 'black' }} onPress={() => {
                                                this.onPredictionSelect(result);
                                            }}>
                                                <Text>{result.formatted_address}</Text>
                                            </Button>
                                        </CardItem>;
                                    })
                                }
                            </Card>
                    }
                </View>
            </Container>
        );
    }

    onInputChange(value = this.state.lastQuery) {
        this.props.fetchAddresses(value, this.props.mapKey);
    }
    onPredictionSelect(location) {
        this.props.selectLocation(location);
    }
}
