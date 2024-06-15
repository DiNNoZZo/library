export interface ITranslatedMessage {
  message: string;
  translation: string;
}

interface IResMessages {
  recordCreationSuccess: ITranslatedMessage;
  recordUpdateSuccess: ITranslatedMessage;
  recordDeletionSuccess: ITranslatedMessage;
}

interface IBadReqMessages {
  uniqeDataViolation: ITranslatedMessage;
  validationErr: ITranslatedMessage;
  internalAppErr: ITranslatedMessage;
  forbidden: ITranslatedMessage;
  failedToCreateRecord: ITranslatedMessage;
  failedToUpdateRecord: ITranslatedMessage;
  notFoundRecord: ITranslatedMessage;
  sameRecordViolation: ITranslatedMessage;
  readOnlyData: ITranslatedMessage;
  dataConflict: ITranslatedMessage;
  noRecordsFoundInSheet: ITranslatedMessage;
  invalidToken: ITranslatedMessage;
  invalidLogin: ITranslatedMessage;
  verificationCodeExpired: ITranslatedMessage;
  emailSendingFailure: ITranslatedMessage;
  smsSendingFailure: ITranslatedMessage;
}

export const responseMessageList: IResMessages = {
  recordCreationSuccess: {
    message: 'Data has been created succesfully',
    translation: 'Záznam bol úspešne vytvorený',
  },
  recordUpdateSuccess: {
    message: 'Data has been updated succesfully',
    translation: 'Záznam bol úspešne zmenený',
  },
  recordDeletionSuccess: {
    message: 'Data has been deleted succesfully',
    translation: 'Záznam bol úspešne vymazaný',
  },
};

export const badRequestMessageList: IBadReqMessages = {
  uniqeDataViolation: {
    message: 'Some of data must be uniqe and already exist!',
    translation: 'Záznam musí byť unikátny a už existuje',
  },
  validationErr: {
    message: 'Validation error',
    translation: 'Validácia zlyhala',
  },
  internalAppErr: {
    message: 'Internal application error',
    translation: 'Nastala chyba v aplikácii',
  },
  forbidden: {
    message: 'User has no permition for this action',
    translation: 'Užívateľ nemá práva pre túto akciu',
  },
  failedToCreateRecord: {
    message: 'Failed to create new record',
    translation: 'Vytvorenie nového záznamu zlyhalo',
  },
  failedToUpdateRecord: {
    message: 'Failed to updated record',
    translation: 'Úprava záznamu zlyhala',
  },
  notFoundRecord: {
    message: 'Could not find record with specified id',
    translation: 'Záznam s daným id sa nenašiel',
  },
  sameRecordViolation: {
    message: 'Some of the records already exists',
    translation: 'Niektoré z dát už v systéme existujú',
  },
  readOnlyData: {
    message: 'Data cannot be changed, it is read only',
    translation: 'Dáta ktoré sa pokúšate zmeniť, sú len na čítanie',
  },
  dataConflict: {
    message: 'A data conflict occurred',
    translation: 'Vznikol konflikt na dátach',
  },
  noRecordsFoundInSheet: {
    message: 'No valid row found in uploaded sheet',
    translation: 'Nenašiel sa žiadny záznam nahratej v tabuľke',
  },
  invalidToken: {
    message: 'Token was already used or it is expired, conatct system admin to generate new link',
    translation: 'Token bol použitý alebo expiroval, kontaktujte administrátora systému pre vygenerovanie nového linku',
  },
  invalidLogin: {
    message: 'Invalid username or password',
    translation: 'Nesprávne meno alebo heslo',
  },
  verificationCodeExpired: {
    message: 'Verification token already expired or is invalid, generate and apply new',
    translation: 'Verifikačný kód je neplatný alebo expiroval, vygenerujte a použite nový',
  },
  emailSendingFailure: {
    message: 'Email sending failed, event cancelled',
    translation: 'Nepodarilo sa odoslať email, akcia sa nezdarila',
  },
  smsSendingFailure: {
    message: 'SMS sending failed, event cancelled',
    translation: 'Nepodarilo sa odoslať sms, akcia sa nezdarila',
  },
};