import React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const TrendingVideos = () => {
  const videos = [
    { id: 1, image: require("@/assets/images/Card.jpg") },
    { id: 2, image: require("@/assets/images/fish.jpg") },
    { id: 3, image: require("@/assets/images/Card3.jpg") },
    { id: 4, image: require("@/assets/images/dog.jpg") },
    { id: 5, image: require("@/assets/images/girl.jpg") },
    { id: 6, image: require("@/assets/images/videoimage.jpg") }
  ]

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
      marginRight: 12
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {videos.map((video) => (
          <View key={video.id} style={styles.videoItem}>
            <Image source={video.image} style={styles.thumbnail} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {videos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === 1 ? styles.paginationDotActive : null
            ]}
          />
        ))}
      </View>
    </View>
  )
}

export default TrendingVideos
