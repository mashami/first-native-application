import MyButton from "@/components/Button/Button"
import ChooseFile from "@/components/ChooseFile/ChooseFile"
import UploadVideo from "@/components/UploadVideo/UploadVideo"
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"

export default function create() {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 30,
      paddingHorizontal: 25,
      flex: 1,
      backgroundColor: "#000"
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
      lineHeight: 31.9,
      color: "#fff",
      letterSpacing: -1
    },
    label: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 22.4
    },
    input: {
      backgroundColor: "#1E1E2D",
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8,
      color: "#FFF",
      fontSize: 16,
      fontWeight: "500"
    },
    uploadContainer: {
      borderWidth: 1,
      borderColor: "#232533",
      backgroundColor: "#1E1E2D",
      borderRadius: 8,
      height: 200,
      justifyContent: "center",
      alignItems: "center"
    },
    uploadButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#232533",
      backgroundColor: "#1E1E2D",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8
    },
    uploadButtonText: {
      color: "#FFF",
      marginLeft: 10,
      fontSize: 14,
      lineHeight: 14
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
        <View style={{ gap: 32 }}>
          <Text style={styles.title}>Upload Video</Text>

          <View style={{ gap: 20 }}>
            <View style={{ gap: 12 }}>
              <Text style={styles.label}>Video Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Give your video a catchy title..."
                placeholderTextColor="#7B7B8B"
              />
            </View>

            <UploadVideo />

            <ChooseFile />

            <View style={{ gap: 12 }}>
              <Text style={styles.label}>AI Prompt</Text>
              <TextInput
                style={styles.input}
                placeholder="The AI prompt of your video...."
                placeholderTextColor="#7B7B8B"
              />
            </View>
          </View>

          <MyButton text="Submit & Publish" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
