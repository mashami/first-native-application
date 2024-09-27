import React, { useState } from "react"
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native"

const TrendingVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const videos = [
    { id: 1, image: require("@/assets/images/Card.jpg") },
    { id: 2, image: require("@/assets/images/fish.jpg") },
    { id: 3, image: require("@/assets/images/Card3.jpg") },
    { id: 4, image: require("@/assets/images/dog.jpg") },
    { id: 5, image: require("@/assets/images/girl.jpg") },
    { id: 6, image: require("@/assets/images/videoimage.jpg") }
  ]

  const windowWidth = Dimensions.get("window").width
  const imageWidth = 200 // The width of your thumbnail image
  const imageMargin = 12 // Right margin on each image

  const onScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const centerPosition = scrollPosition + windowWidth / 2 // Center of the screen
    const newIndex = Math.round(centerPosition / (imageWidth + imageMargin)) // Calculate index of the image in the center
    setCurrentIndex(newIndex)
  }

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 32,
      marginTop: 16
    },
    title: {
      color: "white",
      fontSize: 16,
      lineHeight: 19.6,
      letterSpacing: 0.2,
      paddingHorizontal: 25
    },
    videoItem: {
      marginRight: 12,
      justifyContent: "center",
      alignItems: "center"
    },
    thumbnail: {
      width: 200,
      height: 300,
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Videos</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16} // Set this for smoother scrolling events
      >
        {videos.map((video, index) => {
          const isCenter = index === currentIndex
          const scale = isCenter ? 1 : 0.8 // Zoom out non-centered images

          return (
            <View key={video.id} style={styles.videoItem}>
              <Animated.Image
                source={video.image}
                style={[styles.thumbnail, { transform: [{ scale }] }]} // Apply scale
              />
            </View>
          )
        })}
      </ScrollView>
      <View style={styles.pagination}>
        {videos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex ? styles.paginationDotActive : null
            ]}
          />
        ))}
      </View>
    </View>
  )
}

export default TrendingVideos
