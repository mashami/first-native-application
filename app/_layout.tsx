import { useColorScheme } from "@/hooks/useColorScheme"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { StyleSheet } from "react-native"
import "react-native-reanimated"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      paddingTop: 80,
      paddingBottom: 70,
      paddingHorizontal: 25,
      backgroundColor: "#000"
    }
  })

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* <Stack.Screen
          name="index"
          options={{ headerShown: false, contentStyle: styles.container }}
        /> */}
        <Stack.Screen name="+not-found" />

        <Stack.Screen
          name="(auth)/signup"
          options={{ headerShown: false, contentStyle: styles.container }}
        />
        <Stack.Screen
          name="(auth)/signin"
          options={{ headerShown: false, contentStyle: styles.container }}
        />
      </Stack>
    </ThemeProvider>
  )
}
