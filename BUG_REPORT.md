# 🐞 Bug Report — Sahil Portfolio Website

**Project Name:** Sahil Portfolio  
**Live URL:** https://sahil-basra-portfolio.vercel.app  
**Reported By:** Sahil Basra  
**Date:** 24/12/2025
**Environment:**  
- Browser: Chrome / Firefox / Safari  
- Device: Desktop / Mobile  
- OS: Windows / macOS  

---

<!-- ## 🧩 Bug # Sample -->

**Bug Title:**  
(Short and clear title)

**Module / Section:**  
(Hero / Navbar / About / Skills / Projects / Thoughts / Contact / Footer)

**Severity:**  
Low / Medium / High / Critical

**Priority:**  
Low / Medium / High

**Description:**  
(Clear explanation of the issue)

**Steps to Reproduce:**  
1. Open the website  
2. Navigate to _____  
3. Click / Scroll / Hover _____  

**Expected Result:**  
(What should happen)

**Actual Result:**  
(What is happening instead)

**Screenshots / Evidence:**  
(Attach screenshot if available)

**Status:**  
<!-- Open / Fixed / In Progress -->
------------------------------------------------------------------------------------------# 🐞 Bug 1
Bug ID: HERO-001
Hero|| Navigation Bar not hiding on scroll

Module / Section:  
(Hero / Navbar /)

Steps to Reproduce:  
1. Open the website
2. Navigate to Home Page

Now scroll the website down to Bottom

Expected Result:  
Nav bar should hide while scrolling down and 

Actual Result:  
Navbar is visible throughtout the scroll to bottom

Severity:  
Medium
------------------------------------------------------------------------------------------

# 🐞 Bug 2
Hero|| Profile Picture card not aligned properly

Bug ID: HERO-002

Module / Section: 
Hero 

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. Look for profile picture card

Expected Result:
The profile picture card should be align to the right side of the page and and locked,
Only Half left side page should be scroll-abel and right side profile card should be locked

Actual Result:
The profile picture card is not locked and is complete section is scrolling to upside.

Severity:
Medium 
------------------------------------------------------------------------------------------
# 🐞 Bug 3
Hero|| Spacing Between the different sections components is not same
Bug ID: HERO-003

Module / Section:
 (website whole page)

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. While scrolling from top to bottom
4. check the spacing between the components

Expected Result:
There should be equal spacing between the sections 

Actual Result:
Spacing is not correct between the sections components

Severity:
 Low
------------------------------------------------------------------------------------------
# 🐞 Bug 4
Hero||Hero cards are not keyboard accessible
Bug ID: HERO-004

Title: Hero cards and arrow buttons are not accessible via keyboard

Severity: High (Accessibility)

Priority: High

Description:
The hero cards and arrow buttons cannot be accessed or triggered using keyboard navigation (Tab / Enter).

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. Load homepage
4. Press Tab key
5. Try to navigate to Hero cards

Actual Result:

Focus does not land on hero cards

Arrow buttons are not clearly focusable

Expected Result:

Arrow buttons should be focusable

Visible focus indicator should appear

Enter key should trigger navigation

Impact:

Fails basic accessibility standards

Keyboard-only users cannot navigate Hero CTAs
------------------------------------------------------------------------------------------
# 🐞 Bug 5
Hero||Arrow button has no accessible label

Bug ID: HERO-005

Title: Arrow button lacks accessible name

Severity: Medium

Priority: Medium

Description:

The arrow button (→) has no aria-label or descriptive text.

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. Load homepage
4. Inspect arrow button
5. Check accessibility attributes

Actual Result:

Screen readers will announce the button as “button” without context.

Expected Result:

Arrow buttons should have an accessible label like:

aria-label="Go to Experience section"

Impact:

Poor screen reader experience

Accessibility compliance issue
------------------------------------------------------------------------------------------
# 🐞 Bug 6
Hero||Profile card contrast inconsistency with dark theme
BBug ID: HERO-006

Title: Profile card background breaks dark theme consistency

Severity: Low

Priority: Low

Description:

The profile card uses a white background while the rest of the Hero section uses a dark theme.

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. Load homepage
4. Observe Hero section background
5. Observe profile card background

Actual Result:

Profile card visually stands out too strongly.

Expected Result:

Profile card should align with the overall dark theme (or have intentional contrast styling).

Impact:

Minor visual inconsistency

Slightly affects design cohesion
------------------------------------------------------------------------------------------
# 🐞 Bug 7
Hero||Social icons are non-interactive placeholders

Bug ID: HERO-007

Title: Social icons in Hero profile card are not clickable

Severity: Medium

Priority: Medium

Description:

Social icons (🌐 🐦 📸 ▶️) appear interactive but have no links or hover feedback.

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. Load homepage
4. Hover over social icons
5. Click on icons

Actual Result:

Nothing happens.

Expected Result:

Icons should link to actual social profiles

OR

Be clearly marked as placeholders

Impact:

Misleads recruiters

Reduces credibility
------------------------------------------------------------------------------------------
# 🐞 Bug 8
Hero||Hero cards do not indicate clickability clearly

Bug ID: HERO-008

Title: Hero cards lack clear clickable affordance

Severity: Low

Priority: Low

Description:

Although hero cards are interactive, there is no clear visual indicator (cursor change or full-card hover) suggesting clickability.

Steps to Reproduce:
1. Open the website
2. Navigate to Home Page
3. Load homepage
4. Hover over hero cards
5. Observe cursor behavior

Actual Result:

Click target is not immediately obvious.

Expected Result:

Cursor should change to pointer

Subtle hover state for entire card

Impact:

Minor usability issue

CTA discoverability reduced
------------------------------------------------------------------------------------------
# 🐞 Bug 9
Full Page|| Align the Profile card to the left side and All the sections to the right side
Bug ID: FULL_PAGE-001

Title: profile card and content sections not properly aligned

Severity: Medium

Priority: Medium

Description:

Although 

Steps to Reproduce:
1. Open the website
2. Load homepage
3. scroll the pages and check
4. 

Actual Result:

Every section is on different page 

Expected Result:

Every section should be aligned to right side vertically and profile card should be aligned 

Impact:

Minor usability issue

CTA discoverability reduced
------------------------------------------------------------------------------------------
# 🐞 Bug 10
Skills|| Uneven spacing between Skills section and adjacent sections

Bug ID: SKILLS-001

Severity: Low

Priority: Low

Description:

The vertical spacing between the Skills section and the previous/next sections appears inconsistent compared to other sections.

Steps to Reproduce:
1. Open the website
2. Load homepage
3. Scroll from About → Skills → Experience
4. Observe top and bottom spacing

Expected Result:

Consistent vertical spacing across all sections.

Actual Result:

Skills section spacing differs slightly, breaking visual consistency.

Impact:

Minor visual inconsistency; does not block functionality.
------------------------------------------------------------------------------------------
# 🐞 Bug 11
Experience || Experience cards lack clear visual separation
Bug ID: EXPERIENCE-001

Severity: Low

Priority: Medium

Description:

The Experience cards appear visually similar to the background, making it slightly difficult to distinguish individual experience entries at first glance.

Steps to Reproduce:

1. Open the website
2. Scroll to the Experience section
3. Observe the cards without interacting

Expected Result:

Each experience card should have clear visual separation through borders, background contrast, or spacing.

Actual Result:

Experience cards blend subtly with the background, reducing visual clarity.

Impact:

Affects readability and visual hierarchy; does not impact functionality.
------------------------------------------------------------------------------------------
# 🐞 Bug 12
Projects|| projects cards are not vertically aligned with other sections 
Bug ID: Project-001

Severity: Low

Priority: Medium

Description:

The Experience cards appear visually similar to the background, making it slightly difficult to distinguish individual experience entries at first glance.

Steps to Reproduce:

1. Open the website
2. Scroll to the Project section
3. Observe the cards without interacting
4.You can see the card are not aligned properly with the rest of the page

Expected Result:

Project cards to be aglined properly..

Actual Result:

Project cards are going out of the alignment as according to the rest of the page.

Impact:

Affects readability and visual hierarchy; does not impact functionality.
------------------------------------------------------------------------------------------
# 🐞 Bug 13
Tools|| Tools icons lack clear hover feedback
Bug ID: TOOLS-001

Severity: Low

Priority: Medium

Description:

Tool icons/cards in the Tools section do not provide a clearly noticeable hover feedback (lift, shadow, or highlight), making interaction feel less obvious.

Steps to Reproduce:
1. Open the website
2. Scroll to the Tools section
3. Hover over each tool item/icon one by one

Expected Result:

Each tool item should show a consistent and noticeable hover effect to indicate interactivity.

Actual Result:

Hover feedback is very subtle or not clearly visible on some tool items.

Impact:

Reduces perceived interactivity and polish, though functionality is not blocked.
------------------------------------------------------------------------------------------
# 🐞 Bug 14
Thoughts || No visual indicator when a Thought card is expanded
Bug ID: THOUGHTS-001

Severity: Low

Priority: Medium

Description:

When a Thought card is expanded, there is no clear visual distinction (background change or highlight) to indicate the expanded state.

Steps to Reproduce:
1. Open the website
2. Scroll to the Thoughts section
3. Click on any Thought card to expand it

Expected Result:
Expanded card should have a subtle visual indicator (slightly different background, border, or highlight).

Actual Result:
Expanded card looks almost identical to collapsed cards.

Impact:
Makes it harder for users to understand which card is currently expanded.
------------------------------------------------------------------------------------------
# 🐞 Bug 15
Contacts || Contact form fields do not show validation feedback

Bug ID: CONTACT-001

Severity: Medium

Priority: Medium

Description:
The Contact form allows submission without providing required input values (Name, Email, Message) and does not show any validation or error feedback to the user.

Steps to Reproduce:
1. Open the website
2. Scroll to the Contact section
3. Click the “Submit” button without filling any fields

Expected Result:
The form should validate required fields and display clear error messages (e.g., “Name is required”, “Invalid email format”).

Actual Result:
The form allows submission with empty fields and provides no validation feedback.

Impact:
Users may submit incomplete or invalid information, reducing form effectiveness and user experience.
------------------------------------------------------------------------------------------
# 🐞 Bug 16
Contacts|| Submit button has no hover or active feedback
Bug ID: CONTACT-002

Severity: Low

Priority: Low

Description:
The “Submit” button does not provide clear hover or active visual feedback to indicate interactivity.

Steps to Reproduce:
1. Open the website
2. Scroll to the contact section on the page
3. Hover over the “Submit” button
4. Click the button

Expected Result:
Button should show hover/active state (color change, shadow, or slight lift).

Actual Result:
Button appearance remains mostly unchanged on hover or click.

Impact:
Reduces perceived interactivity and polish of the form.
------------------------------------------------------------------------------------------
<!-- ---

Bug ID: SCRUM-17  
Severity: Medium  
Priority: Medium  

Description:

[Content taken directly from Jira Description field, including:]
- Description
- Steps to Reproduce
- Expected Result
- Actual Result
- Impact

--- -->

## 📝 Summary

- Total Bugs Logged: 17  
- High Severity Bugs: __  
- UI / UX Bugs: __  
- Functional Bugs: __  

---

**Reviewed By:**  
(Abhishek Pandit)

**Remarks:**  
(Any notes or feedback)

