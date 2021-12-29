import React from 'react'

// note - not standard usage of context - we just use the default value
export const RefContext = React.createContext({
//============================================================================= 
// TESTING 
//============================================================================= 
providerList:[ { key:'2',value:'Milan Anderson MD'},
                  { key:'4',value:'Sally Edney PNP'},
                  { key:'10',value:'Erickson Liwanag'},
                  { key:'11',value:'Alexander Noche'},
                  { key:'14',value:'Mohsen Tamasaby M.D.'}
                ],

clinicList:[], // to be populated on user profile screen

//============================================================================= 
// Forrms 
//============================================================================= 
      formlist:[
                { name:"Consent for Surgery", linkTo:'surgery_consent'},
                { name:"Infuenza Vaccine Form", linkTo:'3'},
                { name:"Camp Health Form", linkTo:'5'},
                { name:"Medicaid Eligibility", linkTo:'5'} ,           
                { name:"Medical Release", linkTo:'medical_release'},           
                { name:"Preschool-Daycare Form", linkTo:'3'}           
               ],                 
//============================================================================= 
// General 
//============================================================================= 
                
    gender: [{ key:'M',value:'Male'},
             { key:'F',value:'Female'},
             { key:'O',value:'Other'},
             { key:'U',value:'Unknown'}
            ], 

    gender_identity: [{ key:'M',value:'Male'},
            { key:'F',value:'Female'},
            { key:'O',value:'Other'},
            { key:'U',value:'Unknown'},
           ], 

   race:   [{ key:'ASI',value:'Asian'},
            { key:'BLA',value:'Black/African American'},
            { key:'WHI',value:'White'},
            { key:'HAW',value:'Native Hawaiian'},
            { key:'HIS',value:'Hispanic/Latino'},
            { key:'NA', value:'American Indian/Alaska Native'},
            { key:'PAC',value:'Other Pacific Islander'},
            { key:'DEC',value:'Declined to Specify'},
            { key:'UNK',value:'Unknown'},
            { key:'OTH',value:'Other/Not Listed'},
           ], 
           
    primary_phone: [{ key:'H',value:'Home'},
            { key:'W',value:'Work'},
            { key:'C',value:'Mobile'}
           ],          

    marital_status: [{ key:'SIN',value:'Single'},
            { key:'MAR',value:'Married'},
            { key:'WID',value:'Widowed'},
            { key:'SEP',value:'Separated'},
            { key:'DIV',value:'Divorced'},
            { key:'DOP',value:'Domestic Partner'},
            { key:'COH',value:'Living Together'},
            { key:'UNK',value:'Unknown'}
           ],           

    yes_no: [{ key:'Y',value:'Yes'},
             { key:'N',value:'No'}
            ],
     
    language: [{ key:'ENG',value:'English'},
            { key:'SPA',value:'Spanish'},
            { key:'CHI',value:'Chinese'},
            { key:'VIE',value:'Vietnamese'},
            { key:'KOR',value:'Korean'},
            { key:'TGL',value:'Tagalog'},
            { key:'ARA',value:'Arabic'},
            { key:'POR',value:'Portuguese'},
            { key:'FRE',value:'French'},
            { key:'GER',value:'German'},
            { key:'RUS',value:'Russian'},
            { key:'HEB',value:'Hebrew'},
            { key:'SGN',value:'Sign Language'},
            { key:'OTH',value:'Other'}
           ],          
      
      states:[{ key:'AB',value:'Alberta'},
              { key:'AK',value:'Alaska'},
              { key:'AL',value:'Alabama'},
              { key:'AR',value:'Arkansas'},
              { key:'AZ',value:'Arizona'},
              { key:'BC',value:'British Columbia'},
              { key:'CA',value:'California'},
              { key:'CO',value:'Colorado'},
              { key:'CT',value:'Connecticut'},
              { key:'DC',value:'District of Columbia'},
              { key:'DE',value:'Delaware'},
              { key:'FL',value:'Florida'},
              { key:'GA',value:'Georgia'},
              { key:'HI',value:'Hawaii'},
              { key:'IA',value:'Iowa'},
              { key:'ID',value:'Idaho'},
              { key:'IL',value:'Illinois'},
              { key:'IN',value:'Indiana'},
              { key:'KS',value:'Kansas'},
              { key:'KY',value:'Kentucky'},
              { key:'LA',value:'Louisiana'},
              { key:'MA',value:'Massachusetts'},
              { key:'MB',value:'Manitoba'},
              { key:'MD',value:'Maryland'},
              { key:'ME',value:'Maine'},
              { key:'MI',value:'Michigan'},
              { key:'MN',value:'Minnesota'},
              { key:'MO',value:'Missouri'},
              { key:'MS',value:'Mississippi'},
              { key:'MT',value:'Montana'},
              { key:'NA',value:'<none>'},
              { key:'NB',value:'New Brunswick'},
              { key:'NC',value:'North Carolina'},
              { key:'ND',value:'North Dakota'},
              { key:'NE',value:'Nebraska'},
              { key:'NF',value:'Newfoundland'},
              { key:'NH',value:'New Hampshire'},
              { key:'NJ',value:'New Jersey'},
              { key:'NM',value:'New Mexico'},
              { key:'NS',value:'Nova Scotia'},
              { key:'NT',value:'Northwest Territories'},
              { key:'NU',value:'Nunavut'},
              { key:'NV',value:'Nevada'},
              { key:'NY',value:'New York'},
              { key:'OH',value:'Ohio'},
              { key:'OK',value:'Oklahoma'},
              { key:'ON',value:'Ontario'},
              { key:'OR',value:'Oregon'},
              { key:'PA',value:'Pennsylvania'},
              { key:'PE',value:'Prince Edward Island'},
              { key:'PQ',value:'Quebec'},
              { key:'PR',value:'Puerto Rico'},
              { key:'RI',value:'Rhode Island'},
              { key:'SC',value:'South Carolina'},
              { key:'SD',value:'South Dakota'},
              { key:'SK',value:'Saskatchewan'},
              { key:'TN',value:'Tennessee'},
              { key:'TX',value:'Texas'},
              { key:'UT',value:'Utah'},
              { key:'VA',value:'Virginia'},
              { key:'VT',value:'Vermont'},
              { key:'WA',value:'Washington'},
              { key:'WI',value:'Wisconsin'},
              { key:'WV',value:'West Virginia'},
              { key:'WY',value:'Wyoming'},
              { key:'YK',value:'Yukon Territory'}
            ],          

//============================================================================= 
// Contacts 
//============================================================================= 
  relationship : [{ key:'111029017',value:'Father'},
                    { key:'120778012',value:'Mother'},
                    { key:'109011017',value:'Son'},
                    { key:'109762013',value:'Daughter'},
                    { key:'1136015',value:'Husband'},
                    { key:'1137012',value:'Wife'},
                    { key:'117814011',value:'Brother'},
                    { key:'46429015',value:'Sister'},
                    { key:'1488302014',value:'Employer'},
                    { key:'1488344015',value:'Guardian'},
                    { key:'124502016',value:'Other'},
                    { key:'1488568012',value:'No relation'},
                    { key:'1490734016',value:'Grandfather'},
                    { key:'186881011',value:'Grandmother'},
                    { key:'112656016',value:'Child'},
                    { key:'1135016',value:'Spouse'},
                    { key:'213673014',value:'Caregiver'},
                    { key:'59001018',value:'Family'},
                    { key:'Z-0000004',value:'Self'}
  ],  
 
  contact_type : [{ key:'nb_patemployer',value:'Employer'},
                    { key:'nb_patnextofkin',value:'Next of Kin'},
                    { key:'nb_patemergency',value:'Emergency Contact'},
                    { key:'nb_patguarantor',value:'Guarantor'},
                    { key:'nb_patpolicyholder',value:'Policy Holder'},
                    { key:'nb_patschool',value:'School'},
                    { key:'nb_patcamp',value:'Camp'},
                    { key:'nb_patmisccontact',value:'Miscellaneous'},
                    { key:'nb_patparent',value:'Parent'},
                    { key:'nb_patguardian',value:'Legal Guardian'},
                    { key:'nb_patcaregiver',value:'Caregiver'},
                    { key:'nb_patgrandparent',value:'Grandparent'}
  ],  
    
//============================================================================= 
// Mail 
//============================================================================= 
  msgTypes: [{ key:'MED',value:'Medical Question'},
                { key:'REF',value:'Referral'},
                { key:'PRE',value:'Refill'},
                { key:'RES',value:'Test Result'},
                { key:'OTH',value:'Other'},
                { key:'APP',value:'Appointment'}
  ],
//============================================================================= 
// Appointments 
//============================================================================= 
  apptTypes: [  { key:'office',value:'Office Visit'},
                 { key:'telehealth',value:'Video Consultation'},
                 { key:'phone',value:'Phone Consultation'},
                 { key:'home',value:'Home Visit'},
                 { key:'follow',value:'Follow-Up'},
                 { key:'check',value:'Check-up'},
                 { key:'other',value:'Other'}
  ],

  apptActions: [{ key:'apt_allowrequests',name:'Appointment Request',active:'Y'},
                { key:'apt_makeappts'    ,name:'Make Appointment',active:'Y'},
  ],

  apptCancel: [{ key:'apt_timeconflict',name:'Unable to make it at this time',active:'Y'},
               { key:'apt_noneed'    ,name:'No longer need the appointment',active:'Y'},
],
//============================================================================= 
// Medinfo 
//============================================================================= 

   medinfocategories: [{ key:'cat_dashboard',name:'Dashboard',active:'Y'},
                       { key:'cat_medication',name:'Medications',active:'Y'},
                       { key:'cat_encounter',name:'Visits',active:'Y'},
                       { key:'cat_vitalsigns',name:'Vital Signs',active:'Y'},
                       { key:'cat_laboratory',name:'Laboratory Results',active:'Y'},
                       { key:'cat_allergy',name:'Allergies',active:'Y'},
                       { key:'cat_immunization',name:'Immunizations',active:'Y'},
                       { key:'cat_careplan',name:'Care Plans',active:'Y'},
                       { key:'cat_referral',name:'Referrals',active:'Y'},
                       { key:'cat_meddocs',name:'Medical Documents',active:'Y'},
                       { key:'cat_medforms',name:'Medical Documents',active:'Y'},
  ],           

  medinfocards:[{ key:'MEDCARD_1',name:'Lab Results',value:'LAB'},
                { key:'MEDCARD_2',name:'Medication Refills',value:'MEDICATION'},
                { key:'MEDCARD_3',name:'Immunizations',value:'IMMUNIZATION'},           
  ],

  careplanProgress: [{ key:'1',value:'No Progress'},
              { key:'2',value:'Not Met'},
              { key:'3',value:'Acceptable'},
              { key:'4',value:'Good'},
              { key:'5',value:'Exceeded'}
  ],           
    
  referralTypes: [{ key:'SO',value:'Second Opinion'},
          { key:'CO',value:'Consultation'},
          { key:'TR',value:'Treatment'},
          { key:'AM',value:'Assume Management'},
          { key:'OTH',value:'Other'}
  ],
 
  painSeverity: [{ key:'-1',value:'(Not Applicable)'},
                { key:'0',value:'0. No Pain'},
                { key:'1',value:'1. Very Mild Pain'},
                { key:'2',value:'2. Discomforting Pain'},
                { key:'3',value:'3. Tolerable Pain'},
                { key:'4',value:'4. Distressing Pain'},
                { key:'5',value:'5. Very Distressing Pain'},
                { key:'6',value:'6. Intense Pain'},
                { key:'7',value:'7. Very Intense Pain'},
                { key:'8',value:'8. Horrible Pain'},
                { key:'9',value:'9. Unbearable Pain '},
                { key:'10',value:'10.Worst Pain Imaginable/Possible'},
  ],

  noteStatus: [ { key:'NEW',value:'New Note'},
                { key:'DON',value:'Completed'},
                { key:'FUT',value:'For a Later Date'},
                { key:'OTH',value:'Other'}
  ],

  noteType: [  { key:'NOT',value:'Just a Note'},
               { key:'REM',value:'Reminder'},
               { key:'TODO',value:'To Do'},
               { key:'OTH',value:'Other'}
  ],

})

//=============================================================================
// Functions for the context
//=============================================================================

//=============================================================================
// RefProvidersSet - sets the patients providers
//=============================================================================
export const RefProvidersSet = (ref,providers) => {
  
        let newProviderList =[]
        providers.forEach(item=>{
                newProviderList.push({key:item.provider_id,value:item.provider_name}) 
        })
        ref.providerList = newProviderList
}
//=============================================================================
// RefMedinfoCategoriesSet - sets the medicalInfoCategories
//=============================================================================
export const RefMedinfoCategoriesSet = (ref,medinfocategories) => {
  
        let index = 0
        medinfocategories.forEach(item=>{
                if (item.active === 'N') {
                   index =   ref.medinfocategories.findIndex(obj => obj.key === item.medinfo_category);
                   if (index >= 0) {
                        ref.medinfocategories[index].active = 'N'
                   }
                }
        })
}
//=============================================================================
// RefMedinfoCardsSet - sets the medinfocards
//=============================================================================
export const RefMedinfoCardsSet = (ref,medinfocards) => {
  
        let indexCard = 0
        medinfocards.forEach(item=>{
                indexCard =   ref.medinfocards.findIndex(obj => obj.key === item.medcard_number);
                if (indexCard >= 0 ) {
                        ref.medinfocards[indexCard].value = item.medcard_data
                        ref.medinfocards[indexCard].name  = item.medcard_data_name
                }
        })
}
//=============================================================================
// RefApptBookPrefs - sets the appointmentbook preferences
//=============================================================================
export const RefApptBookPrefs = (ref,apptprefs) => {
  
        let index = 0
        apptprefs.forEach(item=>{
          if (item.active === 'N') {
             index =   ref.apptActions.findIndex(obj => obj.key === item.appt_pref);
             if (index >= 0 ) {
                ref.apptActions[index].active = 'N'
             }
          }
        })
}
//=============================================================================
// RefApptBookPrefs - sets the appointmentbook preferences
//=============================================================================
export const RefApptBookCanMakeAppts = (ref) => {
  
    let index =   ref.apptActions.findIndex(obj => obj.key === 'apt_allowrequests');
    if (index >= 0) {
       if(ref.apptActions[index].active === 'N') {
         return false
       }
       return true
   }
}
//=============================================================================         
  


  