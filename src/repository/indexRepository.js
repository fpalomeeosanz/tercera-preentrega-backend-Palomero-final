import { ContactRepository } from "./ContactRepository.js";
import { ContactsMongo } from "../dao/managers/ContactMongo.js";


export const contactService = new ContactRepository(ContactsMongo);