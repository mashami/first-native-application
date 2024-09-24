// import * as Font from "expo-font"
import React from "react"
import { Text, TouchableOpacity } from "react-native"

interface MyButtonProps {
  text: string
}

const MyButton = ({ text }: MyButtonProps) => {
  // const [fontLoaded, setFontLoaded] = useState(false)

  // useEffect(() => {
  //   async function loadFont() {
  //     await Font.loadAsync({
  //       "Poppins-SemiBold": require("@/assets/fonts/Poppins/Poppins-SemiBold.ttf")
  //     })
  //     setFontLoaded(true)
  //   }
  //   loadFont()
  // }, [])

  // if (!fontLoaded) {
  //   return null // or a loading indicator
  // }

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FFA300",
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderRadius: 8,
        width: "100%"
      }}
    >
      <Text
        style={{
          // fontFamily: "Poppins-SemiBold",
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
