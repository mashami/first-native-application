import PostVideo from "@/components/PostVideo/PostVideo"
import * as Font from "expo-font"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Svg, { Path } from "react-native-svg"

export default function profile() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Poppins-SemiBold": require("@/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-Medium": require("@/assets/fonts/Poppins/Poppins-Medium.ttf")
      })
      setFontLoaded(true)
    }
    loadFont()
  }, [])

  if (!fontLoaded) {
    return null
  }

  const jsImage = require("@/assets/images/jsImage.png")

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 12,
      flex: 1,
      backgroundColor: "#000"
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

    title: {
      color: "white",
      fontSize: 24,
      marginBottom: 16,
      fontWeight: "400"
    },
    videoItem: {
      position: "relative",
      marginRight: 12,
      width: 200,
      height: 300
    },
    thumbnail: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 16
    },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 16
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#6E6E6E",
      marginHorizontal: 4
    },
    paginationDotActive: {
      backgroundColor: "#FFA500"
    }
  })

  const code1 = require("@/assets/images/code1.jpg")
  const code2 = require("@/assets/images/code2.jpg")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
        <View style={{ paddingHorizontal: 12, paddingBottom: 24 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              alignItems: "flex-end",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
              cursor: "pointer",
              flexDirection: "row"
            }}
            onPress={() => router.push("/signin")}
          >
            <Svg width={34} height={34} viewBox="0 0 24 24" fill="none">
              <Path
                d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                stroke="#FF5B5B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9 12H21M21 12L18 9M21 12L18 15"
                stroke="#FF5B5B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 24
            }}
          >
            <View
              style={{
                gap: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderWidth: 3,
                  borderRadius: 8,
                  borderColor: "#FF9C01",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Image
                  source={jsImage}
                  alt="image"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 20,
                  color: "#fff"
                }}
              >
                Mashami
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 24,
                    letterSpacing: -2,
                    color: "#fff"
                  }}
                >
                  10
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 21,
                    color: "#CDCDE0"
                  }}
                >
                  Posts
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 24,
                    letterSpacing: -2,
                    color: "#fff"
                  }}
                >
                  11.2K
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 21,
                    color: "#CDCDE0"
                  }}
                >
                  Views
                </Text>
              </View>
            </View>
          </View>
        </View>
        <PostVideo
          author="Mashami paccy"
          blogImage={code1}
          profileImage={jsImage}
          title="Businessman Work with Laptop Computer in Office Manager Solving Problem"
        />

        <View style={{ marginBottom: 10 }}>
          <PostVideo
            author="jsmastery"
            blogImage={code2}
            profileImage={jsImage}
            title="Bull trading with computer Bullish in Stock market and"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
