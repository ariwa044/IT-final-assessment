import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { TrustFooter } from '@/components/xend/TrustFooter';
import { XendLogo } from '@/components/xend/XendLogo';
import { XendColors, XendSpace } from '@/constants/xend-theme';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <XendLogo />

        <View style={styles.hero}>
          <Text style={styles.h1}>Welcome to the{'\n'}Future of finance</Text>
          <Text style={styles.sub}>
            To get started create an account, if you already have an account we will log you in
          </Text>
        </View>

        <View style={styles.buttons}>
          <PrimaryButton
            label="Continue with Email"
            onPress={() => router.push('/(auth)/email')}
            variant="navy"
            left={<Ionicons name="mail-outline" size={20} color="#fff" />}
          />
          <PrimaryButton
            label="Continue with Google"
            onPress={() => {}}
            variant="outline"
            left={<Ionicons name="logo-google" size={20} color="#fff" />}
          />
          <PrimaryButton
            label="Continue with Apple"
            onPress={() => {}}
            variant="outline"
            left={<Ionicons name="logo-apple" size={20} color="#fff" />}
          />
        </View>

        <TrustFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: XendColors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: XendSpace.screenX,
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 8,
  },
  hero: {
    gap: 12,
  },
  h1: {
    color: XendColors.text,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  sub: {
    color: XendColors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  buttons: {
    gap: 12,
  },
});
