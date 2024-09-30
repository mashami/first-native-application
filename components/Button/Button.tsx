// import * as Font from "expo-font"
import React from "react"
import { Text, TouchableOpacity } from "react-native"

interface MyButtonProps {
  text: string
  path?: string
  handleButton?: () => void
}

const MyButton = ({ text, handleButton }: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FFA300",
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 8,
        width: "100%"
      }}
      onPress={handleButton}
    >
      <Text
        style={{
          fontSize: 18,
          lineHeight: 22.4,
          textAlign: "center",
          fontWeight: "700"
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default MyButton
