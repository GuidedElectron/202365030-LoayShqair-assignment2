# AI Usage Report

## 1. Purpose of AI Use
AI was used as a support tool during the development of Assignment 2 to help me improve my Assignment 1 portfolio and align it with the new interactive requirements. The goal was not to let AI complete the assignment on its own, but to use it to speed up debugging, suggest implementation ideas, and improve the quality of the final submission.

This matches the assignment requirement that AI may be used for code generation, debugging, review, documentation, and UI/UX suggestions, as long as the student understands the result and improves it where necessary. The assignment also explicitly requires a documented report at `docs/ai-usage-report.md`. 

## 2. AI Tool(s) Used
- **ChatGPT**

I used ChatGPT mainly as a programming assistant and reviewer. I did not use AI as a replacement for learning or decision-making. Instead, I used it to:
- compare my Assignment 1 portfolio against the Assignment 2 instructions
- identify missing features relative to the brief
- suggest interactive portfolio features that would be useful rather than decorative
- revise HTML, CSS, and JavaScript structure
- improve wording in documentation files
- help package the project into the requested folder structure

## 3. Tasks Where AI Helped
### a) Requirement Analysis
I asked AI to compare my existing Assignment 1 website with the Assignment 2 instructions and identify what was already acceptable and what still needed improvement.

This was useful because the assignment requires:
- at least one dynamic feature based on user interaction
- at least one data-handling feature
- at least one animation or transition
- user feedback and error handling
- documentation of AI usage

AI helped turn the written brief into a concrete checklist I could implement.

### b) Feature Planning
I used AI to decide which interactive feature would make the most sense for a portfolio website. Instead of adding something decorative, I chose a **live project search/filter** because it clearly satisfies the “dynamic content” requirement and is useful for a portfolio.

### c) Implementation Support
AI helped generate or refine parts of:
- the live project search logic in JavaScript
- theme toggle behavior using `localStorage`
- improved form validation and feedback messages
- empty-state behavior such as displaying a message when no projects match the search
- CSS transitions and hover effects
- file/folder reorganization so the final project follows the required structure

### d) Documentation Support
AI also helped draft documentation files such as the README, technical documentation, and the initial version of this report. I then reviewed and expanded them so they better reflect what was actually done.

## 4. Specific AI Contributions
The following are the main areas where AI-assisted suggestions influenced the final project:

### Dynamic Feature
AI suggested making the project section interactive through **live filtering while typing**. I accepted this idea because it directly matches one of the examples in the assignment brief and makes the portfolio easier to explore.

### Data Handling
AI suggested keeping the theme toggle and saving the selected theme using `localStorage`. This was a strong fit because the assignment accepts saving user preferences as a valid data-handling feature.

### User Feedback
AI helped improve the feedback shown to users in the contact form and in the project filtering section, especially when:
- the form is incomplete
- the form is submitted successfully
- the project search returns no matches

### Structure and Packaging
AI pointed out file path and folder organization issues and helped rebuild the project into the expected structure with `css/`, `js/`, `assets/images/`, and `docs/` folders.

## 5. What I Changed or Improved Myself
I did not submit raw AI output directly. I reviewed the suggestions and adjusted them so they fit my own project and the assignment rules.

Examples of my own decisions and modifications include:
- choosing which AI suggestions were relevant and rejecting ideas that were unnecessary
- keeping the site focused on a portfolio instead of adding unrelated features
- making sure the dynamic feature was useful and not only visual
- checking that the project still reflected my own content, projects, and structure
- revising documentation so it is more specific and transparent
- making sure the final submission follows the required folder structure

In other words, AI produced suggestions, but I made the decisions about what to keep, what to remove, and how to adapt the final version.

## 6. Understanding of the AI Output
I understand the main ideas behind the AI-assisted code and changes that were included in the project.

### JavaScript Understanding
I understand that:
- the live search works by listening to user input, reading the search text, and comparing it to project titles/descriptions
- matching project cards stay visible while non-matching cards are hidden
- an empty-state message should appear when nothing matches the search
- the theme toggle changes a class on the document and saves the selected theme in `localStorage`
- the form validation checks whether required fields are filled before showing a confirmation message

### CSS Understanding
I understand that:
- transitions and hover effects improve interaction feedback
- responsive layout rules help the site work on different screen sizes
- light and dark theme styles are controlled through CSS selectors tied to the applied theme class

### HTML Understanding
I understand that:
- the page structure is divided into clear sections such as About, Projects, and Contact
- semantic elements like `section`, `article`, `form`, and headings improve organization and readability
- the folder structure matters because broken paths can cause CSS, JS, or images not to load correctly

## 7. How AI Supported Learning
AI was helpful because it reduced the time spent guessing what the assignment wanted and allowed me to focus more on implementation decisions.

It supported my learning by helping me:
- translate rubric language into technical tasks
- understand how dynamic behavior can be added with JavaScript
- see how `localStorage` can be used in a practical way
- think more clearly about user feedback and empty states
- improve documentation quality rather than treating documentation as an afterthought

The most useful part was not just getting code suggestions, but understanding *why* certain features better satisfied the assignment requirements.

## 8. Verification and Review Process
To avoid depending blindly on AI, I reviewed the results after each major suggestion.

My review process included:
- checking whether each suggested feature actually matched the assignment brief
- confirming that file references and folder paths were correct
- ensuring the selected features were appropriate for a portfolio site
- making sure the final output remained simple, functional, and understandable
- revising generic documentation into more assignment-specific explanations

This review step was important because AI suggestions can be correct in general but still unsuitable for a specific assignment.

## 9. Limitations of AI Use
AI was useful, but it also had limitations.

For example:
- some suggestions were too generic at first
- documentation drafts needed more detail to be rubric-aligned
- packaging and project structure still needed manual checking
- AI can suggest valid code that is not the best fit for the exact portfolio content

Because of that, I treated AI as a helper, not as an authority.

## 10. Academic Integrity and Transparency
I used AI in a way that is allowed by the assignment. The assignment permits AI-assisted tools but requires transparency, understanding, and improvement of AI-generated output.

I confirm that:
- AI was used only as a support tool
- I reviewed and adapted the generated suggestions
- I understand the final implementation at a functional level
- I did not intentionally submit unmodified AI output without review
- this report is included to document the process honestly

## 11. Reflection
Overall, AI improved the efficiency and quality of my workflow, especially in requirement analysis, implementation planning, debugging support, and documentation drafting. The most valuable contribution was helping me connect the rubric to actual implementation choices.

Rather than replacing my work, AI helped me refine it. The final project still required my own judgment, checking, and revision to make sure the portfolio remained appropriate, functional, and aligned with the assignment expectations.
