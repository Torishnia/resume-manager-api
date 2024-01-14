import { Contact } from '../entity/contact/Contact';
import { myDataSource } from '../utils/db';
import { IContact } from 'src/entity/contact/IContact';

export async function createContact(contact: IContact): Promise<void> {
  const { phone, email, linkedInURL, telegramURL, gitHubURL, resumeId } = contact;
  const contactRepository = myDataSource
    .getRepository(Contact)
    .create({
      phone,
      email,
      linkedInURL,
      telegramURL,
      gitHubURL,
      resumeId,
    });

  const result = await contactRepository.save();
  if (!result.id) {
    throw new Error('error with create contact');
  }
}