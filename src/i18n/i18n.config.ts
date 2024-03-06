import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {EN , GU, HI, KA, MR, PN, TM } from './Translations'

const resources = {
    EN : {
        translation : EN,
    },
    HI : {
        translation : HI,
    },
    MR : {
        translation : MR,
    },
    GU : {
        translation : GU,
    },
    PN : {
        translation : PN,
    },
    TM : {
        translation : TM,
    },
    KA : {
        translation : KA,
    },
    
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'EN',
    compatibilityJSON: 'v3',
    //language to use if translation in user language is not available
    fallbackLng: 'EN',
    resources,
  })

  export default i18next;