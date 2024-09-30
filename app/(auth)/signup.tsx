import MyButton from "@/components/Button/Button"
import { Link, router } from "expo-router"
import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"

const signup = () => {
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

  const handleButton = () => {
    if (!username || !email || !passWord) return
    else router.push("/")
  }

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
          Sign up
        </Text>

        <View style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 22.4
              }}
            >
              Username
            </Text>

            <TextInput
              style={{
                backgroundColor: "#1E1E2D",
                padding: 20,
                borderRadius: 8,
                color: "#FFF",
                fontSize: 16
                // fontWeight: "700"
              }}
              placeholder="Enter your user name"
              placeholderTextColor="#7B7B8B"
              value={username}
              onChangeText={setUsername}
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
              placeholder="Enter your email"
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
                fontSize: 16,
                fontWeight: "500"
              }}
              placeholder="Enter your Password"
              placeholderTextColor="#7B7B8B"
              value={passWord}
              onChangeText={setPassword}
            />
          </View>

          <MyButton text="Sign Up" handleButton={handleButton} />
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
          <Text style={{ fontSize: 20, color: "#FFF" }}>
            Already have an account?
          </Text>

          <Link
            style={{ fontSize: 20, fontWeight: "700", color: "#FF8C00" }}
            href={"/(auth)/signin"}
          >
            Login
          </Link>
        </View>
      </View>
    </View>
  )
}

export default signup
