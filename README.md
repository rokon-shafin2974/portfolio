# Rokon Shafin — Portfolio

A dependency-free portfolio for **Md. Rokon Yeamony Shafin**, with a responsive editorial layout, project imagery and a clearer path from introduction to contact.

## What changed in V4
- Marked **ADS1115 Digital Ammeter** as a **completed project**.
- Kept **Arduino & Electronics Experiments** as an incomplete hardware track, separate from the completed ammeter.
- Kept **Personal Productivity App** and **Personal AI Assistant** clearly labeled as planned/not built.
- Added the supplied profile photo as `assets/profile.jpg`.
- Added the supplied project screenshots for **Analysis Studio** and **Huffman Hide & Compress**.
- Added screenshot galleries to project case-study modals.
- Added screenshot previews to project cards when available.
- Added a one-page A4 CV with aligned two-column print styling and a matching downloadable PDF, including graphic design and college event experience.
- Rebuilt the website UI around a midnight, coral and blue visual identity, with a matching light theme and consistent responsive alignment.
- Simplified the navigation and removed the artificial loading screen and unused command shortcut.
- Removed the repeated live-demo section and placed live/source links directly on the filterable project cards.
- Added a browser-local Huffman lab: type a message, inspect byte codes, copy the encoded bitstream and decode it. Size comparisons clearly exclude tree and archive metadata.
- Replaced placeholder credential rows with the listed community activities; clarified completed-project and benchmark labels.
- Added a skip link, visible keyboard focus, live filter announcements, and Escape/focus handling for project details.

## Portfolio polish in this workspace
- Added a persistent, responsive CV download in the header and hero, pointing to the supplied one-page CV PDF.
- Added a reading-progress indicator and active-section styling to primary navigation; the mobile menu now closes on Escape, outside click, and navigation.
- Corrected the footer CV path and removed the download link to a Biodata PDF that was not included in the archive. The printable Biodata page remains available.
- Increased supporting text sizes throughout the page, including project cards, skills, labels, controls and mobile text, while keeping decorative code labels compact.
- Prepared the Video CV section for either a hosted YouTube link or a local video file without changing its coming-soon state. Set `data-video-url` on `#videoCv` in `index.html` to a YouTube URL, or set `data-video-src` to a relative path for a locally hosted file. A hosted link uses YouTube's privacy-enhanced embed player.

## Run
Open `index.html` directly, or use VS Code + Live Server.

## Included
- Responsive portfolio UI with light/dark themes
- Real live links for Huffman Hide & Compress and Analysis Studio
- Completed / incomplete / planned project status labels
- Project search and category filters
- Case-study modals with screenshot galleries
- GitHub live stats with offline fallback
- Copy-email action
- Gmail compose fallback
- Printable page
- Downloadable CV at `output/pdf/Rokon_Shafin_CV.pdf`
- Printable Biodata page at `biodata.html`
- Keyboard accessibility and reduced-motion support
- No framework/build step required

## Contact form behavior
The **Send message** button submits through the configured Formspree endpoint. **Open Gmail** provides a compose-window fallback. The site does not contain a mail service API key.

## Project links
- Huffman live: https://huffman-hide-shafin.onrender.com/#home
- Huffman source: https://github.com/rokon-shafin2974/huffman-hide-final
- Analysis Studio live: https://shafin-face-rater.onrender.com/login.html
- GitHub: https://github.com/rokon-shafin2974
- LinkedIn: https://www.linkedin.com/in/md-rokon-yeamony-shafin-a51825408/

## Assets
- `assets/profile.jpg` — supplied profile photo
- `assets/projects/analysis-login.jpg`
- `assets/projects/analysis-admin-dashboard.jpg`
- `assets/projects/huffman-home.jpg`
- `assets/projects/huffman-visualizer.jpg`
- `assets/projects/huffman-encrypt.jpg`
- `assets/projects/huffman-secure-vault.jpg`
- `assets/projects/huffman-reports.jpg`
- `assets/projects/huffman-admin-accounts.jpg`
