import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { XendColors, XendSpace } from '@/constants/xend-theme';

export default function ReferralScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Referral</Text>

        <View style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name="people" size={48} color={XendColors.primaryBlue} />
          </View>
          <Text style={styles.heading}>Invite Friends & Earn</Text>
          <Text style={styles.sub}>
            Share your referral code with friends and earn rewards when they sign up and make their first transaction.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.codeLabel}>Your Referral Code</Text>
            <Text style={styles.code}>XEND-MCH2026</Text>
          </View>

          <PrimaryButton label="Share Referral Code" onPress={() => {}} variant="blue" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: XendColors.background },
  container: { flex: 1, paddingHorizontal: XendSpace.screenX, paddingTop: 16, gap: 20 },
  title: { color: XendColors.text, fontSize: 24, fontWeight: '700' },
  card: {
    backgroundColor: XendColors.card,
    borderRadius: 16,
    padding: 24,
    gap: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },
  iconWrap: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: XendColors.backgroundElevated,
    alignItems: 'center', justifyContent: 'center',
  },
  heading: { color: XendColors.text, fontSize: 20, fontWeight: '700', textAlign: 'center' },
  sub: { color: XendColors.textSecondary, fontSize: 14, textAlign: 'center', lineHeight: 20 },
  codeBox: {
    backgroundColor: XendColors.backgroundElevated,
    borderRadius: 12, padding: 16,
    alignItems: 'center', width: '100%',
    borderWidth: 1, borderColor: XendColors.cardBorder,
  },
  codeLabel: { color: XendColors.textSecondary, fontSize: 12 },
  code: { color: XendColors.primaryBlue, fontSize: 22, fontWeight: '700', letterSpacing: 1, marginTop: 4 },
});
