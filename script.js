const resources = {
    overview: {
        title: "Come Follow Me Study Resources",
        content: "Select a resource from the menu to learn how to use it for your Come Follow Me study.",
        actions: []
    },
    suno: {
        title: "Suno.com - Create Themed Songs",
        content: `
            <h3>How to Use Suno for Come Follow Me</h3>
            <ol class="list-decimal list-inside pl-4 space-y-2">
                <li>Visit <span class="font-semibold">Suno.com</span> and create an account if you don't have one.</li>
                <li>Read through the week's Come Follow Me lesson to identify key themes or stories.</li>
                <li>In Suno, click "Create New Song" and select a style that matches the lesson's mood.</li>
                <li>Write a prompt that includes specific themes, scriptures, or principles from the lesson. Example: <span class="italic">"Create an uplifting song about faith that references the story of Peter walking on water from Matthew 14."</span></li>
                <li>Use Suno's parameters to adjust tone, length, and musical style to match your teaching goals.</li>
                <li>Generate the song and download it for use in family study, Primary, or youth lessons.</li>
                <li>Consider creating songs that summarize key principles or tell scriptural stories in a memorable way.</li>
                <li>Share your songs with family members before the lesson to help them prepare.</li>
            </ol>
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <p class="font-semibold">Pro Tip:</p> 
                <p>Create songs that ask questions about the lesson material to encourage reflection during personal study.</p>
            </div>
        `,
        actions: [
            { text: "Visit Suno.com", url: "https://suno.ai", icon: "fa-music" },
            { text: "Create New Song", url: "https://suno.ai/create", icon: "fa-plus" }
        ]
    },
    institute: {
        title: "Institute Manuals - Scripture Insights",
        content: `
            <h3>How to Use Institute Manuals for Come Follow Me</h3>
            <ol class="list-decimal list-inside pl-4 space-y-2">
                <li>Access Institute manuals at <span class="font-semibold">ChurchofJesusChrist.org</span> under "Study" → "Manuals" → "Institute Manuals".</li>
                <li>Identify the book of scripture you're studying in Come Follow Me (e.g., New Testament, Book of Mormon).</li>
                <li>Select the corresponding Institute manual (e.g., "New Testament Student Manual").</li>
                <li>Use the table of contents or search function to find the specific chapters or verses you're studying.</li>
                <li>Read the commentary, which often includes:
                    <ul class="list-disc list-inside pl-6 mt-1">
                        <li>Historical context for the scriptures</li>
                        <li>Doctrinal explanations from General Authorities</li>
                        <li>Application questions to deepen understanding</li>
                    </ul>
                </li>
                <li>Take notes on insights that enhance your understanding of the weekly lesson.</li>
                <li>Use the "Questions to Ponder" sections to prepare discussion questions for family study.</li>
            </ol>
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <p class="font-semibold">Pro Tip:</p> 
                <p>Institute manuals often contain diagrams and charts not found in the Come Follow Me manual that can help visualize complex doctrines or historical events.</p>
            </div>
        `,
        actions: [
            { text: "Browse Institute Manuals", url: "https://www.churchofjesuschrist.org/study/manual/institute?lang=eng", icon: "fa-book" },
            { text: "Current Manual", url: "https://www.churchofjesuschrist.org/study/manual/new-testament-study-guide-for-home-study-seminary-students-2023?lang=eng", icon: "fa-bookmark" }
        ]
    },
    scriptures: {
        title: "Scriptures.byu.edu - General Authority Quotes",
        content: `
            <h3>How to Use Scriptures.byu.edu for Come Follow Me</h3>
            <ol class="list-decimal list-inside pl-4 space-y-2">
                <li>Visit <span class="font-semibold">Scriptures.byu.edu</span>.</li>
                <li>In the search bar, enter the scripture reference you're studying in Come Follow Me.</li>
                <li>Click on the reference when it appears in the results to see all General Authority quotes related to that verse.</li>
                <li>Browse the quotes, which are organized chronologically and include:
                    <ul class="list-disc list-inside pl-6 mt-1">
                        <li>Speaker's name and position</li>
                        <li>Conference talk or publication source</li>
                        <li>Date of the quote</li>
                        <li>Full context of how the scripture was used</li>
                    </ul>
                </li>
                <li>Use the filter options to narrow results by speaker, date range, or publication type.</li>
                <li>Save or print relevant quotes to incorporate into your lesson.</li>
                <li>Pay attention to how different Church leaders have applied the same scripture to various gospel principles over time.</li>
            </ol>
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <p class="font-semibold">Pro Tip:</p> 
                <p>Look for quotes from recent General Conference talks to help connect historical scriptures to contemporary issues and challenges.</p>
            </div>
        `,
        actions: [
            { text: "Search Scriptures", url: "https://scriptures.byu.edu", icon: "fa-search" },
            { text: "Browse by Book", url: "https://scriptures.byu.edu/#/browse", icon: "fa-book-open" }
        ]
    },
    notebooklm: {
        title: "NotebookLM - Create Podcasts",
        content: `
            <h3>How to Use NotebookLM for Come Follow Me Podcasts</h3>
            <ol class="list-decimal list-inside pl-4 space-y-2">
                <li>Go to <span class="font-semibold">NotebookLM.google.com</span> and sign in with your Google account.</li>
                <li>Create a new notebook dedicated to your Come Follow Me studies.</li>
                <li>Upload resources related to the current lesson:
                    <ul class="list-disc list-inside pl-6 mt-1">
                        <li>The Come Follow Me manual section</li>
                        <li>Relevant scripture passages</li>
                        <li>General Conference talks that relate to the lesson</li>
                        <li>Church magazine articles on the topic</li>
                    </ul>
                </li>
                <li>Use the "Create" function and select "Podcast script" as your output format.</li>
                <li>Specify the podcast length, target audience (family, youth, children), and key points to cover.</li>
                <li>Review and edit the generated script to ensure doctrinal accuracy and personal relevance.</li>
                <li>Use the script to record your own podcast, or have NotebookLM generate audio if that feature is available.</li>
                <li>Share the podcast with family members or class members to listen to during the week before your discussion.</li>
            </ol>
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <p class="font-semibold">Pro Tip:</p> 
                <p>Create separate, shorter podcasts for children with simplified language and engaging questions they can think about throughout the week.</p>
            </div>
        `,
        actions: [
            { text: "Open NotebookLM", url: "https://notebooklm.google.com", icon: "fa-notebook" },
            { text: "Create New Notebook", url: "https://notebooklm.google.com/create", icon: "fa-plus" }
        ]
    },
    interpreter: {
        title: "Interpreter Foundation Resources",
        content: `
            <h3>How to Use Interpreter Foundation Resources for Come Follow Me</h3>
            <ol class="list-decimal list-inside pl-4 space-y-2">
                <li>Visit <span class="font-semibold">interpreterfoundation.org</span> and navigate to the "Come Follow Me" section.</li>
                <li>Find the current week's lesson materials, which typically include:
                    <ul class="list-disc list-inside pl-6 mt-1">
                        <li>Scholarly articles examining historical context</li>
                        <li>Language studies on original Hebrew or Greek terms</li>
                        <li>Archaeological evidence related to scriptural events</li>
                        <li>Video roundtable discussions with scholars</li>
                    </ul>
                </li>
                <li>Listen to the weekly podcast featuring faithful scholars discussing insights on the assigned scriptures.</li>
                <li>Download the transcripts of podcasts if you prefer reading to listening.</li>
                <li>Explore the KnoWhy articles that address common questions related to the scriptures.</li>
                <li>Use the search function to find additional research on specific verses or topics from the lesson.</li>
                <li>Take notes on scholarly perspectives that add depth to your understanding.</li>
            </ol>
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                <p class="font-semibold">Pro Tip:</p> 
                <p>The Interpreter Foundation often provides geographical and cultural context that can help family members visualize and better understand scriptural events.</p>
            </div>
        `,
        actions: [
            { text: "Visit Interpreter Foundation", url: "https://interpreterfoundation.org", icon: "fa-globe" },
            { text: "Come Follow Me Resources", url: "https://interpreterfoundation.org/come-follow-me/", icon: "fa-book-reader" },
            { text: "Listen to Podcast", url: "https://interpreterfoundation.org/podcasts/", icon: "fa-podcast" }
        ]
    }
};

// Integration suggestions for each resource
const integrationSuggestions = {
    suno: [
        "Reference <span class='font-semibold'>Institute Manuals</span> for additional doctrinal context and explanations.",
        "Find relevant General Authority quotes using <span class='font-semibold'>scriptures.byu.edu</span> to support your insights.",
        "Create a <span class='font-semibold'>NotebookLM podcast</span> summarizing your findings to share with family or class members.",
        "Deepen your understanding with scholarly insights from the <span class='font-semibold'>Interpreter Foundation</span>."
    ],
    institute: [
        "Use <span class='font-semibold'>Suno</span> to create a song that reinforces key principles you discovered.",
        "Find relevant General Authority quotes using <span class='font-semibold'>scriptures.byu.edu</span> to support your insights.",
        "Create a <span class='font-semibold'>NotebookLM podcast</span> summarizing your findings to share with family or class members.",
        "Deepen your understanding with scholarly insights from the <span class='font-semibold'>Interpreter Foundation</span>."
    ],
    scriptures: [
        "Use <span class='font-semibold'>Suno</span> to create a song that reinforces key principles you discovered.",
        "Reference <span class='font-semibold'>Institute Manuals</span> for additional doctrinal context and explanations.",
        "Create a <span class='font-semibold'>NotebookLM podcast</span> summarizing your findings to share with family or class members.",
        "Deepen your understanding with scholarly insights from the <span class='font-semibold'>Interpreter Foundation</span>."
    ],
    notebooklm: [
        "Use <span class='font-semibold'>Suno</span> to create a song that reinforces key principles you discovered.",
        "Reference <span class='font-semibold'>Institute Manuals</span> for additional doctrinal context and explanations.",
        "Find relevant General Authority quotes using <span class='font-semibold'>scriptures.byu.edu</span> to support your insights.",
        "Deepen your understanding with scholarly insights from the <span class='font-semibold'>Interpreter Foundation</span>."
    ],
    interpreter: [
        "Use <span class='font-semibold'>Suno</span> to create a song that reinforces key principles you discovered.",
        "Reference <span class='font-semibold'>Institute Manuals</span> for additional doctrinal context and explanations.",
        "Find relevant General Authority quotes using <span class='font-semibold'>scriptures.byu.edu</span> to support your insights.",
        "Create a <span class='font-semibold'>NotebookLM podcast</span> summarizing your findings to share with family or class members."
    ]
};

// Get DOM elements
const resourceButtons = document.querySelectorAll('.resource-btn');
const resourceTitle = document.getElementById('resource-title');
const resourceContent = document.getElementById('resource-content');
const integrationSection = document.getElementById('integration-section');
const integrationList = document.getElementById('integration-list');
const actionButtons = document.getElementById('action-buttons');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Toggle mobile menu
function toggleMenu() {
    const isOpen = sidebar.classList.contains('translate-x-0');
    if (isOpen) {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    } else {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
    }
}

// Add menu toggle event listener
menuToggle.addEventListener('click', toggleMenu);

// Function to create action buttons
function updateActionButtons(resourceId) {
    actionButtons.innerHTML = '';
    const actions = resources[resourceId].actions;
    
    actions.forEach(action => {
        const button = document.createElement('a');
        button.href = action.url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.className = "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md";
        button.innerHTML = `
            <i class="fas ${action.icon} mr-2"></i>
            ${action.text}
        `;
        actionButtons.appendChild(button);
    });
}

// Update resource buttons click handler
resourceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const resourceId = button.getAttribute('data-resource');
        
        // Update active button styles
        resourceButtons.forEach(btn => {
            btn.classList.remove('bg-blue-100', 'text-blue-800');
            btn.classList.add('hover:bg-gray-100');
        });
        button.classList.add('bg-blue-100', 'text-blue-800');
        button.classList.remove('hover:bg-gray-100');
        
        // Update content
        resourceTitle.textContent = resources[resourceId].title;
        resourceContent.innerHTML = resources[resourceId].content;
        
        // Update action buttons
        updateActionButtons(resourceId);
        
        // Update integration section
        if (resourceId === 'overview') {
            integrationSection.classList.add('hidden');
            actionButtons.classList.add('hidden');
        } else {
            integrationSection.classList.remove('hidden');
            actionButtons.classList.remove('hidden');
            integrationList.innerHTML = integrationSuggestions[resourceId]
                .map(suggestion => `<li>${suggestion}</li>`)
                .join('');
        }

        // Close mobile menu after selection
        if (window.innerWidth < 1024) {
            toggleMenu();
        }
    });
}); 