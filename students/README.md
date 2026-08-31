# Lab member photos

Upload member photos to this `students/` folder at the repository root, beside `lab.html`.
The page already points to these exact filenames (lowercase, with hyphens):

| Member | Photo filename |
| --- | --- |
| Avinash Reddy | `avinash-reddy.jpg` |
| Jivjot Singh | `jivjot-singh.jpg` |
| Anirudh Narayan | `anirudh-narayan.jpg` |
| Timothy Mcallister | `timothy-mcallister.jpg` |
| Adeel Yousuf | `adeel-yousuf.jpg` |
| Prashant Trivedi | `prashant-trivedi.jpg` |
| Utsav Singh | `utsav-singh.jpg` |

Square portraits with the face centered work best; 400 × 400 pixels or larger is a practical choice.
Save or export the actual image as JPEG (`.jpg`). If using `.png`, `.webp`, or `.jpeg`, update that member's `src` in `lab.html` to match; do not just rename a file extension.

Until a photo is uploaded, the member's initials appear in its place. After the photo is committed to the published branch and the site deploys, refresh the page to display it. No HTML change is needed when using the exact filenames above.

To add another member, duplicate a complete `<li class="person person-with-photo">` block in `lab.html` and update the name, role, links, initials, image path, and image alt text.
