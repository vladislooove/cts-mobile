// Types
import { RecommendationConsideration } from '../../services/system/types';

// Utils
import groupBy from 'lodash/groupBy';

export const areMissingCareNotes = (items: RecommendationConsideration[][]) =>
  items.length === 1 && items[0]?.length === 1 && !items[0]?.[0]?.cancer;

export const groupCareNotes = (
  careNotes: RecommendationConsideration[]
) => Object.values(groupBy(careNotes, ({ cancer }) => cancer?.id ?? ''));

export const getCareNoteText = (careNote: RecommendationConsideration) => {
  if (careNote.cancer) {
    let innerText = careNote?.medicalPlan?.name ?? '';

    if (careNote.additionalNote) {
      innerText += `. ${careNote.additionalNote}`;
    }

    return innerText;
  }

  return careNote.additionalNote;
};

export const getCareNotesText = (careNotes: RecommendationConsideration[]) => {
  const grouped = groupCareNotes(careNotes);

  if (areMissingCareNotes(grouped)) {
    return grouped[0][0].additionalNote;
  }

  return grouped
    .map((items) => items.map((item) => getCareNoteText(item)).join('\n'))
    .join('\n');
};
