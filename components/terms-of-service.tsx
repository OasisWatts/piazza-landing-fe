'use client'

import PiazzaLogo from '@/components/ui/logo-piazza';

export default function TermsOfService() {
    const OnClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        let MemuData = (e.target as HTMLAnchorElement).hash;
        const IdMatchedPage = document.querySelector(MemuData);

        IdMatchedPage?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section className="relative">
            <div className="absolute top-5 right-5 md:w-0 md:h-0" data-aos="zoom-y-out">
                <PiazzaLogo height="35" />
            </div>
            <div className="pt-28 pb-40 mx-5 md:mx-auto max-w-2xl">
                <div className="mb-[5rem] md:mb-[8rem] max-md:w-0 max-md:h-0" data-aos="zoom-y-out">
                    <PiazzaLogo height="70" />
                </div>
                <h1 className="md:text-center text-3xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-[4rem] md:mb-[5rem]" data-aos="zoom-y-out">
                    Terms of Service</h1>
                <div className="md:text-sm text-xs text-gray-700" data-aos="zoom-y-out" data-aos-delay="300">
                    <div className="font-bold"> Last updated June 12, 2024 </div>
                    <div>
                        We are Piazza("Company", "we", "us", "our").
                    </div>
                    <div className='mt-3'>
                        We operate, as well as any other related products and services that refer or link to these legal terms (the "Legal Terms")(collectively, the "Services").
                    </div>
                    <div className='mt-3'>
                        You can contact us by email at piazzabrowser@gmail.com.
                    </div>
                    <div className='mt-3'>
                        These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Piazza, concerning your access to and use of the Services. Your agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </div>
                    <div className='mt-3'>
                        Supplemental items and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12'>
                        Table of Contents
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        1. <a href="#pp1" className='underline' onClick={OnClickMenu}>
                            Our Services
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        2. <a href="#pp2" className='underline' onClick={OnClickMenu}>
                            Intellectual Property Rights
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        3. <a href="#pp3" className='underline' onClick={OnClickMenu}>
                            User Representations
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        4. <a href="#pp4" className='underline' onClick={OnClickMenu}>
                            Prohibited Activities
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        5. <a href="#pp5" className='underline' onClick={OnClickMenu}>
                            User Generated Contributions
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        6. <a href="#pp6" className='underline' onClick={OnClickMenu}>
                            Contribution License
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        7. <a href="#pp7" className='underline' onClick={OnClickMenu}>
                            Services Management
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        8. <a href="#pp8" className='underline' onClick={OnClickMenu}>
                            Term and Termination
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        9. <a href="#pp9" className='underline' onClick={OnClickMenu}>
                            Modificatioins and Interruptions
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        10. <a href="#pp10" className='underline' onClick={OnClickMenu}>
                            Governing Law
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        11. <a href="#pp11" className='underline' onClick={OnClickMenu}>
                            Dispute Resolution
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        12. <a href="#pp12" className='underline' onClick={OnClickMenu}>
                            Corrections
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        13. <a href="#pp13" className='underline' onClick={OnClickMenu}>
                            Disclaimer
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        14. <a href="#pp14" className='underline' onClick={OnClickMenu}>
                            Limitations of Liability
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        15. <a href="#pp15" className='underline' onClick={OnClickMenu}>
                            Indemnification
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        16. <a href="#pp16" className='underline' onClick={OnClickMenu}>
                            User Data
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        17. <a href="#pp17" className='underline' onClick={OnClickMenu}>
                            Electronic Communications, Transactions, and Signatures
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        18. <a href="#pp18" className='underline' onClick={OnClickMenu}>
                            Miscellaneous
                        </a>
                    </div>
                    <div className='font-bold mt-3 decoration-violet decoration-2'>
                        19. <a href="#pp19" className='underline' onClick={OnClickMenu}>
                            Contact Us
                        </a>
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp1">
                        1. Our Services
                    </div>
                    <div className='mt-3'>
                        The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id="pp2">
                        2. Intellectual Property Rights
                    </div>
                    <div className='mt-3 font-bold'>
                        Our intellectual property
                    </div>
                    <div className='mt-3'>
                        We are the owner or the license of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                    </div>
                    <div className='mt-3'>
                        Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                    </div>
                    <div className='mt-3'>
                        The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
                    </div>
                    <div className='mt-3 font-bold'>
                        Your use of our Services
                    </div>
                    <div className='mt-3'>
                        Subject to your compilance with these Legal Terms, including the <a href="#pp4" className='inline underline decoration-2 decoration-violet'>"Prohibited Activities"</a>  section below, we grant you a non-exclusive, non-transferable, revocable license to:
                    </div>
                    <div className='mt-3 ml-3'>
                        - access the Services; and
                    </div>
                    <div className='mt-3 ml-3'>
                        - download or print a copy of any portion of the Content to which you have properly gained access.
                    </div>
                    <div className='mt-3'>
                        solely for your personal, non-commercial use or internal business purpose.
                    </div>
                    <div className='mt-3'>
                        Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                    </div>
                    <div className='mt-3'>
                        If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please contact by email: piazzabrowser@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                    </div>
                    <div className='mt-3'>
                        We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                    </div>
                    <div className='mt-3'>
                        Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                    </div>
                    <div className='mt-3 font-bold'>
                        Your submissions
                    </div>
                    <div className='mt-3'>
                        Please review this section and the <a href="#pp4" className='inline underline decoration-2 decoration-violet'>"Prohibited Activities"</a>  section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                    </div>
                    <div className='mt-3'>
                        <p className='inline font-bold'>Submissions: </p> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                    </div>
                    <div className='mt-3'>
                        <p className='inline font-bold'>You are responsible for what you post or upload: </p> By sending us Submissions through any part of the Services you:
                    </div>
                    <div className='mt-3 ml-3'>
                        - confirm that you have read and agree with our <a href="#pp4" className='inline underline decoration-2 decoration-violet'>"Prohibited Activities"</a> and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
                    </div>
                    <div className='mt-3 ml-3'>
                        - to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
                    </div>
                    <div className='mt-3 ml-3'>
                        - warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and
                    </div>
                    <div className='mt-3 ml-3'>
                        - warrant and represent that your Submissions do not constitute confidential information.
                    </div>
                    <div className='mt-3'>
                        You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp3'>
                        3. User Representations
                    </div>
                    <div className='mt-3'>
                        By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
                    </div>
                    <div className='mt-3'>
                        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp4'>
                        4. Prohibited Activites
                    </div>
                    <div className='mt-3'>
                        You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </div>
                    <div className='mt-3'>
                        As a use of the Services, you agree not to:
                    </div>
                    <div className='mt-3 ml-3'>
                        - Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Use any information obtained from the Services in order to harass, abuse, or harm another person.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Make improper use of our support services or submit false reports of abuse or misconduct.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Use the Services in a manner inconsistent with any applicable laws or regulations.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Engage in unauthrized framing of or linking to the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Delete the copyright or other proprietary rights notice from any Content.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Attempt to impersonate another user or person or use the username of another user.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").
                    </div>
                    <div className='mt-3 ml-3'>
                        - Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Use a buying agent or purchasing agent to make purchases on the Services.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Make any unauthorized  use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
                    </div>
                    <div className='mt-3 ml-3'>
                        - Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp5'>
                        5. User Generated Contributions
                    </div>
                    <div className='mt-3'>
                        The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp6'>
                        6. Contribution License
                    </div>
                    <div className='mt-3'>
                        You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
                    </div>
                    <div className='mt-3'>
                        By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                    </div>
                    <div className='mt-3'>
                        We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp7'>
                        7. Services Management
                    </div>
                    <div className='mt-3'>
                        We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp8'>
                        8. Term and Termination
                    </div>
                    <div className='mt-3'>
                        These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </div>
                    <div className='mt-3'>
                        If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp9'>
                        9. Modifications and Interruptions
                    </div>
                    <div className='mt-3'>
                        We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                    </div>
                    <div className='mt-3'>
                        We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp10'>
                        10. Governing Law
                    </div>
                    <div className='mt-3'>
                        These Terms shall be governed by and construed in accordance with the laws of South Korea, without regard to its conflict of law principles.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp11'>
                        11. Dispute Resolution
                    </div>
                    <div className='mt-3'>
                        Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration in Seoul, South Korea.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp12'>
                        12. Corrections
                    </div>
                    <div className='mt-3'>
                        There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp13'>
                        13. Disclainer
                    </div>
                    <div className='mt-3'>
                        THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp14'>
                        14. Limitations of Liability
                    </div>
                    <div className='mt-3'>
                        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp15'>
                        15. Indemnification
                    </div>
                    <div className='mt-3'>
                        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) user of the Services; (2) breach of these Legal Terms; (3) and breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this Indemnification upon becoming aware of it.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp16'>
                        16. User Data
                    </div>
                    <div className='mt-3'>
                        We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp17'>
                        17. Electronic Communications, Transactions, and Signatures
                    </div>
                    <div className='mt-3'>
                        Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp18'>
                        18. Miscellaneous
                    </div>
                    <div className='mt-3'>
                        These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses  you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                    </div>
                    <div className='font-bold text-lg mt-7 md:mt-12' id='pp19'>
                        19. Contact Us
                    </div>
                    <div className='mt-3'>
                        In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                    </div>
                    <div className='mt-3 ml-3'>
                        piazzabrowser@gmail.com
                    </div>
                </div>
            </div>
        </section>
    )
}