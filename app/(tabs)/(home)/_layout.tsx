import { theme } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable
                hitSlop={20}
                style={{
                  backgroundColor: theme.colorWhite,
                  height: 24,
                  width: 24,
                }}
              >
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerTintColor: theme.colorBlack,
        }}
      />
    </Stack>
  );
}
