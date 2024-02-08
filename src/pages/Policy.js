import React, { useRef } from "react";
import './Policy.css';

function Policy () {

    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);
    const targetRef5 = useRef(null);
    const targetRef6 = useRef(null);
    const targetRef7 = useRef(null);
    const targetRef8 = useRef(null);
    const targetRef9 = useRef(null);

    const navbarHeight = 145;

    const scrollToTarget = (targetRef) => {
        if (targetRef) {
            const offset = targetRef.current.offsetTop - navbarHeight;

            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <section className="policy" style={{paddingTop: `${navbarHeight}px`}}>
                <div className="policy-title">
                    <h1>Chinese Language School, Northern Ireland (CLSNI)<br />
                        Safeguarding Statement and Policies</h1>
                </div>
                <div className="policy-table-of-content">
                    <h3>Section A - Safeguarding Statement and Policy</h3>
                    <ol>
                        <li><button onClick={() => scrollToTarget(targetRef1)}>Safeguarding Statement</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef2)}>Aims of the Safeguarding Policy</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef3)}>Roles and responsibilities</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef4)}>Recruitment and Training of Teachers, and Volunteers</button></li>
                    </ol>
                    <h3>Section B - Policies</h3>
                    <ol>
                        <li><button onClick={() => scrollToTarget(targetRef5)}>Equal Opportunities Policy</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef6)}>Child Protection Policy</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef7)}>Code of Behaviour</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef8)}>Confidentiality, Complaints and Grievance Procedures</button></li>
                        <li><button onClick={() => scrollToTarget(targetRef9)}>Review</button></li>
                    </ol>
                </div>
                <div className="policy-main">
                    <div className="section-a">
                        <h2>Section A - Safeguarding Statement and Policy</h2>
                        <h3 ref={targetRef1}>1. Safeguarding Statement</h3>
                        <p>Chinese Language School, Northern Ireland is committed to safeguarding all children, young people and vulnerable adults that come into contact with our work. We believe that all children, young people and vulnerable adults have an equal right to protection from abuse, regardless of their age, race, religion, ability, gender, language, background or sexual identity and consider the welfare of the child/ young person / vulnerable adult is paramount.</p>
                        <p>We will take every reasonable step to ensure that children, young people and vulnerable adults are protected where our staff and associates are involved in the delivery of our work. All suspicions and allegations of abuse will be taken seriously and responded to swiftly and appropriately.</p>
                        <p>We enable all our teachers and volunteers and those who work with us to make informed and confident decisions regarding safeguarding. We expect everyone (teachers, volunteers, members of Management Committee and anyone working on behalf of the CLSNI) to have read, understood and adhere to this policy and related procedures.</p>

                        <h3 ref={targetRef2}>2. Aims of the Safeguarding Policy</h3>
                        <p>The CLSNI will take every reasonable step to ensure that children, young people and vulnerable adults are protected where:</p>
                        <ol>
                            <li>our own teachers / volunteers are directly involved in a classroom-teaching, a project or a programme.</li>
                            <li>we broker the relationship between a school/ young person’s setting/community venue and organisation.</li>
                            <li>we contract an organisation to work with a school/ young people’s/ community setting.</li>
                            <li>we work in partnership with another organisation or agency.</li>
                        </ol>
                        <p>We will endeavour to safeguard children, young people and vulnerable adults by:</p>
                        <ol>
                            <li>valuing them, listening to and respecting them.</li>
                            <li>adopting this policy and adhering to our associated procedures and code of conduct for teachers and volunteers.</li>
                            <li>recruiting all teachers and volunteers safely by ensuring that all the necessary checks are made.</li>
                            <li>sharing information about safeguarding and child protection with children, parents, school teachers and volunteers, community workers, carers and staff.</li>
                            <li>sharing concerns with agencies who need to know involving children, school staff, community workers, carers and parents appropriately.</li>
                            <li>providing effective management of teachers and volunteers through supervision, support and training.</li>
                        </ol>

                        <h3 ref={targetRef3}>3. Roles and Responsibilities</h3>
                        <p>The Designated person within the CLSNI responsible for Safeguarding and Child Protection is the Vice-chairperson of the Management Committee. In the Vice-chairperson’s absence the role will be undertaken by an appointed member of the Management Committee.</p>
                        <p>The role of the Designated Person is to:</p>
                        <ol>
                            <li>assume overall responsibility for safeguarding and child protection for the CLSNI.</li>
                            <li>help the rest of the CLSNI understand the key issues in relation to safeguarding and the cultural / education sectors.</li>
                            <li>establish contact with the senior member of social services responsible for child protection in the local area.</li>
                            <li>be a point of contact within the organisation for teachers and volunteers, management committee, partners and associates in relation to safeguarding and child protection.</li>
                            <li>be aware of local statutory safeguarding procedures and networks.</li>
                            <li>make decisions about safeguarding and child protection.</li>
                            <li>receive and assess information from teachers and volunteers who have a child protection concern.</li>
                            <li>report the issue to the Safeguarding Officer/ within the school/ organisation where the events were taking place.</li>
                            <li>make a formal referral to a statutory child protection agency or the police without delay.</li>
                            <li>record the concern and action in the child protection log.</li>
                        </ol>
                        <p>It is not the role of the Designated Person or the CLSNI to decide whether abuse has taken place or not. The responsibility of the Designated Person or the CLSNI is to ensure that concerns are shared and appropriate action taken.</p>

                        <h3 ref={targetRef4}>4. Recruitment and Training of Teachers, and Volunteers</h3>
                        <h4>i. Job Description/Person Specification and Advertising</h4>
                        <ol>
                            <li>A detailed job description and person specification will be drawn up. This will clearly define the role of the position, the tasks and skills needed and the type of person most suited to the role.</li>
                            <li>An appropriate length of time will be required to place advertisements in Chinese community groups, to give applicants time to prepare for interview, to conduct background checks and to take up references.</li>
                            <li>As part of the application process, all applicants must complete an application form where they are asked about previous experience of working with children, young people and vulnerable adults. Included in this form is a declaration stating that there is no reason why they should not be considered suitable for working with children, young people and vulnerable adults.</li>
                            <li>All information is treated with total confidentiality and fairness.</li>
                        </ol>
                        <h4>ii. Pre-selection Checks</h4>
                        <ol>
                            <li>If necessary, consent must be obtained from an applicant to seek information from Access N.I..</li>
                            <li>Two confidential referees. These referees must be taken up and confirmed through telephone contact.</li>
                            <li>If necessary, evidence of identity (passport or driving licence photograph), supported by original birth/marriage certificate, utility bill to confirm address and documents with National Insurance number for verifications.</li>
                        </ol>
                        <h4>iii. Interview and Induction</h4>
                        <p>All teachers and volunteers are required to undergo an interview carried out to acceptable protocol and recommendations. All teachers and volunteers should receive formal or informal induction, during which:</p>
                        <ol>
                            <li>their qualifications should be substantiated.</li>
                            <li>the job requirements and responsibilities should be clarified.</li>
                            <li>they are made aware of the CLSNI’s safeguarding policy and procedures.</li>
                            <li>training needs (if any) are identified.</li>
                            <li>all teachers and volunteers must be checked by the Access N.I. before they are confirmed in the position (if they will be working with children, young people or vulnerable adults on a weekly basis).</li>
                        </ol>
                        <h4>iv. Training</h4>
                        <p>In addition to pre-selection checks, the safeguarding process includes training after recruitment to help teachers / volunteers to:</p>
                        <ol>
                            <li>ensure their good practise is likely to protect them from false allegations.</li>
                            <li>recognise their responsibilities and report any concerns about suspected poor practice or possible abuse.</li>
                            <li>respond to concerns expressed by a child, young person or vulnerable adult.</li>
                            <li>work safely and effectively with children, young people or vulnerable adults.</li>
                        </ol>
                        <h4>v. Responding to Allegations or Suspicions</h4>
                        <p>If a member of teachers or volunteers has any reason to suspect that a child, young person or vulnerable adult is being subjected to physical, emotional or sexual abuse, then these steps must be followed:</p>
                        <ol>
                            <li>report the matter to the Designated Officer.</li>
                            <li>the Designated Officer will assess the nature of the suspicions or the disclosure.</li>
                            <li>the Designated Officer will consult the relevant Officer at the venue (ie. School, theatre, community centre etc) involved, or contact social services.</li>
                            <li>CLSNI teachers / volunteers must not attempt to investigate the matter themselves. This is the responsibility of social services and / or the police.</li>
                            <li>if an allegation is made against a member of the CLSNI teachers or volunteers , the CLSNI will act swiftly and there will either be a criminal investigation, a child protection investigation and / or a disciplinary or misconduct investigation.</li>
                        </ol>
                        <h4>vi. Whistle Blowing Policy</h4>
                        <p>All teachers and volunteers are assured that they can disclose confidential information relating to unacceptable behaviour by other members of teachers or volunteers.</p>
                        <h4>vii. Images and Documentation</h4>
                        <p>The collection of images for promotional purposes by the CLSNI teachers / volunteers or those authorised to do so on the CLSNI’s behalf, is acceptable providing permission has been granted by the individuals who will be photographed/videoed.</p>
                        <p>Adults (including parents / guardians of children below the age of consent) and young people (over the age of consent) should be aware of:</p>
                        <ol>
                            <li>the purpose for which the images will be used.</li>
                            <li>the length of time that they will be used for or that the use may be for an indefinite period.</li>
                            <li>good practice is that permission is not requested for any period longer than two years.</li>
                        </ol>
                        <p>Images should not be stored on the hard drive of PCs or laptops beyond the duration of the project. Even during this period, it is recommended that they are stored on removable storage devices such as pen drives / CDs.</p>
                        <p>Once the project has been completed, then the images should be dated and archived. They should be stored in a locked cabinet or drawer. They should be erased / destroyed as soon as there is no further use for them.</p>
                    </div>
                    <div className="section-b">
                        <h2>Section B - Policies</h2>
                        <h3 ref={targetRef5}>1. Equal Opportunities Policy</h3>
                        <h4>Statement of Policy</h4>
                        <p>The aim of this policy is to communicate the commitment of the members of the Management Committee to the promotion of equality of opportunity in Chinese Language School, Northern Ireland.</p>
                        <p>It is our policy to treat equally all members, teachers, volunteers and parents irrespective of:</p>
                        <ol>
                            <li>Gender, marital or family status</li>
                            <li>Religious beliefs or political opinion</li>
                            <li>Disability</li>
                            <li>Race of ethnic origin</li>
                            <li>Nationality</li>
                            <li>Sexual Orientation</li>
                        </ol>
                        <p>We are opposed to all forms of unlawful and unfair discrimination. All members, teachers, volunteers and job applicants (actual and potential) will be treated fairly and selection for employment, promotion, training or any other benefit will be on the basis of aptitude and ability.</p>
                        <p>We are committed to:</p>
                        <ol>
                            <li>Preventing any form of direct and indirect discrimination or victimisation</li>
                            <li>Promoting equal opportunities for men and women</li>
                            <li>Securing fair participation for Catholics and Protestants</li>
                            <li>Promoting equal opportunities for people with disabilities</li>
                            <li>Promoting equal opportunities for ethnic minorities</li>
                            <li>Promoting a good and harmonious working environment where all men and women are treated with respect and dignity and in which no form of intimidation or harassment will be tolerated.</li>
                            <li>Fulfilling all legal obligations under relevant legislation and associated Codes of Practice.</li>
                            <li>Taking any necessary positive/affirmative action</li>
                        </ol>
                        <h4>Implementation of Policy</h4>
                        <p>The Management Committee has responsibility for the effective implementation of this policy. Each member (Director) also has responsibility to abide by the policy and help create the environment which is its objective.</p>
                        <p>In order to implement this policy we will ensure that appropriate training and guidance will be provided for members, teachers and volunteers and that adequate resources are made available to fulfil the aims of this policy.</p>
                        <h4>Monitoring and Review</h4>
                        <p>Progress on implementing this policy will be reviewed annually by the Management Committee.</p>
                        <h4>Complaints</h4>
                        <p>Teachers and Volunteers who believe that they have suffered any form or discrimination, harassment or victimisation as part of their work with Chinese Language School, Northern Ireland are entitled to raise the matter with a member of the Management Committee, who will investigate the complaint confidentially, appropriately and without delay. When the Management Committee has reached a decision on a complaint the complainant will be notified promptly.</p>
                        <p>These internal procedures do not replace or detract from the right of teachers and volunteers to pursue complaints under any relevant discrimination legislation.</p>
                        <p>Every effort will be made to ensure that teachers and volunteers making complaints will not be victimised. Any complaint or victimisation will be dealt with seriously, promptly and confidentially.</p>

                        <h3 ref={targetRef6}>2. Child Protection Policy</h3>
                        <p>Chinese Language School, Northern Ireland is committed to creating and maintaining the safest possible environment for children and young people involved in any of its activities. We recognise the unique status of children and young people and seek to ensure that they are respectfully treated as individuals. All teachers and volunteers within the CLSNI, paid and voluntary, accept that the welfare of the child is paramount.</p>
                        <p>We do this by:</p>
                        <ol>
                            <li>Recognizing that all children have the right to freedom from abuse.</li>
                            <li>Ensuring that all our teachers, volunteers and parents are carefully selected and accept responsibility for helping to prevent the abuse of children in their care.</li>
                            <li>Responding swiftly and appropriately to all suspicions or allegations of abuse, and providing parents and children with the opportunity to voice any concerns they may have.</li>
                            <li>All allegations of abuse are taken seriously and responded to appropriately.</li>
                            <li>Appointing a Designated Officer who will take specific responsibility for child safety and act as the main point of contact for parents, children and outside agencies.</li>
                            <li>Ensuring access to confidential information is restricted to the Designated Officer or the appropriate external authorities.</li>
                            <li>Reviewing the effectiveness of our Child Protection Policy annually, and that it is endorsed and approved by the Management Committee.</li>
                            <li>The definition of ‘child’ or ‘young person’ relates to anyone under the age of 18, and also to those above the age of 18 who are vulnerable for reasons of mental and physical ability.</li>
                        </ol>
                        <p>(A separate more detailed Child Protection Policy is available)</p>

                        <h3 ref={targetRef7}>3. Code of Behaviour</h3>
                        <p>Chinese Language School, Northern Ireland expects everyone who works with us (teachers, volunteers and partners) to follow the guidelines that follow in all aspects of their activities connected with the work of the CLSNI.</p>
                        <ol>
                            <li>Treat everyone with respect</li>
                            <li>Provide an example you wish others to follow</li>
                            <li>Respect people’s right to personal privacy</li>
                            <li>Provide access for people to talk about any concerns they may have</li>
                            <li>Support children, young people or vulnerable adults to create a safe environment where they feel comfortable to talk about attitudes or behaviours they do not like.</li>
                            <li>Avoid situations that compromise your relationship with children, young people or vulnerable adults, which are unacceptable within a relationship of trust.</li>
                            <li>Remember that someone else might misinterpret your actions, no matter how well intentioned.</li>
                            <li>Recognise that caution is required even in sensitive moments of listening such as when dealing with bullying, bereavement or abuse.</li>
                            <li>Do not have any inappropriate physical or verbal contact with others.</li>
                            <li>Do not jump to conclusions about others without checking the facts.</li>
                            <li>Do not show favouritism to any individual</li>
                            <li>Do not make suggestive remarks or gestures, even in fun.</li>
                            <li>Do not let suspicion, disclosure or allegation of abuse, go unrecorded or unreported.</li>
                        </ol>

                        <h3 ref={targetRef8}>4. Confidentiality, Complaints and Grievance Procedures</h3>
                        <h4>Confidentiality Policy</h4>
                        <p>Chinese Language School, Northern Ireland works to deliver high-quality teaching and other services. It is vital to share relevant information – but this must be done in the proper way.</p>
                        <p>The principle of confidentiality is followed in all the work of Chinese Language School, Northern Ireland. This means that we treat all information safely and professionally.</p>
                        <p>A policy of confidentiality allows us to be open about our own work, and improve our product, while protecting those who work with us, those who see and take part in our work, and other groups or organisations.</p>
                        <h4>Complaints Procedure</h4>
                        <p>Chinese Language School, Northern Ireland strives for high standards in all aspects of its work, and using the policies and procedures in place, aims to be fair at all times and provide satisfaction to anyone using the services it provides. The teachers and volunteers who represent the CLSNI are committed to high standards of conduct and service at all times. This policy will be made available to members of the public on request.</p>
                        <p>Should complaints arise it is Management Committee’s policy to deal with these complaints quickly and efficiently.</p>
                        <p>A complaint is defined as a user of Chinese Language School, Northern Ireland or its services, being unhappy with the service they have received and the user wishing to make their unhappiness known to a representative of the CLSNI either verbally or in writing.</p>
                        <p>Complaints may be made verbally or in writing, and the procedures are as follows:</p>
                        <h5>Verbal Complaint</h5>
                        <p>The complainant should ask to speak to the most senior member of CLSNI available. The member of CLSNI will take details of the complaint, identifying both the nature of the complaint and, if appropriate, the individual against whom the complaint is being made. Any complaint against an individual will be dealt with in a confidential manner.</p>
                        <h5>Written Complaint</h5>
                        <p>The complainant should write to the Designated Officer of CLSNI giving full details of their complaint and, if appropriate, who their complaint relates to.</p>
                        <h5>Procedure</h5>
                        <p>All complaints, written or verbal, are logged and the Designated Officer will formally acknowledge receipt of the complaint, and provide a written response to the complainant within 4 working days, detailing where necessary the further course of action to be taken. Where it is not possible to provide a full response within this time frame, a letter will be sent to the complainant outlining progress and indicating when a response is likely to be forthcoming.</p>
                        <p>If the complainant is satisfied with the response, the matter will be considered to have been closed. If the complainant remains dissatisfied with the explanation, or course of action, he/she can appeal to the Chairperson of the Management Committee.</p>
                        <p>The Chair will review the complaint and either decides that the action proposed is adequate or that a different course of action should be adopted. The outcome of this review will normally be communicated in writing to the complainant within 15 working days of the appeal being lodged.</p>
                        <p>If the matter remains unresolved, he/she has the right to consult a third party arbitrator and an agreed process will be put in place.</p>
                        <p>This complaints procedure is reviewed annually by the Management Committee at shorter interval should legislation of good practice require it.</p>
                        <h4>Procedure</h4>
                        <p>Chinese Language School, Northern Ireland has a Grievance Procedure in place to ensure all staff and associates are given a fair hearing concerning any grievance that they may wish to raise.</p>
                        <p>All teachers and volunteers have the opportunity to state their case and to have the right to appeal against any decision or action.</p>
                        <p>Chinese Language School, Northern Ireland will aim to find an equitable solution to any grievance and will work with all parties concerned to ensure the correct action is taken.</p>
                        <ol>
                            <li>A teacher or volunteer with a grievance will raise the matter with the Designated Officer, in writing</li>
                            <li>The teacher and volunteer will be invited to a meeting to discuss the issue, usually, where circumstances allow, within three working days of notification.</li>
                            <li>The teacher and volunteer and the Designated Officer may explore the issues raised by the teacher or volunteer at the meeting by speaking to other teachers and volunteers or external contacts</li>
                            <li>Following the meeting, the Designated Officer will respond to the grievance in writing within three working days. If it is not possible to respond within this time, the teacher and volunteer must be given an explanation for the delay and told when a response can be expected</li>
                            <li>If the person raising the grievance is unhappy with the outcome of the investigation or if the grievance is against the Designated Officer, the teacher or volunteer can appeal by raising the grievance in writing to the chairperson of the Management Committee</li>
                            <li>The teacher and volunteer will be invited to a meeting to discuss the issue, usually, where circumstances allow, within five working days of notification</li>
                            <li>The Chair may explore the issues raised by speaking to other teacher or volunteer or external contacts</li>
                            <li>Following the meeting the Chair will respond to the grievance in writing within three working days. If it is not possible to respond within this time, the teacher / volunteer must be given an explanation for the delay and told when a response can be expected</li>
                            <li>Where the teacher or volunteer raising the grievance is still unhappy with the outcome they can appeal by raising their grievance in writing with an external organisation, such as a legal institution or employment specialist.</li>
                        </ol>

                        <h3 ref={targetRef9}>5. Review</h3>
                        <p>The CLSNI is committed to reviewing these policy and procedures annually, updating the action plan as appropriate.</p>
                        <h4>Contact details of designated officer:</h4>
                        <p>YuanYuan McCoo Zhang</p>
                        <p>Chinese Language School, Northern Ireland<br />
                            1 Stranmillis Embankment<br />
                            Belfast, BT7 1GB
                        </p>
                        <p>Tel: 02890 288222<br />
                            Email: Chinese.school.ni@gmail.com
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Policy;