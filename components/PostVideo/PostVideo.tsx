import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"

interface PostVideoProps {
  blogImage: any
  title: string
  author: string
  profileImage: any
}

const PostVideo = ({
  blogImage,
  title,
  author,
  profileImage
}: PostVideoProps) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      paddingHorizontal: 25,
      gap: 32,
      paddingTop: 24
    }
  })

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8
          }}
        >
          <View
            style={{
              position: "relative",
              overflow: "hidden",
              width: 46,
              height: 46,
              borderRadius: 4,
              borderWidth: 2,
              backgroundColor: "#fff",
              borderColor: "#FF9C01"
            }}
          >
            <Image
              source={profileImage}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              gap: 2
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                lineHeight: 21,
                color: "#fff"
              }}
            >
              {title.length > 35 ? title.slice(0, 32) + "..." : title}
            </Text>

            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontWeight: "400",
                color: "#CDCDE0"
              }}
            >
              {author}
            </Text>
          </View>
        </View>
        <Svg width={5} height={17} viewBox="0 0 5 17" fill="none">
          <Path
            d="M2.67369 12.6292C3.13014 12.6292 3.56789 12.8105 3.89065 13.1332C4.21341 13.456 4.39474 13.8938 4.39474 14.3502C4.39474 14.8067 4.21341 15.2444 3.89065 15.5672C3.56789 15.8899 3.13014 16.0713 2.67369 16.0713C2.21723 16.0713 1.77948 15.8899 1.45672 15.5672C1.13396 15.2444 0.952633 14.8067 0.952633 14.3502C0.952633 13.8938 1.13396 13.456 1.45672 13.1332C1.77948 12.8105 2.21723 12.6292 2.67369 12.6292ZM2.67369 6.60547C3.13014 6.60547 3.56789 6.78679 3.89065 7.10955C4.21341 7.43231 4.39474 7.87007 4.39474 8.32652C4.39474 8.78297 4.21341 9.22073 3.89065 9.54349C3.56789 9.86625 3.13014 10.0476 2.67369 10.0476C2.21723 10.0476 1.77948 9.86625 1.45672 9.54349C1.13396 9.22073 0.952633 8.78297 0.952633 8.32652C0.952633 7.87007 1.13396 7.43231 1.45672 7.10955C1.77948 6.78679 2.21723 6.60547 2.67369 6.60547ZM2.67369 0.581783C3.13014 0.581783 3.56789 0.763108 3.89065 1.08587C4.21341 1.40863 4.39474 1.84638 4.39474 2.30284C4.39474 2.75929 4.21341 3.19704 3.89065 3.5198C3.56789 3.84256 3.13014 4.02389 2.67369 4.02389C2.21723 4.02389 1.77948 3.84256 1.45672 3.5198C1.13396 3.19704 0.952633 2.75929 0.952633 2.30284C0.952633 1.84638 1.13396 1.40863 1.45672 1.08587C1.77948 0.763108 2.21723 0.581783 2.67369 0.581783Z"
            fill="#CDCDE0"
          />
        </Svg>
      </View>

      <View
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Image
          source={blogImage}
          alt="Blog-Image"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </View>
    </View>
  )
}

export default PostVideo
