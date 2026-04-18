/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ComplexityLevel = 'Cơ bản' | 'Trung bình' | 'Nâng cao';

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: ComplexityLevel;
  objective: string;
  formula: string;
  content: string;
  checklist: string[];
  excelLink?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  formulaLatex?: string;
  relatedLessonId?: string;
}

export interface FBFinecastInput {
  roomInventory: number;
  occupancy: number;
  guestPerRoom: number;
  captureRateBF: number;
  captureRateLC: number;
  captureRateDN: number;
  avgSpendBF: number;
  avgSpendLC: number;
  avgSpendDN: number;
  outsideCovers: number;
}
