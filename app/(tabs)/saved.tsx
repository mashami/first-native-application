import PostVideo from "@/components/PostVideo/PostVideo"
import * as Font from "expo-font"
import { useEffect, useState } from "react"
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Svg, { Path } from "react-native-svg"
export default function SavedScreen() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [searchValue, setSearchValue] = useState("")

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

  const image1 = require("@/assets/images/image1.png")

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      paddingVertical: 35
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

  const girlProfile = require("@/assets/images/profilegirl.jpeg")
  const blog1Image = require("@/assets/images/carImage.jpg")
  const blogImage2 = require("@/assets/images/boyWithBooks.jpg")
  const profile2 = require("@/assets/images/profileBoy.jpeg")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 25
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginBottom: 25
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                color: "#fff",
                lineHeight: 32.4,
                fontSize: 24
              }}
            >
              Saved Videos
            </Text>
          </View>
        </View>
        <View
          style={{ position: "relative", paddingHorizontal: 25, marginTop: 12 }}
        >
          <TextInput
            style={{
              backgroundColor: "#1E1E2D",
              padding: 10,
              borderRadius: 8,
              color: "#FFF",
              fontSize: 16,
              paddingRight: 40,
              fontWeight: "500"
            }}
            placeholder="Search your soved videos"
            placeholderTextColor="#7B7B8B"
            value={searchValue}
            onChangeText={setSearchValue}
          />
          <View style={{ position: "absolute", right: 40, top: 16 }}>
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Path
                d="M6.33334 0.0833435C7.49832 0.0832966 8.64012 0.408855 9.6299 1.02328C10.6197 1.6377 11.418 2.51653 11.9349 3.5606C12.4517 4.60466 12.6664 5.77239 12.5548 6.93202C12.4433 8.09164 12.0098 9.197 11.3033 10.1233L15.2558 14.0775C15.4053 14.2275 15.4921 14.4287 15.4985 14.6403C15.505 14.852 15.4307 15.0581 15.2906 15.2169C15.1506 15.3757 14.9554 15.4753 14.7446 15.4953C14.5338 15.5154 14.3233 15.4545 14.1558 15.325L14.0775 15.2558L10.1233 11.3033C9.33417 11.9051 8.41305 12.3103 7.4362 12.4853C6.45935 12.6604 5.45486 12.6003 4.50584 12.3101C3.55681 12.0199 2.69054 11.5078 1.97871 10.8163C1.26688 10.1248 0.729955 9.27372 0.412358 8.3335C0.0947612 7.39328 0.00562692 6.39094 0.15233 5.40944C0.299034 4.42793 0.677358 3.49546 1.256 2.6892C1.83464 1.88294 2.59695 1.22606 3.47987 0.772915C4.36279 0.319773 5.34092 0.0833959 6.33334 0.0833435ZM6.33334 1.75001C5.11776 1.75001 3.95197 2.2329 3.09243 3.09244C2.23289 3.95198 1.75 5.11777 1.75 6.33334C1.75 7.54892 2.23289 8.71471 3.09243 9.57425C3.95197 10.4338 5.11776 10.9167 6.33334 10.9167C7.54891 10.9167 8.7147 10.4338 9.57424 9.57425C10.4338 8.71471 10.9167 7.54892 10.9167 6.33334C10.9167 5.11777 10.4338 3.95198 9.57424 3.09244C8.7147 2.2329 7.54891 1.75001 6.33334 1.75001Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>

        <View style={{ marginBottom: 10, paddingTop: 12, gap: 20 }}>
          <PostVideo
            author="Mashami paccy"
            blogImage={blog1Image}
            profileImage={girlProfile}
            title="Woman walks down a Tokyo..."
          />
          <PostVideo
            author="Mashami paccy"
            blogImage={blogImage2}
            profileImage={profile2}
            title="Woman walks down a Tokyo..."
          />
        </View>

        {/* <View style={{ height: 100, width: "100%" }}></View> */}
      </ScrollView>
    </SafeAreaView>
  )
}
