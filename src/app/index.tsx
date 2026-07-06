import { AppHeader } from '@/components/AppHeader';
import { NoteSection } from '@/components/NoteSection';
import { Screen } from '@/components/Screen';

export default function HomeScreen() {
  return (
    <Screen>
      <AppHeader />
      <NoteSection />
    </Screen>
  );
}
