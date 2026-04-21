import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { XendLogo } from '@/components/xend/XendLogo';
import { XendColors, XendSpace } from '@/constants/xend-theme';

const MENU_ITEMS = [
  { icon: 'person-outline', label: 'Profile' },
  { icon: 'shield-checkmark-outline', label: 'Security' },
  { icon: 'notifications-outline', label: 'Notifications' },
  { icon: 'help-circle-outline', label: 'Help & Support' },
  { icon: 'document-text-outline', label: 'Terms & Privacy' },
  { icon: 'log-out-outline', label: 'Log Out', danger: true },
];

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>More</Text>

        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={32} color={XendColors.primaryBlue} />
          </View>
          <View>
            <Text style={styles.name}>Official</Text>
            <Text style={styles.email}>official2018@gmail.com</Text>
          </View>
        </View>

        <XendLogo compact />

        {/* Menu */}
        <View style={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <Pressable key={item.label} style={styles.menuItem}>
              <Ionicons
                name={item.icon as any}
                size={22}
                color={item.danger ? '#FF3B30' : XendColors.textSecondary}
              />
              <Text style={[styles.menuLabel, item.danger && styles.menuDanger]}>
                {item.label}
              </Text>
              {!item.danger && (
                <Ionicons name="chevron-forward" size={18} color={XendColors.textMuted} style={styles.chevron} />
              )}
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: XendColors.background },
  scroll: { paddingHorizontal: XendSpace.screenX, paddingTop: 16, paddingBottom: 32, gap: 20 },
  title: { color: XendColors.text, fontSize: 24, fontWeight: '700' },
  profileCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: XendColors.card,
    borderRadius: 14, padding: 16,
    borderWidth: 1, borderColor: XendColors.cardBorder,
  },
  avatar: {
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: XendColors.iconBg,
    alignItems: 'center', justifyContent: 'center',
  },
  name: { color: XendColors.text, fontWeight: '700', fontSize: 16 },
  email: { color: XendColors.textSecondary, fontSize: 13, marginTop: 2 },
  menu: {
    backgroundColor: XendColors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: 16, paddingVertical: 16,
    borderBottomWidth: 1, borderBottomColor: XendColors.cardBorder,
  },
  menuLabel: { flex: 1, color: XendColors.text, fontSize: 15 },
  menuDanger: { color: '#FF3B30' },
  chevron: { marginLeft: 'auto' },
});
