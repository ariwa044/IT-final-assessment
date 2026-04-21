import { useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { LabeledField } from '@/components/xend/LabeledField';
import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { TrustFooter } from '@/components/xend/TrustFooter';
import { XendColors, XendSpace } from '@/constants/xend-theme';

export default function EmailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.sub}>Enter your email address</Text>
        </View>

        <View style={styles.form}>
          <LabeledField
            label="Email"
            placeholder="Enter your Email"
            leftIcon="mail-outline"
            keyboardType="email-address"
          />
          <PrimaryButton
            label="Continue"
            onPress={() => router.push('/(auth)/login')}
            variant="blue"
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
    paddingTop: 32,
    paddingBottom: 8,
  },
  top: {
    gap: 6,
  },
  title: {
    color: XendColors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  sub: {
    color: XendColors.textSecondary,
    fontSize: 15,
  },
  form: {
    gap: 16,
  },
});
