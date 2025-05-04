import React, { useEffect, useState } from 'react';
import { EMOTION_COLORS, getColorByEmotion } from '@/theme';
import { Emotion } from '@/types';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export const InstallPWAButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Only handle the specific event type
      const promptEvent = e as BeforeInstallPromptEvent;
      promptEvent.preventDefault();
      setDeferredPrompt(promptEvent);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      setIsVisible(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    setIsVisible(false);
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log(`User response: ${result.outcome}`);
    setDeferredPrompt(null);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        padding: '12px 20px',
        backgroundColor: getColorByEmotion(Emotion.Happy),
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        fontSize: '16px',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      📲 Install App
    </button>
  );
};
