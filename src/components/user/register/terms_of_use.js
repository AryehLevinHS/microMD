import React, { useContext, useEffect } from 'react';
import {  ScrollView,View, Text } from 'react-native' //TextInput Button
import { Button } from 'react-native-paper';
//import {Dialog,IconButton,Tooltip} from '@material-ui/core';
//import CloseIcon from '@material-ui/icons/Cancel';


// data
import {UserContext} from '../../../store/UserContext'
import {useTermsofUse} from '../../../store/hooks/useUserData'

// styles
import {appStyles} from '../../../resources/styles/main_styles'
//=============================================================================
// TermsofUse (Terms of use form)
//=============================================================================
function TermsofUse () {
   // const { open ,onClose} = props;
    const user = useContext (UserContext)
      
    // send consent confirmation
    const [state,DataConsentAdd] = useTermsofUse()

    //=============================================================================
    // useEffect to close form
    //    if state.success   close the form
    //=============================================================================
    useEffect(()=>{
        if (state.sendSuccess) {
            setTimeout(()=>{ onClose(true) },2000)
        } 
    },[state.sendSuccess])  
    //=============================================================================
    // closeDialog (close the diaglog)
    //=============================================================================
    const closeDialog = () => {
        onClose(false) 
    }
    //=============================================================================
    // submitForm (submit the form)
    //=============================================================================
    const submitForm = () =>{
          let dataToSubmit   = {portal_user_id:user.portal_user_id,
                                consent_for_code:'TERMSOFUSE',
                                consent_for_name:'Terms of use',
                                reason:'Allows user to use the system',
                                updated_by:user.portal_user_id
                               }
          DataConsentAdd(dataToSubmit)
    }

    //<Dialog className="modal__dialog"
            //        open={open}
           // >
    //        <div className = 'modal__title'>
    //        <h2> Terms and Conditions of Use</h2>
    //        <div>   <Tooltip title="Exit" > 
    //                <IconButton onClick={() => {closeDialog()}}> <CloseIcon color='primary' />  </IconButton> 
    //            </Tooltip>  
    //        </div>
    //    </div>
   
//=============================================================================  
    return (    <ScrollView style={{marginHorizontal:5}}>
                 <Text style={appStyles.h1}>Terms of Use </Text>
                
                     <Text>
                         This Terms of Use Agreement (“Terms of Use” or “Agreement”) governs your access and use 
                         of the software, websites, and services described herein
                     </Text>
                     <Text>
                         <Text style={appStyles.bold}>Acceptance and Participation</Text> 
                         - It is important that you read and understand all of the 
                         following terms and conditions carefully. You understand and agree that this Terms of Use 
                         Agreement is a legally binding agreement between you and your Practice. It states the terms 
                         and conditions under which you may access and use the Portal and all written and other 
                         materials displayed or made available through the Portal, which may include, without 
                         limitation: clinical documentation, health records, articles, text, photographs, and images, 
                         (the “Content”). By accessing and using the Portal, you are indicating your acceptance and 
                         confirm that you have read, understood, and agree to be bound by the terms and conditions of 
                         this Agreement and the related Notice of Privacy Practices. If you do not accept these terms 
                         and conditions, your immediate remedy is to not access or continue to use the Portal. 
                         Your Practice reserves the right at its sole discretion to make changes to portions or all 
                         of these Terms of Use and the Notice of Privacy Practices at any time.  Your continued use of 
                         the Portal after such changes are posted will signify your acceptance of these revised terms.
                         You should visit this page periodically to review this Agreement.  Your Practice does not 
                         assume any obligation to notify you of any changes to this Agreement.
                     </Text>
                     <Text>
                        <Text style={appStyles.bold}>Medical Emergencies</Text> 
                         – You understand that the Portal is not meant to be used in the case 
                         of an emergency. For all matters requiring urgent care which you believe may negatively impact
                         your health or well-being, you understand that you must call 911 or proceed to the emergency 
                         department.  You agree that under no circumstances should you attempt self-treatment based on 
                         anything you have seen or read on the Portal or the Practice Website.
                     </Text>
                     <Text>
                     <Text style={appStyles.bold}>Eligibility for Use</Text> 
                          – All patients that are over the age of 18 that have received healthcare 
                          are eligible to use the Patient Portal at the discretion of your Practice.  Access to the Portal
                          remains active unless you notify us that you would like to opt-out, or, 
                          you have violated these terms and conditions resulting in termination of your access.
                     </Text>
                     <Text>
                        <Text style={appStyles.bold}>Patient Portal Access and Use</Text> 
                        - You understand that the Portal is intended to be used only by individuals who wish to use the 
                        services and functionality that the Portal provides in connection with their health and well-being. 
                        You understand that all communication through the Portal will be in regard to your own health care 
                        needs and treatment. You understand that asking for clinical advice on behalf of another person has 
                        the potential to cause injury or harm and is a violation of these terms and conditions which may result 
                        in termination of your access to the Portal.  To that end, Your Practice does not assume any liability 
                        whatsoever for any health information or advice used by persons other than the user; the person that is 
                        logging in to the Portal to access health records.
                      </Text>
                      <Text>
                        <Text style={appStyles.bold}>General Information Is Not Medical Advice</Text> 
                        – The Content on the Portal is NOT considered medical advice or treatment rendered and is not intended in any way 
                        to be a substitute for direct patient care.  In more specific terms, the Content is not intended for use in the 
                        diagnosis, cure, treatment, or prevention of any disease and must never be relied on to make medical or clinical 
                        decisions regarding your care.  Always seek the advice of a provider or other qualified healthcare professional who 
                        is properly licensed to practice medicine or provide healthcare in your jurisdiction concerning any questions you may
                        have regarding any information obtained from the Your Practice Website or Portal and any medical condition you believe may be 
                        relevant to you. Never disregard professional medical advice or delay in seeking it because of something you have 
                        read on the Portal or your Practice's Website. Always consult with your provider or other qualified healthcare 
                        provider before embarking on a new treatment, diet, or fitness program. Information obtained on the Portal is not 
                        exhaustive and does not cover all diseases, ailments, physical conditions, or their treatment.  You should always 
                        seek a direct, in-person appointment with your provider to assess any health related concerns so a proper diagnosis 
                        and treatment can be administered.
                      </Text>
                     <Text>
                        <Text style={appStyles.bold}>Medical Disclaimers</Text> 
                        - No Provider-Patient Relationship – The presentation of Content on your Practice's Website, or the Portal does not 
                        necessarily establish a provider-patient relationship between you and Your Practice (or any of its providers) and 
                        is not intended as a solicitation of individuals to become patients or clients of the your Practice (or any of its 
                        providers).
                        This section does not apply to the extent that you are using the Portal to communicate with a provider with whom you 
                        have an existing provider-patient relationship.  In the event you have established a relationship, Your Practice will
                        not be held liable or responsible in any way for any injury resulting therefrom, or any injury that may result from 
                        unfulfilled appointments, cancelled or otherwise.
                     </Text>
                     <Text>
                        <Text style={appStyles.bold}>No Endorsements; Technology or Otherwise </Text>
                        - You understand that the Portal is accessible on many of the major computing platforms that offer a web-based browser.  
                        Your Practice, Licensors, Agents, Contractors and Subcontrators are making every best attempt to ensure that the user 
                        experience is consistent across each platform.  
                        You understand that depending on which platform and browser you use to access the Portal the “look” and “feel” may be 
                        slightly different.  Your Practice does not recommend or endorse any specific technology to access the Portal.  
                        You understand that the Portal is only available from a web-based browser; an “App” for mobile devices is not available 
                        at this time. However, the Portal can be accessed with any internet capable web-based browser on your mobile device.  
                      </Text> 
                      <Text>
                        <Text style={appStyles.bold}>Secure Message Handling</Text>
                        –  You agree that you will not use the secure message feature to misrepresent your identity, interfere, abuse, 
                        intimidate, harass, or stalk any other user(s) of the Portal.  You understand that messages you receive may 
                        contain important information vital to your health, medical care and well-being and understand that it is your 
                        responsibility to monitor these messages. You agree not to hold Your Practice liable for any losses, injury or 
                        claims of any kind resulting from your failure to read electronic messages sent to you in a timely manner. 
                        Messages sent electronically between you and Your Practice's healthcare team are not guaranteed to take place, 
                        in real-time; therefore, no attempts should be made by you to send any communication electronically to your Practice
                        requiring immediate or prompt attention.  Your Practice will make every best attempt to provide you with a timely 
                        response to electronic inquiries made from the Portal.  
                    </Text>
                      <Text>
                        <Text style={appStyles.bold}>Conduct Regarding Document Uploads and other Medical Data Uploaded (“Submissions”)</Text>
                        – The Portal provides features which allows you to upload (“post”) “Submissions” in the form of text, pictures, 
                        documents or other files to the Document Upload area of the Portal that are then accessed by the staff at your Practice. 
                        This feature is intended for use by you to submit data, files and documents electronically in place of, or in addition 
                        to sending documents through the mail or visiting your Practice in-person. Your Practice reserves the right at all times
                        to preserve any information as required to cooperate with any law enforcement requests, or to edit, refuse to post, or 
                        refuse to remove any upload, in whole or in part, that, in your Practice's sole discretion, are objectionable or in 
                        violation of this Agreement. You acknowledge that you alone are responsible for the Content of your Submissions and the 
                        consequences thereof.
                        When using any of the features of the Portal which allow you to post, upload, or make Submissions, it is a condition of your 
                        use that you DO NOT:
                        {"\n"}1) Restrict, intimidate, or inhibit any other user from using and accessing the Portal, interfere or attempt to 
                        interfere with the proper workings of the Portal, or do anything, which in the sole discretion of Your Practice, 
                        imposes an unreasonable or disproportionately large load on the Portal infrastructure;
                        {"\n"}2) Post or transmit any unlawful, abusive, defamatory, indecent, obscene, inaccurate, false or misleading information of 
                        any kind, including, without limitation: any submission constituting or encouraging conduct that would constitute a criminal 
                        offense, give rise to civil liability or otherwise violate any local, state, or federal laws or regulations;
                        {"\n"}3) Upload any materials which contains a virus, malicious code, or computer payloads of any kind intended to do harm to 
                        user or computer; which includes but is not limited to, denial of service attacks, gaining access to another users account, 
                        stealing personal information, or otherwise exploit the “System” or “Data” for personal gain.
                        Use or “mine” the Portal for unsolicited purposes – commercial or otherwise, including, without limitation: posting, uploading, 
                        or transmitting any material which contains advertising, which engages in commercial activities, solicitations or sales, or which 
                        involves contests, sweepstakes, advertising, or pyramid schemes.
                    </Text>
                      <Text>
                         <Text style={appStyles.bold}>Modification or Termination of the Portal</Text> 
                         – Your Practice reserves the right any time, and from time to time, to modify or discontinue, temporarily or permanently, 
                           the Portal (or any part thereof) with or without notice to you. Your Practice shall have no liability to you or any third 
                           party for any modifications, suspension, or discontinuance of the Portal or any part thereof.
                      </Text>
                      <Text>
                          <Text style={appStyles.bold}>Terms of Use Violation</Text> 
                          - You acknowledge and agree that Your Practice may preserve any communications, secure messages, and document uploads 
                            sent/received through the Portal and may disclose such communications when disclosure is reasonably necessary to: 
                            (1) comply with investigations by law enforcement agencies; (2) enforce this Terms of Use Agreement; 
                            (3) respond to claims that any communication harms or violates the rights of others; or (4) protect the rights and
                            personal safety of Health Your Practice and its providers, directors, employees, agents, workforce members, and their 
                            respective successors and assigns.  Your Practice may, at its sole discretion, suspend or terminate your right to use the 
                            Portal, either temporarily or indefinitely at any time without notice if you are found in violation of this Terms of Use 
                            Agreement. In the event of suspension or termination, you are no longer authorized to access the Portal which shall survive 
                            in effect as full force the termination of this Agreement. Your Practice shall not be liable to any party for such termination.
                      </Text>
                      <Text>
                            <Text style={appStyles.bold}>Limited License</Text> – 
                            Subject to the terms and conditions of this Agreement, you are hereby granted a limited, non-transferable,
                            and non-exclusive license to access, view, and use the Portal and the Content for your personal, non-commercial use.
                            You are granted the right to download, store, and/or print copies of items comprising the Content for your personal, 
                            non-commercial use, provided that you maintain all copyright and other notices contained in such Content. You may not 
                            copy and/or repost items comprising the Content online. You must also abide by any additional requirements governing 
                            the use of any specific Content that may be set out in the Portal. In the event of a conflict between the terms of a 
                            license governing specific Content and this Agreement, the terms of the specific license shall govern.
                      </Text>
                      <Text>
                            <Text style={appStyles.bold}>Indemnity</Text> – 
                            You agree to indemnify, defend, and hold harmless Your Practice and its providers, directors, employees, agents, licensors, 
                            and workforce members, and their respective successors and assigns, from and against any losses, damages, fines, penalties, 
                            costs, expenses, and liabilities (including, without limitation, legal fees and disbursements, in connection 
                            with or arising out of your: (a) violation or breach of any provision of the Terms and Conditions of Use or any applicable 
                            law or regulation, whether or not referenced herein; (b) violation of any rights of any third party; and/or (c) your use or 
                            misuse of the Portal. In the event you violate the Terms and Conditions of Use, we reserve the right to seek any and 
                            all remedies available in law and in equity.(d) your access to, use, misuse, reliance upon, or inability to access or use the
                            Portal (e) your use of, reliance on, publication, communication, distribution, printing, uploading, or downloading of anything 
                            (including the Content) on or from the Portal.
                      </Text>
                      <Text>
                            <Text style={appStyles.bold}>Disclaimer of Warranties</Text> – 
                            The Portal is provided “AS IS” and “AS AVAILABLE.” While Your Practice, licensors, and agents endeavor that the Portal is 
                            accessible 24/7, The above mentioned makes no representations or warranties, expressed or implied that the Portal will be made 
                            available at “ALL TIMES.” You acknowledge and agree that your access and use of the Portal is provided entirely AS IS 
                            except in the case of events beyond reasonable control including, without limitation: Internet outages or 
                            interruptions to service, repair or system maintenance, natural disasters and acts of terrorism, or war. You assume full
                            responsibility and risk of loss of private information resulting from the downloading, printing and/or accessing of your 
                            records or any other Content via the Portal, which includes, but is not limited to loss of privacy of such records.  
                            Your Practice assumes no accountability and disclaims all liability resulting from inaccuracies or inaccessibility in any 
                            software, communication lines, the Internet, your Internet Service Provider (ISP), or technical issues originating from the 
                            computer or device that you use to access the Portal. In the event that the Portal is unavailable, there are other methods of 
                            contact available to you, such as the telephone, or visiting the clinic during regular business hours.  Your Practice 
                            makes no guarantees on the completeness, accuracy, consistency, or currency of the information available to you on the Portal.
                     </Text>
                      <Text>
                            <Text style={appStyles.bold}>Limitations of Liability</Text>
                            NEITHER YOUR PRACTICE NOR ANY OF ITS LICENSORS, AGENTS, CONTRACTORS, OR SUBCONTRACTORS SHALL BE LIABLE 
                            FOR ANY DIRECT, INDIRECT. INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR 
                            ACCESS, USE OR INABILITY TO USE THE PORTAL, OR ANY ERRORS OR OMISSIONS IN THE CONTENT, WHETHER BASED ON 
                            WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY AND WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH 
                            DAMAGES. YOU AGREE AND ACKNOWLEDGE THAT YOUR SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO ANY DEFECT IN OR 
                            DISSATISFACTION WITH THE PORTAL IS TO CEASE TO USE THE PORTAL.
                            YOUR PRACTICE NOR ANY OF ITS LICENSORS, AGENTS, CONTRACTORS, OR SUBCONTRACTORS SHALL BE LIABLE  
                            also expressly disclaims any and all liability for ANY INADVERTENT LOSS OF DATA TO OR FROM THE PORTAL OR DAMAGE TO 
                            COMPUTER OR MEDIA AS A RESULT ERRORS CAUSED BY HUMAN AND/OR MACHINE ERRORS, OMISSIONS, OR DELAYS.  YOU UNDERSTAND AND AGREE 
                            THAT USE OF OR CONNECTION THROUGH THE INTERNET IS INHERITENTLY INSECURE AND THAT USING THE INTERNET TO CONNECT TO THE PATIENT 
                            PORTAL PROVIDES OPPORTUNITY FOR UNAUTHORIZED ACCESS BY A THIRD PARTY TO COMPUTER SYSTEMS, MOBILE DEVICES, NETWORKS AND ANY 
                            AND ALL INFORMATION STORED THEREIN.
                            THE USE OF THE PORTAL IS SOLELY AT YOUR OWN RISK. ALL INFORMATION, INCLUDING ANY CONTENT, IS PROVIDED “AS IS”, “AS AVAILABLE”,
                            AND WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED. FACILITY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, 
                            INCLUDING, WITHOUT LIMITATION, THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT OR ANY 
                            ARISING FROM A COURSE OF DEALING, USAGE, OR TRADE FACILITY. THE FACILITY MAKES NO WARRANTY 
                            THAT THE PORTAL WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE
                      </Text>
                      <Text style={appStyles.bold}>*** IF YOU DO NOT AGREE TO OUR TERMS, PLEASE IMMEDIATELY DISCONTINUE USE OF THIS PORTAL ***</Text>
                       {state.sendSuccess ? MessageDisplay('success','Terms of Use Submitted Sucessfully') : <View></View> }              
                        <>
                            <Button icon="content-save" mode="contained" onPress={submitForm} compact style={{margin:5}}>
                               Agree
                            </Button>             
                            <Button icon="content-save" mode="contained" onPress={closeDialog} compact style={{margin:5}}>
                                Cancel
                            </Button>            
                         
                        </>
                  
                 </ScrollView>
           
    );
 }

export default TermsofUse;
//=============================================================================