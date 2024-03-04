const uploadDir = '../assets/data/uploads/';
let fileDescriptions = [];
const category = (typeof URLSearchParams !== 'undefined') ? new URLSearchParams(window.location.search).get('category') : '';
const categoryDir = uploadDir + category + '/';
if (category !== '' && fs.existsSync(categoryDir)) {
    const descriptionFilePath = categoryDir + 'descriptions.json';
    fileDescriptions = fs.existsSync(descriptionFilePath)
        ? JSON.parse(fs.readFileSync(descriptionFilePath, 'utf8')) || []
        : [];
}
const uploadedFiles = fs.existsSync(categoryDir) ? fs.readdirSync(categoryDir) : [];
const filesToDisplay = uploadedFiles.filter(file => file !== '.' && file !== '..');

