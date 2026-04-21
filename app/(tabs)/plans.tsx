import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { XendColors, XendSpace } from '@/constants/xend-theme';

const PLANS = [
  { name: 'Flex Save', apy: '12%', desc: 'Withdraw anytime' },
  { name: 'Fixed Save', apy: '18%', desc: 'Lock for 90 days' },
  { name: 'High Yield', apy: '24%', desc: 'Lock for 180 days' },
];

export default function PlansScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Plans</Text>
        <Text style={styles.sub}>Choose a savings plan that works for you</Text>

        {PLANS.map((plan) => (
          <View key={plan.name} style={styles.planCard}>
            <View style={styles.planIcon}>
              <MaterialCommunityIcons name="piggy-bank" size={28} color={XendColors.primaryBlue} />
            </View>
            <View style={styles.planInfo}>
              <Text style={styles.planName}>{plan.name}</Text>
              <Text style={styles.planDesc}>{plan.desc}</Text>
            </View>
            <Text style={styles.planApy}>{plan.apy} APY</Text>
          </View>
        ))}

        <PrimaryButton label="Start Saving" onPress={() => {}} variant="blue" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: XendColors.background },
  container: { flex: 1, paddingHorizontal: XendSpace.screenX, paddingTop: 16, gap: 16 },
  title: { color: XendColors.text, fontSize: 24, fontWeight: '700' },
  sub: { color: XendColors.textSecondary, fontSize: 14 },
  planCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: XendColors.card,
    borderRadius: 14, padding: 16,
    borderWidth: 1, borderColor: XendColors.cardBorder,
  },
  planIcon: {
    width: 50, height: 50, borderRadius: 14,
    backgroundColor: XendColors.backgroundElevated,
    alignItems: 'center', justifyContent: 'center',
  },
  planInfo: { flex: 1 },
  planName: { color: XendColors.text, fontWeight: '700', fontSize: 15 },
  planDesc: { color: XendColors.textSecondary, fontSize: 12, marginTop: 2 },
  planApy: { color: XendColors.greenShield, fontWeight: '700', fontSize: 14 },
});
