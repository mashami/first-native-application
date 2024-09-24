import { Video } from "expo-av"
import * as DocumentPicker from "expo-document-picker"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { Path, Rect } from "react-native-svg"

type DocumentPickerSuccessResult = {
  canceled: false
  assets: DocumentPicker.DocumentPickerAsset[]
  output?: FileList
}

const UploadVideo = () => {
  const [selectedVideo, setSelectedVideo] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null)

  const handleVideoSelection = async () => {
    try {
      const result = (await DocumentPicker.getDocumentAsync({
        type: "video/*",
        multiple: false
      })) as DocumentPickerSuccessResult

      if (!result.canceled && result.assets.length > 0) {
        const video = result.assets[0]
        setSelectedVideo(video)
        console.log(
          "Video URI:",
          video.uri,
          "MIME Type:",
          video.mimeType,
          "Name:",
          video.name,
          "Size:",
          video.size
        )
      } else {
        console.log("User canceled video selection or no assets found")
      }
    } catch (err) {
      console.error("Error picking video:", err)
    }
  }

  const handleVideoDelete = () => {
    setSelectedVideo(null)
  }

  const styles = StyleSheet.create({
    label: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 22.4
    },
    uploadContainer: {
      borderWidth: 1,
      borderColor: "#232533",
      backgroundColor: "#1E1E2D",
      borderRadius: 8,
      height: 200,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden" // Ensures that the video or image fills the container without overflow
    },
    selectedVideoText: {
      color: "#FFF",
      marginTop: 10,
      textAlign: "center"
    },
    videoThumbnail: {
      width: "100%",
      height: "100%"
    },
    videoPlayer: {
      width: "100%",
      height: "100%"
    }
  })

  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.label}>Upload Video</Text>
      <TouchableOpacity
        onPress={selectedVideo ? handleVideoDelete : handleVideoSelection}
        style={styles.uploadContainer}
      >
        {selectedVideo ? (
          <Video
            source={{ uri: selectedVideo.uri }}
            style={styles.videoPlayer}
            useNativeControls
            // resizeMode=""
            isLooping
          />
        ) : (
          <Svg width={51} height={51} viewBox="0 0 51 51" fill="none">
            <Rect
              x={1}
              y={1}
              width={49}
              height={49}
              rx={9.5}
              stroke="#FF9001"
              strokeOpacity={0.31}
              strokeDasharray="4 4"
            />
            <Path
              opacity={0.5}
              d="M35.5 29.5V28.5C35.5 25.671 35.5 24.258 34.621 23.379C33.742 22.5 32.328 22.5 29.5 22.5H21.5C18.67 22.5 17.257 22.5 16.378 23.38C15.5 24.257 15.5 25.67 15.5 28.498V29.5C15.5 32.328 15.5 33.742 16.379 34.621C17.257 35.5 18.672 35.5 21.5 35.5H29.5C32.328 35.5 33.743 35.5 34.621 34.621C35.5 33.742 35.5 32.328 35.5 29.5Z"
              fill="#FFA101"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.5 29.25C25.6989 29.25 25.8897 29.171 26.0303 29.0303C26.171 28.8897 26.25 28.6989 26.25 28.5V17.527L27.93 19.488C28.0594 19.6392 28.2436 19.7327 28.442 19.7481C28.6404 19.7635 28.8368 19.6994 28.988 19.57C29.1392 19.4406 29.2327 19.2564 29.2481 19.058C29.2635 18.8596 29.1994 18.6632 29.07 18.512L26.07 15.012C25.9996 14.9297 25.9122 14.8636 25.8138 14.8182C25.7154 14.7729 25.6083 14.7495 25.5 14.7495C25.3917 14.7495 25.2846 14.7729 25.1862 14.8182C25.0878 14.8636 25.0004 14.9297 24.93 15.012L21.93 18.512C21.8659 18.5869 21.8172 18.6736 21.7866 18.7673C21.7561 18.861 21.7443 18.9597 21.7519 19.058C21.7595 19.1562 21.7864 19.252 21.831 19.3399C21.8756 19.4277 21.9371 19.5059 22.012 19.57C22.0869 19.6341 22.1736 19.6828 22.2673 19.7134C22.361 19.7439 22.4597 19.7557 22.558 19.7481C22.6562 19.7405 22.752 19.7136 22.8399 19.669C22.9277 19.6244 23.0059 19.5629 23.07 19.488L24.75 17.528V28.5C24.75 28.914 25.086 29.25 25.5 29.25Z"
              fill="#FFA101"
            />
          </Svg>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default UploadVideo
