import { Emotion } from '@/types';

export function isValidEmotion(emotion: string): emotion is Emotion {
  return Object.values(Emotion)
    .map((e) => e.toLowerCase())
    .includes(emotion.toLowerCase() as Emotion);
}
