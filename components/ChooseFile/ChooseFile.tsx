import * as DocumentPicker from "expo-document-picker"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { Path } from "react-native-svg"

const ChooseFile = () => {
  const [selectedFile, setSelectedFile] = useState<{
    uri: string
    name: string
  } | null>(null)

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*" // This will allow picking any image file
      })

      if (!result.canceled && result.assets.length > 0) {
        const file = {
          uri: result.assets[0].uri,
          name: result.assets[0].name
        }
        setSelectedFile(file)
        console.log(file.uri, file.name)
      } else {
        console.log("User canceled document picker")
      }
    } catch (err) {
      console.error(err)
    }
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
      alignItems: "center"
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
    },
    thumbnail: {
      width: "100%",
      height: "100%",
      borderRadius: 8
    }
  })

  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.label}>Thumbnail Image</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFilePick}>
        {selectedFile ? (
          <Text style={styles.uploadButtonText}>{selectedFile.name}</Text>
        ) : (
          // <Image
          //   source={{ uri: selectedFile.uri }}
          //   style={styles.thumbnail}
          //   resizeMode="cover"
          // />
          <>
            <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
              <Path
                opacity={0.5}
                d="M18.8333 13.3333V12.5C18.8333 10.1425 18.8333 8.965 18.1008 8.2325C17.3683 7.5 16.19 7.5 13.8333 7.5H7.16663C4.80829 7.5 3.63079 7.5 2.89829 8.23333C2.16663 8.96417 2.16663 10.1417 2.16663 12.4983V13.3333C2.16663 15.69 2.16663 16.8683 2.89913 17.6008C3.63079 18.3333 4.80996 18.3333 7.16663 18.3333H13.8333C16.19 18.3333 17.3691 18.3333 18.1008 17.6008C18.8333 16.8683 18.8333 15.69 18.8333 13.3333Z"
                fill="#FF8D01"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5001 13.125C10.6658 13.125 10.8248 13.0591 10.942 12.9419C11.0592 12.8247 11.1251 12.6658 11.1251 12.5V3.35583L12.5251 4.99C12.6329 5.11597 12.7864 5.19395 12.9517 5.20676C13.1171 5.21958 13.2807 5.16618 13.4067 5.05833C13.5327 4.95048 13.6107 4.79699 13.6235 4.63165C13.6363 4.4663 13.5829 4.30264 13.4751 4.17666L10.9751 1.26C10.9164 1.19138 10.8435 1.1363 10.7615 1.09853C10.6795 1.06076 10.5903 1.0412 10.5001 1.0412C10.4098 1.0412 10.3206 1.06076 10.2386 1.09853C10.1566 1.1363 10.0837 1.19138 10.0251 1.26L7.52506 4.17666C7.47165 4.23904 7.43106 4.31133 7.40559 4.38939C7.38012 4.46746 7.37028 4.54978 7.37663 4.63165C7.38297 4.71352 7.40538 4.79334 7.44257 4.86655C7.47977 4.93976 7.53101 5.00493 7.59339 5.05833C7.65577 5.11173 7.72806 5.15233 7.80612 5.1778C7.88419 5.20327 7.96651 5.21311 8.04838 5.20676C8.13025 5.20042 8.21007 5.17801 8.28328 5.14082C8.35649 5.10362 8.42165 5.05237 8.47506 4.99L9.87506 3.35666V12.5C9.87506 12.845 10.1551 13.125 10.5001 13.125Z"
                fill="#FF8D01"
              />
            </Svg>
            <Text style={styles.uploadButtonText}>Choose a file</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default ChooseFile
