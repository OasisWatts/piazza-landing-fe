'use client'

import React from 'react';

export default function PrivacyPolicy() {
    const OnClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        let MemuData = (e.target as HTMLAnchorElement).hash;
        const IdMatchedPage = document.querySelector(MemuData);

        IdMatchedPage?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative">
            <div className="pt-28 pb-40 mx-5 md:mx-auto max-w-2xl">
                <h1 className="md:text-center text-3xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-[4rem] md:mb-[5rem]" data-aos="zoom-y-out">
                    Privacy Policy</h1>
                <div className="md:text-sm text-xs text-gray-700" data-aos="zoom-y-out" data-aos-delay="300">
                    <div className="font-bold"> Last updated June 12, 2024 </div>
                    <div>
                        This privacy notice for Piazza("we","us", or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</div>
                    <div>
                        <div className="mt-3 ml-3">
                            - Visit our website at <a href="https://www.piazza.run">http://www.piazza.run</a>, or any websie of ours that links to this privacy notice
                        </div>
                        <div className='mt-3 ml-3'>
                            - Download and use our mobile application (Piazza), or any other application of ours that links to this privacy notice
                        </div>
                        <div className='mt-3 ml-3'>
                            - Engage with us in other related ways, including any sales, marketing, or events
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>Questions or concerns?</p>
                        Reading this privacy notice will help you understand your privacy rights and choices.
                        If you do not agree with our policies and practices, please do not use our Services.
                        If you still have any questions or concerns, please contact us at piazzabrowser@gmail.com.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12'> Summary of Key Points</div>
                    <div className='font-bold mt-3'>
                        This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>What personal information do we process?</p>
                        When you visit, use, or navigate our Services, we may process personal information depending on how you interect with us and the Services, the choices you make, and the products and features you use.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>Do we process any sensitive personal information?</p>
                        We do not process sensitive personal information.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>Do we collect any information from third parties?</p>
                        We do not collect any information from third parties.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'> How do we process your information</p>
                        We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>In what situations and with which parties do we share personal information?</p>
                        We may share information in specific situations and with specific third parties.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'> How do we keep your information safe?</p>
                        We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>What are your rights?</p>
                        Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold mr-3'>How do you exercise your rights?</p>
                        The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12'> Table of Contents</div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        1. <a href="#pp1" className='underline' onClick={OnClickMenu}>
                            What Information Do We Collect?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        2. <a href="#pp2" className='underline' onClick={OnClickMenu}>
                            How Do We Process Your Information?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        3. <a href="#pp3" className='underline' onClick={OnClickMenu} >
                            What Legal Bases Do We Reply on to Process Your Personal Information?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        4.<a href="#pp4" className='underline' onClick={OnClickMenu} > When and with Whom Do We Share Your Personal Information?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        5.<a href="#pp5" className='underline' onClick={OnClickMenu} > How Do We Handle Your Social Logins?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        6.<a href="#pp6" className='underline' onClick={OnClickMenu} > How Long Do We Keep Your Information?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        7.<a href="#pp7" className='underline' onClick={OnClickMenu} > How Do We Keep Your Information Safe?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        8.<a href="#pp8" className='underline' onClick={OnClickMenu} > What are Your Privacy Rights?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        9.<a href="#pp9" className='underline' onClick={OnClickMenu} > Controls for DO-NOT-TACK Features
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        10.<a href="#pp10" className='underline' onClick={OnClickMenu} > Do United States Residents Have Specific Privacy Rights?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        11.<a href="#pp11" className='underline' onClick={OnClickMenu} > Do Other Regions Have Specific Privacy RIghts?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        12.<a href="#pp12" className='underline' onClick={OnClickMenu} > Do We Make Updates to This Notice?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        13.<a href="#pp13" className='underline' onClick={OnClickMenu} > How Can You Contact Us About This Notice?
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        14.<a href="#pp14" className='underline' onClick={OnClickMenu} > How Can You Review, Update, Or Delete The Data We Collect from You?
                        </a>
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp1">
                        1. What Information Do We Collect?
                    </div>
                    <div className='mt-3'>
                        We collect personal information that you voluntarily provide to us when you register on the Services, express an interst in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold inline'>Personal Information Provided by You. </p>
                        The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                    </div>
                    <div className='mt-3 ml-3'>- email address</div>
                    <div className='mt-3 ml-3'>- passwords</div>
                    <div className='mt-3 ml-3'>- usernames</div>
                    <div className='mt-3'>
                        <p className='font-bold inline'>Sensitive Information. </p>
                        We do not process sensitive information.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold inline'>Social Media Login Data. </p>
                        We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called <a href="#pp5" className='underline decoration-2 decoration-violet' onClick={OnClickMenu}> "How Do We Handle Your Social Logins?" </a> below.
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold inline'>Application Data. </p>
                        If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                    </div>
                    <div className='mt-3 ml-3'>
                        - <p className='inline italic'>Mobile Device Access. </p>
                        We may request access or permission to certain features from your mobile device, including your mobile device's social media accounts, camera, and other features. If you with to change our access or permissions, you may do so in your device's settings.
                    </div>
                    <div className='mt-3 ml-3'>
                        - <p className='inline italic'>Push Notifications. </p>
                        We may request to send you push notifications regarding your account or certain features of the application(s). If you with to opt out from receiving these types of communications, you may turn them off in your device's settings.
                    </div>
                    <div className='mt-3'>
                        This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
                    </div>
                    <div className='mt-3'>
                        All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp2">
                        2. How Do We Process Your Information?
                    </div>
                    <div className='mt-3 font-bold'>
                        We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - To facillitate account creation and authentication and otherwise manage user accounts. </p>
                        We may process your information so you can create and log in to your account, as well as keep your account in working order.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - To deliver and facilitate delivery of services to the user. </p>
                        We may process your information to provide you with the requested service.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - To enable user-to-user communications. </p>
                        We may process your information if you choose to use any of offerings that allow for communication with another user.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - To identify usage trends. </p>
                        We may process information about how you use our Services to better understand how they are being used so we can improve them.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - To save or protect an individual's vital interest. </p>
                        We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp3">
                        What Legal Bases Do We Rely on to Process Your Personal Information?
                    </div>
                    <div className='mt-3 italic font-bold underline'>
                        If you are located in the EU or UK, this section applies to you.
                    </div>
                    <div className='mt-3'>
                        The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> Consent. </p>
                        We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> Performance of a Contract. </p>
                        We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> Legitimate Interests. </p>
                        We may process your information where we believe it is necessary for compilance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> Vital Intersets. </p>
                        We may process your information where believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                    </div>
                    <div className='mt-3 italic font-bold underline'>
                        If you are located in Canada, this section applies to you.
                    </div>
                    <div className='mt-3'>
                        We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situationis where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
                    </div>
                    <div className='mt-3'>
                        In some exceptional cases, we may legally permitted under applicable law to process your information without your consent, including, for example:
                    </div>
                    <div className='mt-3 ml-3'>
                        - If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
                    </div>
                    <div className='mt-3 ml-3'>
                        - For investigations and fraud detection and prevention
                    </div>
                    <div className='mt-3 ml-3'>
                        - For business transactions provided certain conditions are met
                    </div>
                    <div className='mt-3 ml-3'>
                        - If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim.
                    </div>
                    <div className='mt-3 ml-3'>
                        - For identifying injured, ill, or deceased persons and communicating with next of kin
                    </div>
                    <div className='mt-3 ml-3'>
                        - If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                    </div>
                    <div className='mt-3 ml-3'>
                        - If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is resonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
                    </div>
                    <div className='mt-3 ml-3'>
                        - If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
                    </div>
                    <div className='mt-3 ml-3'>
                        - If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
                    </div>
                    <div className='mt-3 ml-3'>
                        - If the collection is solely for journalistic, artistic, or literary purposes
                    </div>
                    <div className='mt-3 ml-3'>
                        - If the information is publicaly available and is specified by the regulations
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp4">
                        4. When and with Whom Do We Share Your Personal Information?
                    </div>
                    <div className='mt-3'>
                        <p className='font-bold inline'>Vendors, Consultants, and Other Third-Party Service Providers. </p>
                        We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties. which are designed to helf safequard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
                    </div>
                    <div className='mt-3'>
                        The categories of third parties we may share personal information with are as follows:
                    </div>
                    <div className='mt-3 ml-3'>
                        - User Account Registration & Authentication Services
                    </div>
                    <div className='mt-3'>
                        We may need to share your personal information in the following situations:
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - Business Transfers. </p>
                        We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portioni of our business to another company.
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'> - Other Users. </p>
                        When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see you name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp5">
                        5. How Do We Handle Your Social Logins?
                    </div>
                    <div className='mt-3'>
                        Our services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                    </div>
                    <div className='mt-3'>
                        We will use the information we receive only for the purposes that are decribed in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not reponsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp6">
                        6. How Long Do We Keep Your Information?
                    </div>
                    <div className='mt-3'>
                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                    </div>
                    <div className='mt-3'>
                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, it this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp7">
                        7. How Do We Keep Your Information Safe?
                    </div>
                    <div className='mt-3'>
                        We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However despite our safeguards and efforts to secure your information, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steall, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp8">
                        8. What are Your Privacy Rights?
                    </div>
                    <div className='mt-3'>
                        In some regions (like the EEA, UK, Switzeland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <a href="#pp13" className='inline underline decoration-2 decoration-violet' onClick={OnClickMenu}>"How Can You Contact Us About This Notice?"</a> below.
                    </div>
                    <div className='mt-3'>
                        We will consider and act upon any request in accordance with applicable data protection laws.
                    </div>
                    <div className='mt-3'>
                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
                    </div>
                    <div className='mt-3'>
                        If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                    </div>
                    <div className='mt-3'>
                        <p className='inline font-bold underline'>Withdrawing your consent</p>:
                        If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a href="#pp13" className='inline underline decoration-2 decoration-violet'> "How Can You Contact Us About This Notice?" </a> below.
                    </div>
                    <div className='mt-3'>
                        However, please note that this will not affect the lawfulness of the processing before its withdrawal or, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                    </div>
                    <div className='mt-3 font-bold'>
                        Account Information
                    </div>
                    <div className='mt-3'>
                        If you would at any time like to review or change the information in your account or terminate your account, you can:
                    </div>
                    <div className='mt-3 ml-3'>
                        - Log in to your account settings and update your use account.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Contact us using the contact information provided.
                    </div>
                    <div className='mt-3'>
                        Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some informaiton in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                    </div>
                    <div className='mt-3'>
                        If you have questions or comments about your privacy rights, you may email us at piazzabrowser@gmail.com.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp9">
                        9. Controls for Do-Not-Track Features
                    </div>
                    <div className='mt-3'>
                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track("DNT") features or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                    </div>
                    <div className='mt-3'>
                        California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp10">
                        10. Do United States Residents Have Specific Privacy Rights?
                    </div>
                    <div className='mt-3 font-bold'>
                        Categories of Personal Information We Collect
                    </div>
                    <div className='mt-3'>
                        We have collected the following categories of personal information in the past twelve (12) months:
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>A. Identifiers</p> (Example: Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>B. Internet or other similar network activity</p> (Example: Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements)
                    </div>
                    <div className='mt-3'>
                        We have not collected the following categories of personal information in the past twelve (12) months:
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>A. Personal information as defined in the California Customer Records statute</p> (Example: Name, contact information, education, employment, employment history, and financial information)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>B. Protected classification characteristics under state or federal law</p> (Example: Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>C. Commercial information</p> (Example: Transaction information, purchase history, financial details, and payment information)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>D. Biometric information</p> (Example: Fingerprints and voiceprints)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>E. Geolocation data</p> (Example: Device location)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>F. Audio, electronic, sensory, or similar information</p> (Example: Images and audio, video or call recordings created in connection with our business activities)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>G. Professional or employment-related information</p> (Example: Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>H. Education information</p> (Exmaple: Student records and directory information)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>I. Inferences drawn from collected personal informaion</p> (Exmaple: Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics)
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='font-bold inline'>J. Sensitive personal Information</p>
                    </div>
                    <div className='mt-3'>
                        We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                    </div>
                    <div className='mt-3 ml-3'>
                        - Receiving help through our customer support channels;
                    </div>
                    <div className='mt-3 ml-3'>
                        - Participation in customer surveys or contests; and
                    </div>
                    <div className='mt-3 ml-3'>
                        - Facilitation in the delivery of our Services and to respond to your inquiries.
                    </div>
                    <div className='mt-3'>
                        We will use and retain the collected personal information as needed to provide the Services.
                    </div>
                    <div className='mt-3 font-bold'>
                        Sources of Personal Information
                    </div>
                    <div className='mt-3'>
                        Learn more about the sources of personal information we collect in <a href="#pp1" className='inline underline decoration-2 decoration-violet' onClick={OnClickMenu}>"What Information Do We Collect?"</a>
                    </div>
                    <div className='mt-3 font-bold'>
                        How We Use and Share Personal Information
                    </div>
                    <div className='mt-3'>
                        Learn more about how we use your personal information in the section, <a href="#pp2" className='inline underline decoration-2 decoration-violet' onClick={OnClickMenu}>"How Do We Process Your Information?"</a>
                    </div>
                    <div className='mt-3 font-bold'>
                        Will your information be shared with anyone else?
                    </div>
                    <div className='mt-3'>
                        We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <a href="#pp4" className='inline underlinde decoration-2 decoration-violet' onClick={OnClickMenu}>"When and with Whom Do We Share Your Personal Information?"</a>
                    </div>
                    <div className='mt-3'>
                        We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                    </div>
                    <div className='mt-3'>
                        The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be fround under <a href="#pp" className='inline underline decoration-2 decoration-violet'>"When and with Whom Do We Share Your Personal Information?"</a>
                    </div>
                    <div className='mt-3'>
                        We have shared the following categories of personal information to third parties in the preceding twelve (12) months:
                    </div>
                    <div className='mt-3'>
                        The categories of third parties to whom we shared personal information with are:
                    </div>
                    <div className='mt-3 ml-3'>
                        - User Account Registration & Authentication Services
                    </div>
                    <div className='mt-3 font-bold'>
                        Your Rights
                    </div>
                    <div className='mt-3'>
                        You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>- Right to know </p>whether or not we are processing your personal data
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>- Right to access </p>your personal data
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>- Right to correct </p>inaccuracies in your personal data
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>- Right to request </p>the deletion of your personal data
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>-Right to obtain a copy </p>of the personal data you previously shared with us
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>-Right to non-discrimination </p>for exercising your rights
                    </div>
                    <div className='mt-3 ml-3'>
                        <p className='inline font-bold'>-Right to opt out </p>of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")
                    </div>
                    <div className='mt-3'>
                        Depending upon the state where you live, you may also have the following rights:
                    </div>
                    <div className='mt-3 ml-3'>
                        - Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)
                    </div>
                    <div className='mt-3 ml-3'>
                        - Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Oregon's privacy law)
                    </div>
                    <div className='mt-3 ml-3'>
                        - Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California's privacy law)
                    </div>
                    <div className='mt-3 ml-3'>
                        - Right to opt out of the colletion of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida's privacy law)
                    </div>
                    <div className='mt-3 font-bold'>
                        How to Exercise Your Rights
                    </div>
                    <div className='mt-3'>
                        To exercise these rights, you can contact us by emailing us at piazzabrowser@gmail.com, or by referring to the contact details at the bottom of this document.
                    </div>
                    <div className='mt-3'>
                        Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                    </div>
                    <div className='mt-3 font-bold'>
                        Request Verification
                    </div>
                    <div className='mt-3'>
                        Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                    </div>
                    <div className='mt-3'>
                        If you submit the request through an authorized agent, we may need to collect additional informatioin to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                    </div>
                    <div className='mt-3 font-bold'>
                        Appeals
                    </div>
                    <div className='mt-3'>
                        Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at piazzabrowser@gmail.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                    </div>
                    <div className='mt-3 font-bold'>
                        California "Shine The Light Law"
                    </div>
                    <div className='mt-3'>
                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in th immediately preceding calender year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <a href="#pp13" className='inline underline decoration-2 decoration-violet'> "How Can You Contact Us About This Notice?"</a>
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp11">
                        11. Do Other Regions Have Specific Privacy Rights?
                    </div>
                    <div className='mt-3 font-bold'>
                        Australia and New Zealand
                    </div>
                    <div className='mt-3'>
                        We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).
                    </div>
                    <div className='mt-3'>
                        This privacy notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal informatioin we collect from you, from which sources, for which purposes, and other recipients of your personal information.
                    </div>
                    <div className='mt-3'>
                        If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:
                    </div>
                    <div className='mt-3 ml-3'>
                        - offer you the products or services that you want
                    </div>
                    <div className='mt-3 ml-3'>
                        - respond to or help with your requests
                    </div>
                    <div className='mt-3 ml-3'>
                        - manage your account with us
                    </div>
                    <div className='mt-3 ml-3'>
                        - confirm your identity and protect your account
                    </div>
                    <div className='mt-3'>
                        At any time, you have the right to request access to or correction of your poersonal information, You can make such a request by contacting us by using the contact details provided in the section <a href="#pp14" className='inline underline decoration-2 decoration-violet'>"How Can You Review, Update, or Delete The Data We Collect From You?"</a>
                    </div>
                    <div className='mt-3'>
                        If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commisioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.
                    </div>
                    <div className='mt-3 font-bold'>
                        Republic of South Africa
                    </div>
                    <div className='mt-3'>
                        At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section <a href="#pp14" className='inline underline decoration-2 decoration-violet'>"How Can You Review, Update, or Delete The Data We COllect From You?"</a>
                    </div>
                    <div className='mt-3'>
                        If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:
                    </div>
                    <div className='mt-3 ml-3'>
                        The Information Regulator (South Africa)
                    </div>
                    <div className='ml-3'>
                        General enquiries: enquiries@inforegulator.org.za
                    </div>
                    <div className='ml-3'>
                        Complaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za & POPIAComplaints@inforegulator.org.za
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp12">
                        12. Do We Make Updates to This Notice?
                    </div>
                    <div className='mt-3'>
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" data at the top of this privacy notice. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp13">
                        13. How Can You Contact Us About This Notice?
                    </div>
                    <div className='mt-3'>
                        If you have questions or comments about this notice, you may email us at piazzabrowser@gmail.com or contact us by post at:
                    </div>
                    <div className='mt-3 ml-3'>
                        Piazza
                    </div>
                    <div className='ml-3'>
                        67, Janan-ro
                    </div>
                    <div className='ml-3'>
                        203-104
                    </div>
                    <div className='ml-3'>
                        Seongnam-si, Gyeonggi-do 42988
                    </div>
                    <div className='ml-3'>
                        South Korea
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp14">
                        14. How Can You Review, Update, or Delete The Data We Collect from You?
                    </div>
                    <div className='mt-3'>
                        Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to reiew, update, or delete your personal information, please mail us at piazzabrowser@gmail.com.
                    </div>
                </div>
            </div>
        </section>

    )
}