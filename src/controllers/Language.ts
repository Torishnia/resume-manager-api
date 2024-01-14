import { ILanguage } from 'src/entity/language/ILanguage';
import { myDataSource } from '../utils/db';
import { Language } from '../entity/language/Language';

export async function createLanguage(language: ILanguage): Promise<void> {
  const { name, level, resumeId } = language;

  const languageRepository = myDataSource
    .getRepository(Language)
    .create({
      name,
      level,
      resumeId,
    });

  const result = await languageRepository.save();
  if (!result.id) {
    throw new Error('error with create language');
  }
}

export async function updateLanguage(language: ILanguage): Promise<void> {
  const { name, level, resumeId } = language;
  // TODO. Need create logic for update language.
}