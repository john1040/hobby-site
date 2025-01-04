// Grade/Product Line Categories
export enum GundamGrade {
  PG = "Perfect Grade",
  MG = "Master Grade",
  RG = "Real Grade",
  HG = "High Grade",
  SD = "Super Deformed",
  RE = "RE/100",
}

// Gundam Series/Timeline Categories
export enum GundamSeries {
  SEED = "Gundam SEED",
  SEED_DESTINY = "Gundam SEED Destiny",
  WING = "Gundam Wing",
  DOUBLE_O = "Gundam 00",
  UNICORN = "Gundam Unicorn",
  IRON_BLOODED_ORPHANS = "Gundam Iron-Blooded Orphans",
  UNIVERSAL_CENTURY = "Universal Century",
  COSMIC_ERA = "Cosmic Era",
  ANNO_DOMINI = "Anno Domini",
  POST_DISASTER = "Post Disaster",
}

// Main Post/Review Type
export interface GundamPost {
  id: string;
  title: string;
  content: string;
  grade: GundamGrade;
  series: GundamSeries;
  modelName: string;
  scale: string;
  buildDifficulty: number; // 1-5 rating
  imageUrls: string[];
  createdAt: Date;
  updatedAt: Date;
} 