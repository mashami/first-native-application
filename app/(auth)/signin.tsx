import MyButton from "@/components/Button/Button"
import { Link } from "expo-router"
import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"

const signin = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [passWord, setPassword] = useState("")

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      height: "100%"
    },
    heading: {
      display: "flex",
      flexDirection: "row",
      gap: 8
    },

    imageContainer: {
      width: 30,
      height: 34,
      position: "relative",
      overflow: "hidden"
    },
    image: {
      position: "absolute",
      width: "100%",
      height: "100%"
    }
  })

  const image1 = require("@/assets/images/image1.png")

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.imageContainer}>
          <Image source={image1} style={styles.image} resizeMode="cover" />
        </View>

        <Text style={{ color: "white", fontSize: 34, fontWeight: "600" }}>
          Aora
        </Text>
      </View>

      <View style={{ marginTop: 32, gap: 24 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            lineHeight: 32,
            color: "#fff"
          }}
        >
          Sign in
        </Text>

        <View style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 22.4
              }}
            >
              Email
            </Text>

            <TextInput
              style={{
                backgroundColor: "#1E1E2D",
                padding: 20,
                borderRadius: 8,
                color: "#FFF",
                fontSize: 16
                // fontWeight: "500"
              }}
              placeholder="Enter your user name"
              placeholderTextColor="#7B7B8B"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 22.4
              }}
            >
              Password
            </Text>

            <TextInput
              style={{
                backgroundColor: "#1E1E2D",
                padding: 20,
                borderRadius: 8,
                color: "#FFF",
                fontSize: 16
                // fontWeight: "500"
              }}
              placeholder="Enter your user name"
              placeholderTextColor="#7B7B8B"
              value={passWord}
              onChangeText={setPassword}
            />
          </View>

          <Link
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#CDCDE0",
              lineHeight: 20,
              display: "flex",
              flexDirection: "row",

              alignSelf: "flex-end"
            }}
            href={"/(auth)/signin"}
          >
            Forgot password
          </Link>

          <MyButton text="Sign Up" />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400", color: "#FFF" }}>
            Don’t have an account
          </Text>

          <Link
            style={{ fontSize: 20, fontWeight: "700", color: "#FF8C00" }}
            href={"/(auth)/signup"}
          >
            Signup
          </Link>
        </View>
      </View>
    </View>
  )
}

export default signin
