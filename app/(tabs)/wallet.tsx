import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { XendColors, XendSpace } from '@/constants/xend-theme';

const ASSETS = [
  { symbol: 'N', name: 'CNGN', fullName: 'Compliant Naira', amount: '1,200.00', usd: '$1,200' },
  { symbol: 'T', name: 'USDT', fullName: 'Tether USD', amount: '1,200.00', usd: '$1,200' },
  { symbol: 'U', name: 'USDC', fullName: 'USD Coin', amount: '1,200.00', usd: '$1,200' },
];

const ACTIONS = [
  { icon: 'add-outline', label: 'Add Fund' },
  { icon: 'arrow-down-outline', label: 'Withdraw' },
  { icon: 'swap-horizontal-outline', label: 'Swap' },
  { icon: 'document-text-outline', label: 'Statement' },
];

export default function WalletScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Wallets</Text>

        {/* Portfolio summary */}
        <View style={styles.portfolioCard}>
          <Text style={styles.portfolioLabel}>My Asset Portfolio</Text>
          <Text style={styles.portfolioAmount}>$ 12,480.22</Text>

          <View style={styles.actionsRow}>
            {ACTIONS.map((a) => (
              <View key={a.label} style={styles.actionItem}>
                <View style={styles.actionIcon}>
                  <Ionicons name={a.icon as any} size={20} color={XendColors.primaryBlue} />
                </View>
                <Text style={styles.actionLabel}>{a.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Filter tabs */}
        <View style={styles.filterRow}>
          {['Stablecoins', 'Utility', 'Memes'].map((tab, i) => (
            <View key={tab} style={[styles.filterTab, i === 0 && styles.filterTabActive]}>
              <Text style={[styles.filterText, i === 0 && styles.filterTextActive]}>{tab}</Text>
            </View>
          ))}
        </View>

        {/* Asset list */}
        {ASSETS.map((asset) => (
          <View key={asset.name} style={styles.assetRow}>
            <View style={styles.assetIcon}>
              <Text style={styles.assetSymbol}>{asset.symbol}</Text>
            </View>
            <View style={styles.assetInfo}>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetFullName}>{asset.fullName}</Text>
            </View>
            <View style={styles.assetAmounts}>
              <Text style={styles.assetAmount}>{asset.amount}</Text>
              <Text style={styles.assetUsd}>≈ {asset.usd}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: XendColors.background },
  scroll: { paddingHorizontal: XendSpace.screenX, paddingTop: 16, paddingBottom: 32, gap: 20 },
  title: { color: XendColors.text, fontSize: 24, fontWeight: '700' },
  portfolioCard: {
    backgroundColor: XendColors.card,
    borderRadius: 16,
    padding: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },
  portfolioLabel: { color: XendColors.textSecondary, fontSize: 13 },
  portfolioAmount: { color: XendColors.text, fontSize: 28, fontWeight: '700' },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  actionItem: { alignItems: 'center', gap: 6 },
  actionIcon: {
    width: 48, height: 48, borderRadius: 14,
    backgroundColor: XendColors.backgroundElevated,
    alignItems: 'center', justifyContent: 'center',
  },
  actionLabel: { color: XendColors.textSecondary, fontSize: 11 },
  filterRow: { flexDirection: 'row', gap: 8 },
  filterTab: {
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 20, borderWidth: 1, borderColor: XendColors.cardBorder,
  },
  filterTabActive: { backgroundColor: XendColors.primaryBlue, borderColor: XendColors.primaryBlue },
  filterText: { color: XendColors.textSecondary, fontSize: 13 },
  filterTextActive: { color: '#fff', fontWeight: '600' },
  assetRow: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: XendColors.card,
    borderRadius: 12, padding: 14,
    borderWidth: 1, borderColor: XendColors.cardBorder,
  },
  assetIcon: {
    width: 42, height: 42, borderRadius: 21,
    backgroundColor: XendColors.primaryBlue,
    alignItems: 'center', justifyContent: 'center',
  },
  assetSymbol: { color: '#fff', fontWeight: '700', fontSize: 16 },
  assetInfo: { flex: 1 },
  assetName: { color: XendColors.text, fontWeight: '600', fontSize: 15 },
  assetFullName: { color: XendColors.textSecondary, fontSize: 12 },
  assetAmounts: { alignItems: 'flex-end' },
  assetAmount: { color: XendColors.text, fontWeight: '600', fontSize: 15 },
  assetUsd: { color: XendColors.textSecondary, fontSize: 12 },
});
