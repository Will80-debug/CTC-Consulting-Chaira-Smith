#!/usr/bin/env python3
"""
LLI Consulting Group - Microaggression Awareness Workbook Generator
Creates a 9-page professional workbook with QR codes for video content
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
import qrcode
from io import BytesIO
import requests

# LLI Brand Colors
LLI_ORANGE = colors.HexColor('#EA580C')
LLI_TEAL = colors.HexColor('#14B8A6')
LLI_BLACK = colors.HexColor('#1F2937')

def create_qr_code(data="Video Content - Scan to View"):
    """Generate QR code as an image"""
    qr = qrcode.QRCode(version=1, box_size=10, border=2)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    
    buffer = BytesIO()
    img.save(buffer, format='PNG')
    buffer.seek(0)
    return buffer

def download_image(url, filename):
    """Download image from URL"""
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            return filename
    except:
        pass
    return None

def create_header_footer(canvas, doc):
    """Add header and footer to each page"""
    canvas.saveState()
    
    # Footer
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.grey)
    canvas.drawCentredString(letter[0]/2, 0.5*inch, 
        "© LLI Consulting Group LLC - Microaggression Awareness Workbook")
    canvas.drawRightString(letter[0] - 0.75*inch, 0.5*inch, 
        f"Page {doc.page}")
    
    canvas.restoreState()

def create_workbook():
    """Generate the complete 9-page workbook"""
    
    filename = "/home/user/webapp/LLI_Microaggression_Awareness_Workbook.pdf"
    doc = SimpleDocTemplate(filename, pagesize=letter,
                           topMargin=0.75*inch, bottomMargin=0.75*inch,
                           leftMargin=0.75*inch, rightMargin=0.75*inch)
    
    # Container for the 'Flowable' objects
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=LLI_ORANGE,
        spaceAfter=12,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=LLI_TEAL,
        spaceAfter=10,
        spaceBefore=14,
        fontName='Helvetica-Bold'
    )
    
    subheading_style = ParagraphStyle(
        'CustomSubHeading',
        parent=styles['Heading3'],
        fontSize=13,
        textColor=LLI_BLACK,
        spaceAfter=8,
        spaceBefore=10,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['BodyText'],
        fontSize=11,
        spaceAfter=10,
        alignment=TA_JUSTIFY,
        leading=14
    )
    
    bullet_style = ParagraphStyle(
        'CustomBullet',
        parent=styles['BodyText'],
        fontSize=10,
        leftIndent=20,
        spaceAfter=6,
        leading=13
    )
    
    # Download images
    image1_url = "https://sspark.genspark.ai/cfimages?u1=OAPw7bYHCoR74KlcwTb%2FPimLzJkRfzTKurARdYaRZMxBZmcgYrSvNaMX27kuB8yM67q%2B9XeeIr3n3lDktEOBWy%2B9679f4hGRp57557ct&u2=vJNguJHGf0g6pTER&width=2560"
    image2_url = "https://sspark.genspark.ai/cfimages?u1=pPel1J81Q%2BQRtDpYHMtxUf8aQpV3FFqJHPg%2FuJt6V1pK0%2FvwOClmqHBP4PiPx%2FgPJuTFNLzCIrc2Y%2Fks2H%2Be%2F5KfDuDcAdFQp%2FPiOhPqhwAeiA%3D%3D&u2=loMDLhJcR4JV26E7&width=2560"
    image3_url = "https://sspark.genspark.ai/cfimages?u1=RiJI2ES1hxo1oq4uCO%2BsGKU1eXRAEqxEyffrpt3xQ0lf3%2BhxqN4o6d%2FBSoxliBTJWAMONriQvyydgck%2Bi7kK%2FQ4lKTruMrlcQnRGzLTnlHF94ynWfY7t0n%2F3DxSFrn3ywemTt8Q2pDb7&u2=doLo5fseuAw0NBIb&width=2560"
    
    download_image(image1_url, "/home/user/webapp/workbook_img1.jpg")
    download_image(image2_url, "/home/user/webapp/workbook_img2.jpg")
    download_image(image3_url, "/home/user/webapp/workbook_img3.jpg")
    
    # ============== PAGE 1: COVER PAGE ==============
    elements.append(Spacer(1, 1*inch))
    
    # Logo
    try:
        logo = Image("/home/user/webapp/lli-logo.png", width=2*inch, height=2*inch)
        logo.hAlign = 'CENTER'
        elements.append(logo)
    except:
        pass
    
    elements.append(Spacer(1, 0.5*inch))
    elements.append(Paragraph("MICROAGGRESSION AWARENESS WORKBOOK", title_style))
    elements.append(Spacer(1, 0.2*inch))
    elements.append(Paragraph("A Practical Guide to Recognition, Response, and Resolution", 
                             ParagraphStyle('Subtitle', parent=body_style, fontSize=14, 
                                          alignment=TA_CENTER, textColor=LLI_TEAL)))
    
    elements.append(Spacer(1, 0.8*inch))
    
    # Add a professional image
    try:
        cover_img = Image("/home/user/webapp/workbook_img1.jpg", width=5*inch, height=3.3*inch)
        cover_img.hAlign = 'CENTER'
        elements.append(cover_img)
    except:
        pass
    
    elements.append(Spacer(1, 0.5*inch))
    elements.append(Paragraph("Based on the LLI Framework: Listen, Learn, Implement", 
                             ParagraphStyle('FrameworkNote', parent=body_style, 
                                          alignment=TA_CENTER, fontSize=12, 
                                          textColor=LLI_BLACK, fontName='Helvetica-Bold')))
    
    elements.append(PageBreak())
    
    # ============== PAGE 2: CONFIDENTIALITY & INTRODUCTION ==============
    elements.append(Paragraph("CONFIDENTIALITY STATEMENT", heading_style))
    
    confidentiality_text = """
    <b>This workbook contains sensitive information and personal reflections.</b><br/><br/>
    
    <b>Confidentiality Agreement:</b><br/>
    By using this workbook, you agree to maintain confidentiality regarding:<br/>
    • Personal stories, experiences, and reflections shared during exercises<br/>
    • Case studies and examples discussed in group settings<br/>
    • Individual responses and assessments completed within this workbook<br/>
    • Any identifying information about colleagues, clients, or community members<br/><br/>
    
    <b>Permitted Use:</b><br/>
    This workbook is for internal professional development purposes only. Content may not be 
    reproduced, distributed, or shared outside of authorized LLI Consulting Group training 
    sessions without explicit written permission.<br/><br/>
    
    <b>Data Privacy:</b><br/>
    Your personal reflections and responses are private. Facilitators and organizational 
    leaders will not access individual workbook content unless you choose to share it voluntarily.<br/><br/>
    
    <b>By proceeding, you acknowledge and agree to these confidentiality terms.</b>
    """
    
    elements.append(Paragraph(confidentiality_text, body_style))
    elements.append(Spacer(1, 0.3*inch))
    
    # Signature line
    elements.append(Paragraph("_" * 60, body_style))
    elements.append(Paragraph("Signature and Date", 
                             ParagraphStyle('SignatureLabel', parent=body_style, 
                                          fontSize=9, textColor=colors.grey)))
    
    elements.append(Spacer(1, 0.4*inch))
    elements.append(Paragraph("INTRODUCTION", heading_style))
    
    intro_text = """
    Welcome to the LLI Consulting Group Microaggression Awareness Workbook. This resource 
    is designed to help individuals and teams develop deeper understanding of microaggressions—
    those brief, everyday exchanges that send denigrating messages to certain individuals 
    because of their group membership.<br/><br/>
    
    <b>The LLI Framework: Listen, Learn, Implement</b><br/>
    This workbook follows our proven three-phase approach to organizational change and 
    individual growth.
    """
    
    elements.append(Paragraph(intro_text, body_style))
    elements.append(PageBreak())
    
    # ============== PAGE 3: UNDERSTANDING MICROAGGRESSIONS ==============
    elements.append(Paragraph("SECTION 1: UNDERSTANDING MICROAGGRESSIONS", heading_style))
    
    # QR Code 1 - Introduction Video
    elements.append(Paragraph("<b>Watch the Introduction Video</b>", subheading_style))
    qr1 = create_qr_code("LLI Workbook - Introduction to Microaggressions")
    qr_img1 = Image(qr1, width=1.5*inch, height=1.5*inch)
    qr_img1.hAlign = 'CENTER'
    elements.append(qr_img1)
    elements.append(Paragraph("<i>Scan QR code to watch: What Are Microaggressions? (5 minutes)</i>", 
                             ParagraphStyle('QRCaption', parent=body_style, fontSize=9, 
                                          alignment=TA_CENTER, textColor=colors.grey)))
    
    elements.append(Spacer(1, 0.2*inch))
    
    section1_text = """
    <b>1.1 Definition and Impact</b><br/>
    Microaggressions are brief and commonplace daily verbal, behavioral, or environmental 
    indignities that communicate hostile, derogatory, or negative slights and insults toward 
    members of marginalized groups. While often unintentional, their cumulative effect can 
    significantly impact workplace culture, psychological safety, and organizational performance.<br/><br/>
    
    <b>Three Types of Microaggressions:</b><br/>
    <b>• Microassaults:</b> Explicit derogatory attacks meant to hurt the intended victim<br/>
    <b>• Microinsults:</b> Subtle communications that convey rudeness and insensitivity<br/>
    <b>• Microinvalidations:</b> Communications that exclude, negate, or nullify thoughts and feelings<br/><br/>
    
    <b>1.2 Common Examples in Professional Settings</b><br/>
    • Assuming someone is in a support role based on their identity<br/>
    • Asking "Where are you really from?"<br/>
    • Complimenting someone for being "articulate" with surprise<br/>
    • Touching someone's hair without permission<br/>
    • Mistaking a professional for support staff<br/>
    • Making assumptions about technical ability based on age or gender<br/>
    • Excluding team members from informal networking opportunities
    """
    
    elements.append(Paragraph(section1_text, body_style))
    
    # Add professional image
    try:
        img1 = Image("/home/user/webapp/workbook_img2.jpg", width=4.5*inch, height=3*inch)
        img1.hAlign = 'CENTER'
        elements.append(Spacer(1, 0.2*inch))
        elements.append(img1)
    except:
        pass
    
    elements.append(PageBreak())
    
    # ============== PAGE 4: LISTEN - RECOGNIZING MICROAGGRESSIONS ==============
    elements.append(Paragraph("SECTION 2: LISTEN - RECOGNIZING MICROAGGRESSIONS", heading_style))
    
    # QR Code 2 - Recognition Strategies
    elements.append(Paragraph("<b>Watch: Recognition Strategies</b>", subheading_style))
    qr2 = create_qr_code("LLI Workbook - Recognizing Microaggressions")
    qr_img2 = Image(qr2, width=1.5*inch, height=1.5*inch)
    qr_img2.hAlign = 'CENTER'
    elements.append(qr_img2)
    elements.append(Paragraph("<i>Scan QR code to watch: How to Recognize Microaggressions (7 minutes)</i>", 
                             ParagraphStyle('QRCaption', parent=body_style, fontSize=9, 
                                          alignment=TA_CENTER, textColor=colors.grey)))
    
    elements.append(Spacer(1, 0.2*inch))
    
    section2_text = """
    <b>2.1 Self-Awareness Assessment</b><br/>
    Recognizing microaggressions begins with honest self-reflection. Consider your own 
    experiences and behaviors.<br/><br/>
    
    <b>Reflection Exercise 1: Personal Experience Inventory</b><br/>
    Take 10 minutes to reflect on these questions. Write your responses in the space below 
    or in a separate journal:
    """
    elements.append(Paragraph(section2_text, body_style))
    
    # Create reflection boxes
    questions = [
        "1. Describe a time when you witnessed or experienced a microaggression:",
        "",
        "2. How did it make you (or the target) feel?",
        "",
        "3. Have you ever unintentionally committed a microaggression? What did you learn?",
        ""
    ]
    
    for q in questions:
        if q:
            elements.append(Spacer(1, 0.1*inch))
            elements.append(Paragraph(q, bullet_style))
        elements.append(Paragraph("_" * 80, body_style))
    
    elements.append(Spacer(1, 0.2*inch))
    
    section2_continued = """
    <b>2.2 Environmental Scan</b><br/>
    Microaggressions don't only occur in interpersonal interactions. They can be embedded 
    in organizational policies, physical spaces, and systemic practices.<br/><br/>
    
    <b>Workplace Environment Checklist:</b><br/>
    □ Do our meeting spaces accommodate different accessibility needs?<br/>
    □ Are diverse voices regularly invited to contribute in meetings?<br/>
    □ Does our imagery and decor reflect the diversity of our community?<br/>
    □ Are professional development opportunities equitably distributed?<br/>
    □ Do our policies account for different cultural practices and religious observances?
    """
    
    elements.append(Paragraph(section2_continued, body_style))
    elements.append(PageBreak())
    
    # ============== PAGE 5: LEARN - UNDERSTANDING IMPACT ==============
    elements.append(Paragraph("SECTION 3: LEARN - UNDERSTANDING IMPACT", heading_style))
    
    section3_text = """
    <b>3.1 The Intent vs. Impact Gap</b><br/>
    One of the most challenging aspects of addressing microaggressions is the gap between 
    intent and impact. Good intentions do not negate harmful impact.<br/><br/>
    
    <b>Key Principle:</b> <i>When someone tells you that you've hurt them, you don't get to 
    decide that you didn't.</i><br/><br/>
    
    <b>3.2 Cumulative Effect</b><br/>
    While a single microaggression might seem minor, the cumulative effect of repeated 
    incidents can lead to:<br/>
    • Decreased psychological safety and wellbeing<br/>
    • Reduced engagement and productivity<br/>
    • Increased stress and health challenges<br/>
    • Higher turnover rates<br/>
    • Damage to organizational culture and reputation<br/><br/>
    
    <b>Research Insight:</b> Studies show that microaggressions can have similar psychological 
    effects as overt discrimination, particularly when experienced regularly over time.
    """
    
    elements.append(Paragraph(section3_text, body_style))
    
    # Add professional image
    try:
        img2 = Image("/home/user/webapp/workbook_img3.jpg", width=5*inch, height=3.3*inch)
        img2.hAlign = 'CENTER'
        elements.append(Spacer(1, 0.2*inch))
        elements.append(img2)
    except:
        pass
    
    elements.append(Spacer(1, 0.3*inch))
    
    section3_exercise = """
    <b>Reflection Exercise 2: Impact Assessment</b><br/>
    Think about a time when your actions or words had an unintended negative impact. 
    How did you respond when you became aware of the impact?
    """
    
    elements.append(Paragraph(section3_exercise, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    
    elements.append(PageBreak())
    
    # ============== PAGE 6: IMPLEMENT - RESPONSE STRATEGIES ==============
    elements.append(Paragraph("SECTION 4: IMPLEMENT - RESPONSE STRATEGIES", heading_style))
    
    # QR Code 3 - Response Techniques
    elements.append(Paragraph("<b>Watch: Effective Response Techniques</b>", subheading_style))
    qr3 = create_qr_code("LLI Workbook - Responding to Microaggressions")
    qr_img3 = Image(qr3, width=1.5*inch, height=1.5*inch)
    qr_img3.hAlign = 'CENTER'
    elements.append(qr_img3)
    elements.append(Paragraph("<i>Scan QR code to watch: How to Respond (8 minutes)</i>", 
                             ParagraphStyle('QRCaption', parent=body_style, fontSize=9, 
                                          alignment=TA_CENTER, textColor=colors.grey)))
    
    elements.append(Spacer(1, 0.2*inch))
    
    section4_text = """
    <b>4.1 If You Experience a Microaggression</b><br/>
    You have options for how to respond. There is no single "correct" response—choose what 
    feels safe and appropriate for your situation.<br/><br/>
    
    <b>Response Options:</b><br/>
    <b>• Immediate Address:</b> "That comment made me uncomfortable. Here's why..."<br/>
    <b>• Seek Clarification:</b> "What did you mean by that?"<br/>
    <b>• Name the Pattern:</b> "I notice this assumption keeps coming up..."<br/>
    <b>• Take Time:</b> "I need to think about what just happened. Can we talk later?"<br/>
    <b>• Seek Support:</b> Talk to a trusted colleague, manager, or HR representative<br/><br/>
    
    <b>4.2 If You Witness a Microaggression</b><br/>
    Allies play a crucial role in creating inclusive environments. When you witness a 
    microaggression:<br/><br/>
    
    <b>Interrupt with Curiosity:</b><br/>
    • "Can you help me understand what you meant by that?"<br/>
    • "I'm concerned about how that might have landed. Can we revisit it?"<br/><br/>
    
    <b>Redirect the Conversation:</b><br/>
    • "Let's refocus on [person's] actual contribution to this project."<br/>
    • "I think we're making an assumption here. Let's check that."<br/><br/>
    
    <b>Follow Up Privately:</b><br/>
    • Check in with the person who experienced the microaggression<br/>
    • Have a learning conversation with the person who committed it
    """
    
    elements.append(Paragraph(section4_text, body_style))
    elements.append(PageBreak())
    
    # ============== PAGE 7: IMPLEMENT - MAKING AMENDS ==============
    elements.append(Paragraph("SECTION 5: IMPLEMENT - MAKING AMENDS", heading_style))
    
    section5_text = """
    <b>5.1 If You Commit a Microaggression</b><br/>
    Everyone makes mistakes. What matters most is how you respond when made aware of harm.<br/><br/>
    
    <b>The 4-Step Accountability Process:</b><br/><br/>
    
    <b>Step 1: Listen Without Defense</b><br/>
    • Resist the urge to explain your intent<br/>
    • Focus on understanding the impact<br/>
    • Avoid centering your feelings of guilt or shame<br/><br/>
    
    <b>Step 2: Acknowledge the Impact</b><br/>
    • "Thank you for telling me. I understand that my comment/action caused harm."<br/>
    • "I appreciate you taking the time to help me understand the impact."<br/><br/>
    
    <b>Step 3: Apologize Sincerely</b><br/>
    • "I apologize for [specific action/statement]."<br/>
    • "I take responsibility for the impact of my words/actions."<br/>
    • Avoid qualifiers like "if" or "but"<br/><br/>
    
    <b>Step 4: Commit to Change</b><br/>
    • "I'm committed to doing better. Here's how I plan to..."<br/>
    • Actually follow through with changed behavior<br/>
    • Do your own learning rather than asking the harmed person to educate you<br/><br/>
    
    <b>What NOT to Say:</b><br/>
    ❌ "I didn't mean it that way."<br/>
    ❌ "You're being too sensitive."<br/>
    ❌ "I have [marginalized identity] friends."<br/>
    ❌ "That's just how I was raised."<br/>
    ❌ "Can you help me understand how I offended you?"
    """
    
    elements.append(Paragraph(section5_text, body_style))
    
    elements.append(Spacer(1, 0.3*inch))
    
    # Practice scenario
    practice_text = """
    <b>Practice Exercise: Crafting Your Apology</b><br/>
    Imagine you made an assumption about a colleague's technical skills based on their age. 
    They addressed it with you privately. Write your response using the 4-step process:
    """
    
    elements.append(Paragraph(practice_text, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    elements.append(Paragraph("_" * 80, body_style))
    
    elements.append(PageBreak())
    
    # ============== PAGE 8: ORGANIZATIONAL CHANGE ==============
    elements.append(Paragraph("SECTION 6: ORGANIZATIONAL IMPLEMENTATION", heading_style))
    
    # QR Code 4 - Organizational Strategies
    elements.append(Paragraph("<b>Watch: Creating Systemic Change</b>", subheading_style))
    qr4 = create_qr_code("LLI Workbook - Organizational Strategies")
    qr_img4 = Image(qr4, width=1.5*inch, height=1.5*inch)
    qr_img4.hAlign = 'CENTER'
    elements.append(qr_img4)
    elements.append(Paragraph("<i>Scan QR code to watch: Building Inclusive Organizations (10 minutes)</i>", 
                             ParagraphStyle('QRCaption', parent=body_style, fontSize=9, 
                                          alignment=TA_CENTER, textColor=colors.grey)))
    
    elements.append(Spacer(1, 0.2*inch))
    
    section6_text = """
    <b>6.1 Moving Beyond Individual Awareness</b><br/>
    While individual awareness is important, lasting change requires organizational commitment 
    and systemic approaches.<br/><br/>
    
    <b>Organizational Strategies for Prevention:</b><br/><br/>
    
    <b>1. Policy and Procedure:</b><br/>
    • Establish clear reporting mechanisms<br/>
    • Create accountability systems for leadership<br/>
    • Include microaggression awareness in harassment policies<br/>
    • Implement restorative justice approaches when appropriate<br/><br/>
    
    <b>2. Training and Development:</b><br/>
    • Regular training for all staff (not just one-time sessions)<br/>
    • Leadership accountability training<br/>
    • Practice-based scenarios and role-playing<br/>
    • Ongoing learning communities and discussion groups<br/><br/>
    
    <b>3. Hiring and Advancement:</b><br/>
    • Review hiring practices for implicit bias<br/>
    • Examine promotion pathways for equity<br/>
    • Ensure diverse representation in leadership<br/>
    • Create mentorship and sponsorship programs<br/><br/>
    
    <b>4. Culture and Environment:</b><br/>
    • Foster psychological safety in team meetings<br/>
    • Regularly audit physical and digital spaces<br/>
    • Celebrate diverse cultural practices and holidays<br/>
    • Create employee resource groups with real support
    """
    
    elements.append(Paragraph(section6_text, body_style))
    
    elements.append(Spacer(1, 0.3*inch))
    
    # Action planning
    action_text = """
    <b>Your Organization's Action Plan</b><br/>
    Based on what you've learned, identify three concrete actions your organization could 
    take to address microaggressions:
    """
    
    elements.append(Paragraph(action_text, body_style))
    elements.append(Paragraph("1. _" + "_" * 75, body_style))
    elements.append(Spacer(1, 0.1*inch))
    elements.append(Paragraph("2. _" + "_" * 75, body_style))
    elements.append(Spacer(1, 0.1*inch))
    elements.append(Paragraph("3. _" + "_" * 75, body_style))
    
    elements.append(PageBreak())
    
    # ============== PAGE 9: COMMITMENT AND RESOURCES ==============
    elements.append(Paragraph("SECTION 7: YOUR COMMITMENT TO ACTION", heading_style))
    
    section7_text = """
    <b>7.1 Personal Commitment Statement</b><br/>
    Awareness without action is insufficient. Use this space to articulate your personal 
    commitment to creating more inclusive spaces.<br/><br/>
    
    <b>My Commitment:</b>
    """
    
    elements.append(Paragraph(section7_text, body_style))
    
    # Commitment template
    commitment_prompts = [
        "One behavior I will start doing:",
        "",
        "One behavior I will stop doing:",
        "",
        "One conversation I will initiate:",
        "",
        "How I will hold myself accountable:",
        ""
    ]
    
    for prompt in commitment_prompts:
        if prompt:
            elements.append(Spacer(1, 0.15*inch))
            elements.append(Paragraph(f"<b>{prompt}</b>", bullet_style))
        elements.append(Paragraph("_" * 80, body_style))
    
    elements.append(Spacer(1, 0.4*inch))
    
    # Resources section
    resources_text = """
    <b>7.2 Additional Resources</b><br/><br/>
    
    <b>Recommended Reading:</b><br/>
    • "Microaggressions in Everyday Life" by Derald Wing Sue<br/>
    • "So You Want to Talk About Race" by Ijeoma Oluo<br/>
    • "How to Be an Antiracist" by Ibram X. Kendi<br/>
    • "White Fragility" by Robin DiAngelo<br/><br/>
    
    <b>LLI Consulting Group Services:</b><br/>
    • Customized microaggression awareness training<br/>
    • Organizational culture assessments<br/>
    • Leadership coaching and development<br/>
    • Implementation support and accountability systems<br/><br/>
    
    <b>Contact Us:</b><br/>
    Website: www.lliconsultinggroup.com<br/>
    Email: info@lliconsultinggroup.com<br/><br/>
    
    <b>Closing Reflection:</b><br/>
    Creating inclusive environments is ongoing work. This workbook is a starting point, 
    not a destination. Continue to listen, continue to learn, and most importantly—continue 
    to implement what you've learned into daily practice.
    """
    
    elements.append(Paragraph(resources_text, body_style))
    
    elements.append(Spacer(1, 0.5*inch))
    
    # Logo at bottom
    try:
        logo_bottom = Image("/home/user/webapp/lli-logo.png", width=1.5*inch, height=1.5*inch)
        logo_bottom.hAlign = 'CENTER'
        elements.append(logo_bottom)
    except:
        pass
    
    elements.append(Paragraph("© LLI Consulting Group LLC", 
                             ParagraphStyle('Copyright', parent=body_style, fontSize=9, 
                                          alignment=TA_CENTER, textColor=colors.grey)))
    
    # Build PDF
    doc.build(elements, onFirstPage=create_header_footer, onLaterPages=create_header_footer)
    
    print(f"✅ Workbook created successfully: {filename}")
    return filename

if __name__ == "__main__":
    create_workbook()
