
/* general */
export const RETREIVE_FAILURE = 'retrieve_failure'
export const RETRIEVE_RESET = 'retrieve_failure'
export const SAVE_FAILURE = 'save_failure'
export const SEND_FAILURE = 'send_failure'
export const FORM_VALIDATION_FAILURE = 'form_validation_failure'
export const FORM_VALIDATION_RESET = 'form_validation_reset'
export const FORM_DATA_RETRIEVE_FAILURE = 'form_data_retrieve_failure'
export const FORM_ERROR = 'form_error'


/* document handler */
export const DOCUMENT_UPLOAD = 'document_upload'
export const DOCUMENT_DOWNLOAD = 'document_download'
export const DOCUMENT_DELETE = 'document_delete'
export const DOCUMENT_SENDING = 'document_sending'


/* user and login */
export const LOGIN_USER = 'login_user'
export const LOGIN_FAILURE = 'login_failure'
export const LOGIN_SETUP   = 'login_setup'
export const LOGIN_CONFIRM = 'login_confirm'
export const USER_REGISTER = 'user_register'
export const AUTH_USER = 'auth_user'
export const USER_CONSENT_ADD = 'user_consent_add'
export const USER_LOGOUT = 'user_logout'
export const USER_PROFILE = 'user_profile'
export const USER_PROXY = 'user_proxy'
export const USER_PASSWORD_CHANGE = 'user_password'
export const USER_HOMEPAGECOUNTS = 'user_homepagecounts'
export const USER_PROXYLIST = 'user_proxylist'
export const USER_CONFIRMCODE_SEND = 'user_confirmcodesend'
export const USER_CONFIRMCODE_VALIDATE = 'user_confirmcode_validate'
export const USER_CONFIRMCODE_FAILURE  = 'user_confirmcode_faliure' 
export const USER_AUTHNUMBER_LIST = 'user_authnumber_list'
export const USER_AUTHNUMBER_GET = 'user_authnumber_get'
export const USER_AUTHNUMBER_UPDATE = 'user_authnumber_update'
export const USER_NOTELIST = 'user_notelist'
export const USER_NOTEUPDATE = 'user_noteupdate'
export const USER_NOTE = 'user_note'

/* patient personal data */
export const PATIENT_PROFILE = 'patient_profile'
export const PATIENT_PERSONALDATA = 'patient_personaldata'
export const PATIENT_PHOTO = 'patient_photo'
export const PATIENT_DEMOGRAPHIC_UPDATE = 'patient_demographic_update'
export const PATIENT_CONTACTS = 'patient_contacts'
export const PATIENT_CONTACTUPDATE = 'patient_contactupdate'
export const PATIENT_INSURANCE = 'patient_insurance'
export const PATIENT_INSURANCEUPDATE = 'patient_insuranceupdate'
export const PATIENT_PHARMACIES = 'patient_pharmacies'
export const PATIENT_BILLING = 'patient_billing'
export const PATIENT_PROVIDERTDATA = 'patient_providerdata'
export const PATIENT_PROVIDERWORKPLACE = 'patient_providerworkplace'
export const PATIENT_PROXY = 'patient_proxy'
export const PATIENT_REGISTERDATA = 'patient_registerdata'
export const PATIENT_REGISTERUPDATE = 'patient_registerupdate'
export const PATIENT_REGISTER_LOGINNAME_VERIFY = 'patient_register_loginname_verify'

export const FINANCE_BALANCE = 'finance_balance'
export const FINANCE_CHARGES = 'finance_charges'

/* medinfo */
export const DASHBOARD_GET = 'dashboard_get'
export const ACTIONITEM_GET = 'actionitem_get'
export const ACTIONITEM_UPDATE = 'actionitem_update'
export const ALERTS_GET  = 'alerts_get'
export const ALLERGIES_GET = 'allgeries_get'
export const CAREPLAN_GET = 'careplan_get'
export const CAREPLAN_DETAIL_GET = 'careplan_detail_get'
export const CAREPLAN_PROGRESS = 'careplan_progress'
export const CAREPLAN_STATUSSET = 'careplan_stautusset'
export const DASHBOARD_CARDS = 'dashboard_cards'
export const ENCOUNTERS_GET  = 'encounters_get'
export const ENCOUNTER_GET_SUMMARY  = 'encounter_get_summary'
export const IMMUNIZATIONS_GET = 'immunizations_get'
export const IMMUNIZATIONDETAIL_GET = 'immunizationdetail_get'
export const HOSPITALIZATIONS_GET = 'get_hospitalizations'
export const LABRESULTS_GET = 'labresults_get'
export const LABTESTS_GET = 'labtests_get'
export const LABRESULT_GETGRAPH = 'labresult_getgrah'
export const NOTICES_GET = 'notices_get'
export const NOTICE_STATUS_UPDATE = 'notices_status_update'
export const MED_DOCS_GET = 'med_docs_get'
export const MED_DOC_GET = 'med_doc_get'
export const MED_FORM_GETLIST = 'med_form_getlist'
export const MED_FORM_GET = 'med_form_get'
export const MED_FORM_SEND = 'med_form_send'
export const MED_FORM_GETTEMPLATE = 'med_form_gettemplate'
export const MEDICATIONS_GET = 'medications_get'
export const MEDICATION_REPORT_GET = 'medications_report_get'
export const REFILL_MEDS_GET  = 'refill_meds_get'
export const REFILL_REQUEST_SEND = 'refill_request_send'
export const REFERRALS_GET = 'referrals_get'
export const REFERRAL_REQUEST = 'referral_request'
export const VITALSIGNS_GET  = 'vitalsigns_get'
export const VITALSIGNS_SEND = 'send_vitalsigns'
export const VITALSIGNS_RESET = 'send_vitalsigns'
export const VITALSIGN_SINGLE_GET = 'vitalsign_single_get'


/* mail */
export const MAIL_GET_INBOX = 'mail_get_inbox'
export const MAIL_GET_OUTBOX = 'mail_get_outbox'
export const MAIL_SEND_QUESTION = 'mail_send_question'
export const MAIL_SEND_MESSAGE = 'mail_send_question'
export const MAIL_GET_MESSAGETYPES = 'mail_getmessagetypes'
export const MAIL_MESSAGECHAIN_BYID = 'mail_messagechain_byid'
export const MAIL_ATTACHMENTCHAIN_BYID = 'mail_attachmentchain_byid'


/* practice */ 
export const PRACTICE_INFO_GET = 'practice_info_get'
export const PRACTICE_INFO_UPDATE = 'practice_info_update'
export const PRACTICE_NEWS_GET = 'practice_news_get'
export const PRACTICE_NEWS_UPDATE = 'practice_news_update'
export const PRACTICE_RESOURCES_GET = 'practice_resources_get'
export const PRACTICE_RESOURCES_UPDATE = 'practice_resources_update'
export const PRACTICE_PREFS_GET = 'practice_prefs_get'
export const PRACTICE_PREFS_UPDATE = 'practice_prefs_update'
export const PRACTICE_EDUCATION_GET = 'practice_education_get'
export const PRACTICE_CLINICLIST_GET = 'practice_cliniclist_get'


/* site */
export const SITE_INFO_GET    = 'get_site_info'
export const SITE_INFO_UPDATE = 'update_site_info'

/* appts */
export const APPOINTMENTS_GET = 'appointments_get'
export const APPOINTMENTS_GET_PAST = 'appointments_get_past'
export const APPOINTMENT_NEW     = 'appointment_new'
export const APPOINTMENT_REQUEST = 'appointment_request'
export const APPOINTMENT_CREATE  = 'appointment_create'
export const APPOINTMENT_CANCEL  = 'appointment_cancel'
export const APPOINTMENT_CONFIRM = 'appointment_confirm'
export const APPOINTMENT_CHECKIN = 'appointment_checkin'
export const APPOINTMENT_FINDSLOT = 'appointment_findslot'
        
/* ref lists */
export const GET_PROVIDERS = 'get_providers'
export const LOOKUP_PHARMACY = 'lookup_pharmacy'
export const LOOKUP_SEARCH = 'lookup_search'



