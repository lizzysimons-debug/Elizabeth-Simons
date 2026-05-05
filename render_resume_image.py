from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "elizabeth-simons-resume.png"

WIDTH, HEIGHT = 1275, 2200
MARGIN_X = 90
y = 70

FONT_DIR = Path("C:/Windows/Fonts")


def font(name, size):
    return ImageFont.truetype(str(FONT_DIR / name), size)


title_font = font("arialbd.ttf", 52)
section_font = font("arialbd.ttf", 28)
body_font = font("arial.ttf", 23)
body_bold = font("arialbd.ttf", 23)
small_font = font("arial.ttf", 20)

image = Image.new("RGB", (WIDTH, HEIGHT), "#fbfaf2")
draw = ImageDraw.Draw(image)


def center(text, y_pos, font_obj, fill="#1f1f1f"):
    box = draw.textbbox((0, 0), text, font=font_obj)
    draw.text(((WIDTH - (box[2] - box[0])) / 2, y_pos), text, font=font_obj, fill=fill)


def section(title):
    global y
    y += 18
    draw.text((MARGIN_X, y), title.upper(), font=section_font, fill="#24314d")
    y += 38
    draw.line((MARGIN_X, y, WIDTH - MARGIN_X, y), fill="#d1908e", width=3)
    y += 14


def paragraph(text, font_obj=body_font, width=86, gap=7, bullet=False):
    global y
    prefix = "• " if bullet else ""
    for line in wrap(text, width=width):
        draw.text((MARGIN_X, y), prefix + line if prefix else line, font=font_obj, fill="#111111")
        prefix = "  " if bullet else ""
        y += font_obj.size + gap
    y += 2


def role(title, location):
    global y
    draw.text((MARGIN_X, y), title, font=body_bold, fill="#111111")
    box = draw.textbbox((0, 0), location, font=body_font)
    draw.text((WIDTH - MARGIN_X - (box[2] - box[0]), y), location, font=body_font, fill="#111111")
    y += 34


center("Elizabeth Simons", y, title_font, "#111111")
y += 66
center("Haddon Heights, NJ 08035  •  856-271-3166  •  lizzysimons@hopeworks.org", y, small_font)
y += 22

section("Professional Summary")
paragraph(
    "Responsible, reliable, and career-oriented professional with first-hand experience in social media management, "
    "event coordination, and youth mentorship accompanied by workfare training in career readiness at Hopeworks. "
    "Demonstrates strong communication skills, creativity, and accountability through teaching support roles, "
    "childcare experience, and nonprofit volunteer work.",
    width=96,
)

section("Skills")
paragraph(
    "Leadership • Communication • Teaching • Social Media Management • Time Management • Event Coordinating • "
    "Visual Design • Technology",
    width=100,
)

section("Work History")
role("Trainee, 02/2026 to Current", "Hopeworks - Camden, NJ")
paragraph("Completed workforce development training focused on professional communication, time management, and career readiness.", width=92, bullet=True)
paragraph("Developed foundational technical skills in web design and development, including HTML, CSS, and WordPress.", width=92, bullet=True)
paragraph("Participated in mock interviews, resume development, and public speaking workshops to improve professional confidence.", width=92, bullet=True)
paragraph("Applied feedback from supervisors to continuously improve technical work and professional presentation.", width=92, bullet=True)
paragraph("Maintained strong attendance and accountability in a fast-paced, performance-based training environment.", width=92, bullet=True)
paragraph("Built and presented projects demonstrating problem-solving, attention to detail, and creative thinking.", width=92, bullet=True)

role("Volunteer, 01/2023 to Current", "Jackson's Wish - Haddon Heights, NJ")
paragraph("Managed and grew the organization's Instagram account by creating engaging content, writing captions, and maintaining a consistent posting schedule.", width=92, bullet=True)
paragraph("Planned and coordinated fundraising events, assisting with logistics, outreach, and volunteer support.", width=92, bullet=True)

role("Teaching Assistant Volunteer, 06/2023 to 08/2025", "SamCam Dance Studio - Haddon Heights, NJ")
paragraph("Assisted lead instructor in teaching weekly dance classes to young children, helping students learn choreography and foundational techniques.", width=92, bullet=True)
paragraph("Supported the planning and execution of summer dance camps, including organizing activities, preparing materials, and supervising participants.", width=92, bullet=True)
paragraph("Helped manage classroom behavior and maintain a safe, structured, and positive learning environment.", width=92, bullet=True)

role("Summer Babysitter, 06/2024 to 08/2024", "Self Employed - Haddon Heights, NJ")
paragraph("Provided full-time summer childcare for a 4-year-old, ensuring a safe, structured, and engaging environment.", width=92, bullet=True)
paragraph("Developed and led daily educational activities focused on letter recognition, number skills, and early literacy to prepare child for kindergarten.", width=92, bullet=True)
paragraph("Created age-appropriate learning games and hands-on exercises to maintain engagement while reinforcing foundational academic concepts.", width=92, bullet=True)
paragraph("Maintained open communication with parents regarding daily progress, milestones, and developmental growth.", width=92, bullet=True)
paragraph("Encouraged social, emotional, and communication skills through interactive play and guided activities.", width=92, bullet=True)

section("Education")
paragraph("The Helms Academy - Stratford, NJ", font_obj=body_bold, width=92)
paragraph("Future Business Leaders of America - Student Council", width=92)

image.save(OUT)
print(OUT)
