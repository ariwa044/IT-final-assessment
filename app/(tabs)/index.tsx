import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { XendColors, XendSpace } from '@/constants/xend-theme';

const QUICK_ACTIONS = [
  { icon: 'business-outline', label: 'To Bank', badge: 'NEW' },
  { icon: 'arrow-down-outline', label: 'Withdraw' },
  { icon: 'wallet-outline', label: 'Save' },
  { icon: 'trending-up-outline', label: 'Invest' },
  { icon: 'flash-outline', label: 'High Yield' },
  { icon: 'swap-horizontal-outline', label: 'Swap' },
];

const TODO_ITEMS = [
  'Update your profile.',
  'Verify your Phone Number',
  'Complete KYC',
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, @Michael_Arinze</Text>
            <Text style={styles.subtitle}>Start saving now</Text>
          </View>
          <View style={styles.notifBtn}>
            <Ionicons name="notifications-outline" size={22} color={XendColors.text} />
          </View>
        </View>

        {/* Portfolio Balance */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>PORTFOLIO BALANCE</Text>
          <Text style={styles.balanceAmount}>₦ 2,450,120.00</Text>
          <Text style={styles.txLink}>Transaction History {'>'}</Text>

          <View style={styles.savingsRow}>
            <View>
              <Text style={styles.savingsLabel}>Total Savings</Text>
              <Text style={styles.savingsAmount}>₦ 890,000.00</Text>
            </View>
            <View>
              <Text style={styles.savingsLabel}>Plans {'>'}</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>
        <View style={styles.actionsGrid}>
          {QUICK_ACTIONS.map((action) => (
            <View key={action.label} style={styles.actionItem}>
              <View style={styles.actionIcon}>
                <Ionicons name={action.icon as any} size={22} color={XendColors.primaryBlue} />
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
              {action.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{action.badge}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* To Do */}
        <Text style={styles.sectionTitle}>TO DO</Text>
        <View style={styles.todoCard}>
          {TODO_ITEMS.map((item) => (
            <View key={item} style={styles.todoRow}>
              <Ionicons name="ellipse-outline" size={16} color={XendColors.primaryBlue} />
              <Text style={styles.todoText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: XendColors.background },
  scroll: { paddingHorizontal: XendSpace.screenX, paddingTop: 16, paddingBottom: 32, gap: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { color: XendColors.text, fontSize: 20, fontWeight: '700' },
  subtitle: { color: XendColors.textSecondary, fontSize: 13, marginTop: 2 },
  notifBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: XendColors.card,
    alignItems: 'center', justifyContent: 'center',
  },
  card: {
    backgroundColor: XendColors.card,
    borderRadius: 16,
    padding: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },
  cardLabel: { color: XendColors.textMuted, fontSize: 11, fontWeight: '600', letterSpacing: 0.5 },
  balanceAmount: { color: XendColors.text, fontSize: 28, fontWeight: '700' },
  txLink: { color: XendColors.primaryBlue, fontSize: 13 },
  savingsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  savingsLabel: { color: XendColors.textSecondary, fontSize: 12 },
  savingsAmount: { color: XendColors.text, fontSize: 18, fontWeight: '700' },
  sectionTitle: { color: XendColors.textMuted, fontSize: 11, fontWeight: '600', letterSpacing: 0.5 },
  actionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  actionItem: { alignItems: 'center', gap: 6, width: '28%' },
  actionIcon: {
    width: 52, height: 52, borderRadius: 16,
    backgroundColor: XendColors.card,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: XendColors.cardBorder,
  },
  actionLabel: { color: XendColors.text, fontSize: 12, textAlign: 'center' },
  badge: { backgroundColor: XendColors.orange, borderRadius: 4, paddingHorizontal: 5, paddingVertical: 1 },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  todoCard: {
    backgroundColor: XendColors.card,
    borderRadius: 12,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },
  todoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  todoText: { color: XendColors.text, fontSize: 14 },
});
