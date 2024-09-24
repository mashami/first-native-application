import { Link, useRouter } from "expo-router"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 30
    },

    heading: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      justifyContent: "center"
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
    },

    content: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      // justifyContent: "center",
      // alignItems: "center",
      textAlign: "center"
    }
  })

  const image1 = require("@/assets/images/image1.png")
  const imageCombine = require("@/assets/images/combine_image.png")

  const router = useRouter()

  const handleContinueWithEmail = () => {
    router.push("signup")
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

      <View
        style={{
          height: 298,
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image source={imageCombine} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.content}>
        <Text
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            lineHeight: 36,
            letterSpacing: 1,
            color: "#fff",
            flexWrap: "wrap"
          }}
        >
          Discover Endless Possibilities with{" "}
          <Text
            style={{
              color: "#FF8C00",
              fontSize: 30,
              fontWeight: "600",
              textAlign: "center",
              textDecorationLine: "underline"
            }}
          >
            Aora
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#CDCDE0",
            lineHeight: 22.4
          }}
        >
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap"
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500", color: "#FFF" }}>
            If you do not have an account
          </Text>

          <Link asChild href={"signup"}>
            <Pressable>
              <Text
                style={{ fontSize: 15, fontWeight: "500", color: "#FF8C00" }}
              >
                sign up
              </Text>
            </Pressable>
          </Link>

          <Text style={{ fontSize: 15, fontWeight: "500", color: "#FFF" }}>
            or if you have just
          </Text>

          <Link
            style={{ fontSize: 15, fontWeight: "500", color: "#FF8C00" }}
            href={"/(auth)/signin"}
          >
            sign in
          </Link>
        </View>
      </View>
    </View>
  )
}
