import { Slot, Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode="light">
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
          <Slot />
        </SafeAreaView>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
});
