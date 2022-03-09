import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import db from '../Config';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import firebase from 'firebase';

export default class Request extends Component {
  getdata = async () => {
    var r = await db
      .collection('request')
      .where('agentEmail', '==', firebase.auth().currentUser.email)
      .get();
    r.docs.map((e) => {
      var temp = this.state.request;
      var d = e.data()
      d.id=e.id
      temp.push(d);
      this.setState({ request: temp });
    });
  };
  componentDidMount() {
    this.getdata();
  }

  constructor(props) {
    super(props);
    this.state = {
      request: [],
    };
  }
  render() {
    if (this.state.request.length === 0) {
      return (
        <View style={{ flex: 1 ,backgroundColor:'#fef9e7'}}>
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "10%",
                  backgroundColor: "rgba(206,141,110,1)",
                  paddingBottom: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                >
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                >
                  Requests
                </Text>
                <Text></Text>
              </View>

              <Text
                style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  alignSelf: "center",
                  textAlign: "center",
                  marginTop: "30%",
                }}
              >
                Your Requests will appear here!
              </Text>
            </ScrollView>
        </View>
      );
    } else {
    
    return (
      <View style={{ flex: 1,backgroundColor:'#fef9e7' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            paddingTop: '10%',
            backgroundColor: 'rgba(206,141,110,1)',
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
            Requests
          </Text>
          <Text></Text>
        </View>
        <ScrollView>
        {this.state.request.map((a) => {
          return (
            <TouchableOpacity 
            key={a.id}
            style={{
              width: '90%',
              backgroundColor: '#ccc',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}
            onPress={()=>{
              this.props.navigation.navigate('RequestDetail',{id:a.id})
            }}
              >
               
                  <LinearGradient
                    colors={['#e7a977', '#ebbe9b']}
                    style={{
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      padding: 15,
                      borderRadius: 10,
                    }}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Plan Type: {a.planType}</Text>
                   
                    <Text style={{backgroundColor:'white', padding:10, borderRadius:10, color:'grey'}}>{a.budget} $</Text>
                    </View>
                    <Text style={{fontSize:16}}>People: {a.np}</Text>
                    <Text style={{fontSize:14,color:"grey",marginTop:5}}>Client: {a.userEmail}</Text>

                    <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <EvilIcons name="calendar" size={24} color="black" />
                    <Text>{a.date} - {a.endDate}</Text>
                    </View>

                  </LinearGradient>
            </TouchableOpacity>
          );
        })}
        </ScrollView>
      </View>
    );
      }
  }
}
