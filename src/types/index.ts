export type VerseQuote = {
  id: string;
  caption: string;
  quote: string;
  type: string;
  emotion?: Emotion;
};
export enum Emotion {
  Happy = 'Happy',
  Lonely = 'Lonely',
  Angry = 'Angry',
  Sad = 'Sad',
  Thankful = 'Thankful',
  Anxious = 'Anxious',
  Frustrated = 'Frustrated',
  Troubled = 'Troubled'
}
