# Not Good Enough, the website, the repository

## The basics

- Install: `npm install`
- Start for development: `npm start`
- Deploy to notgoodpod.com: `npm run deploy`

# How to release an episode

## 1. Create the episode

- Under `content/episodes`, create an appropriately numbered folder, eg. `055`.
- Create an `index.md` file inside this folder.
- Copy the metadata block from the top of a previous episode into the new `index.md` file.
- Write the episode notes, in markdown format. Use h2s (`##`) for headings.

## Release to website

- Upload the episode mp3 file to PodBean.
    - Login to the dashboard.
    - Navigate to **Episodes** -> **Media Manager**.
    - Upload the file.
- Update the metadata block
    - **number:** This is the episode number
    - **title:** This is the title. Titles are formatted in "Sentence case", not "Title Case".
    - **date:** The episode's release date, in `yyyy-mm-dd` format.
    - **description:** A short, snappy description of what is in this week's episode.
    - **fileLink:** A link to the mp3 file uploaded to PodBean.
- Rename the folder in which the episode is contained to include a slug that reflects the title, eg. `055-disaster-artists`.
- Finish the episode notes.
- Commit the changes.
- Deploy, using `npm run deploy`.

## Release to podcast feeds

- In the PodBean dashboard, navigate to **Episodes** -> **Episode List**.
- Create a new episode. **Select a file from account**, and use the uploaded mp3.
- Episodes are titled in the format `Number — Title` (using an em-dash).
- Copy-paste the show notes from the website to the podcast notes. Make sure to include the Description at the top, and italicise it.