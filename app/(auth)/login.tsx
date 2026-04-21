import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { LabeledField } from '@/components/xend/LabeledField';
import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { SupportChatButton } from '@/components/xend/SupportChatButton';
import { TrustFooter } from '@/components/xend/TrustFooter';
import { XendLogo } from '@/components/xend/XendLogo';
import { XendColors, XendSpace } from '@/constants/xend-theme';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <XendLogo compact />
          <SupportChatButton />
        </View>

        <View style={styles.top}>
          <Text style={styles.title}>Welcome, Michael_Arinze</Text>
          <Text style={styles.sub}>Enter your password</Text>
        </View>

        <View style={styles.form}>
          <LabeledField
            label="Your Password"
            placeholder="Password"
            leftIcon="lock-closed-outline"
            secure
          />
          <PrimaryButton
            label="Login"
            onPress={() => router.replace('/(tabs)')}
            variant="blue"
          />
          <Pressable>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.switch}>Not you? Switch account</Text>
          </Pressable>
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
    paddingTop: 16,
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top: {
    gap: 6,
  },
  title: {
    color: XendColors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  sub: {
    color: XendColors.textSecondary,
    fontSize: 15,
  },
  form: {
    gap: 16,
    alignItems: 'center',
  },
  forgot: {
    color: XendColors.primaryBlue,
    fontWeight: '600',
    fontSize: 14,
  },
  switch: {
    color: XendColors.textSecondary,
    fontSize: 14,
  },
});
