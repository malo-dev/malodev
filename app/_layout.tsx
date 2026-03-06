import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from '@/app/context/AppContext';

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="login" />
          <Stack.Screen name="kyc" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="ticket" />
          <Stack.Screen name="icecash" />
          <Stack.Screen name="settings" />
          <Stack.Screen name="history" />
          <Stack.Screen name="notifications" />
          <Stack.Screen name="about" />
          <Stack.Screen name="forgot-password" />
          <Stack.Screen name="otp" />
          <Stack.Screen name="reset-password" />
          <Stack.Screen name="signup" />
        </Stack>
      </SafeAreaProvider>
    </AppProvider>
  );
}
