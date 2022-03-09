import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import db from "../Config";
import { EvilIcons } from "@expo/vector-icons";

export default class App extends React.Component {
  getdata = async () => {
    var r = await db
      .collection("request")
      .where("agentEmail", "==", firebase.auth().currentUser.email)
      .limit(3)
      .get();
    r.docs.map((e) => {
      var temp = this.state.request;
      var d = e.data();
      d.id = e.id;
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
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <LinearGradient
          colors={["#e7a977", "#ebbe9b"]}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <ScrollView>
            <View
              style={{
                marginTop: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: "5%",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Home</Text>
              <TouchableOpacity
                onPress={() => {
                  firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      this.props.navigation.replace("Login");
                    })
                    .catch((error) => {
                      alert("Something went wrong! Try later!");
                    });
                }}
              >
                <MaterialIcons name="logout" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Text
              style={{ marginHorizontal: "5%", marginTop: 30, fontSize: 24 }}
            >
              Best App to get started with your Travelling Business
            </Text>

            <View
              style={{
                width: "90%",
                backgroundColor: "#ccc",
                alignSelf: "center",
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <LinearGradient
                colors={["#fef9e7", "#fef9e7"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  padding: 15,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 16, textAlign: "center" }}>
                  Getting new customers just got easier! Know your customer and
                  make their trips memorable!
                </Text>
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    backgroundColor: "#ebbe9b",
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("RequestScreen");
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    View Requests
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View
              style={{
                marginHorizontal: "5%",
                marginTop: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                Your Requests
              </Text>
              <Text
                style={{ color: "grey", textDecorationLine: "underline" }}
                onPress={() => {
                  this.props.navigation.navigate("RequestScreen");
                }}
              >
                See All
              </Text>
            </View>

            <ScrollView horizontal={true}>
              {this.state.request.length === 0 ? (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "white",
                    flex: 1,
                    marginHorizontal: 15,
                    marginTop: "30%",
                  }}
                >
                  Your Requests Recieved will appear here!
                </Text>
              ) : (
                this.state.request.map((a) => {
                  return (
                    <View
                      key={a.id}
                      style={{
                        marginTop: 20,
                        width: 250,
                        marginHorizontal: 10,
                        borderRadius: 15,
                      }}
                    >
                      <LinearGradient
                        colors={["#f79b73", "#feeacf"]}
                        style={{
                          flex: 1,
                          width: "100%",
                          height: "100%",
                          paddingHorizontal: 10,
                          paddingVertical: 20,
                          borderRadius: 15,
                        }}
                      >
                        <Text
                          style={{
                            color: "black",
                            marginHorizontal: "5%",
                            fontSize: 15,
                            marginTop: 5,
                            fontWeight: "500",
                          }}
                        >
                          Client Email: {a.userEmail}
                        </Text>
                        <Text
                          style={{
                            color: "black",
                            marginTop: 5,
                            marginHorizontal: "5%",
                          }}
                        >
                          Client Budget: {a.budget}
                        </Text>

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                            marginHorizontal: "5%",
                          }}
                        >
                          <EvilIcons name="calendar" size={24} color="black" />
                          <Text>
                            {a.date} - {a.endDate}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: "black",
                            marginTop: 5,
                            marginHorizontal: "5%",
                          }}
                        >
                          Status: {a.status}
                        </Text>
                        <Text
                          style={{
                            color: "black",
                            marginTop: 5,
                            marginHorizontal: "5%",
                          }}
                        >
                          Plan Type: {a.planType}
                        </Text> 
                      </LinearGradient>
                    </View>
                  );
                })
              )}
            </ScrollView>
          </ScrollView>
          <Image
            style={{
              width: "100%",
              height: 200,
              justifyContent: "flex-end",
              resizeMode: "cover",
            }}
            source={require("../assets/img.png")}
          />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
