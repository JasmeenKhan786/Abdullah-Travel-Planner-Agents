import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import db from '../Config';
import { Ionicons } from '@expo/vector-icons';

export default class RequestDetails extends Component {
  getData = async () => {
    var r = await db.collection('request').doc(this.state.id).get();
    this.setState({ info: r.data() });
  };
  componentDidMount() {
    this.getData();
  }
  constructor(props) {
    super(props);
    this.state = {
      id: props.route.params.id,
      response: 'None',
      info: '',
    };
  }
  updateData = () => {
    db.collection('request').doc(this.state.id).update({
      agentResponse: this.state.response,
      status:'Responded'
    });
    alert('Response Sent!');
    this.props.navigation.goBack()
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bb.png')}
          style={{ width: '100%', height: '100%' }}>
  

          <ScrollView>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '5%',
                marginTop: '15%',
                backgroundColor: 'rgba(20,20,20,0.5)',
              }}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <View
              style={{
                width: '90%',
                marginTop: '10%',
                padding: 10,
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'rgba(20,20,20,0.5)',
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginHorizontal: '5%',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Your Client's Plan Requirement
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Client Email:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.userEmail}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Your Budget:{' '}
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.budget}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Start Date:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.date}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  End Date:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.endDate}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Plan Type:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.planType}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Food Type:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.foodType}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Number of People:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.np}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Number of kids:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.kids}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Open to Pets:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.pets}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Open to Adventure Sports:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.adventure}
                </Text>
              </View>

              <View
                style={{
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Extra Information:
                </Text>
                <Text style={{ fontSize: 15, color: 'white' }}>
                  {this.state.info.extra}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color:'white' }}>
                  Status:
                </Text>
                <Text style={{ marginLeft: '5%', fontSize: 15, color:'white' }}>
                  {this.state.info.status}
                </Text>
              </View>
              <View
                style={{
                  
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 , color:'white'}}>
                  Previous Response:
                </Text>
                <Text style={{  fontSize: 15, color:'white' }}>
                  {this.state.info.agentResponse}
                </Text>
              </View>
            </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#fef9e7',
            }}>
            <TextInput
              style={{
                width: '90%',
                height: 80,
                paddingLeft: 10,
              }}
              multiline={true}
              numberOfLines={50}
              placeholder="Enter the Customised Plan Here!"
              placeholderTextColor="black"
              onChangeText={(val) => {
                this.setState({ response: val });
              }} 
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#b5794f',
              width: '90%',
              height: 40,
              marginVertical: 30,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              if(this.state.response.length>=20){
                this.updateData();

              }
              else{
                alert('Response should be atleast 20 characters')

              }
            }}>
            <Text style={{ fontSize: 25, color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>

        </ImageBackground>

      </View>
    );
  }
}
