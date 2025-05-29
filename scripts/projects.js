const TYPE_ANDROID =1, TYPE_WEB= 2;

let projects = [
    {
        key: "am-play",
        name: "AM Play",
        description: "AM Play is a feature-rich and interactive Android music player app designed to provide users with the ultimate music experience.",
        duration: "Android Studio + Java",
        repo: "https://github.com/mdalmamunDev/AM-Play",
        link: "projects/am-play/AM Play - MIN_8.2024.02.26.apk",
        type: TYPE_ANDROID,
        image: "am-play.png",
        about:`
            <p><strong>AM Play</strong> is a feature-rich and interactive Android music player app designed to provide users with the ultimate music experience. With cutting-edge features and a sleek, glassy UI, AM Play stands out as the go-to choice for music enthusiasts.</p>
            <h2 class="mt-3 font-bold text-base text-gray-200">Features</h2>
            <ul>
                <li class="mt-1"><strong class="text-gray-200">Most Advanced Tagging System:</strong> Organize your music library effortlessly with comprehensive tagging capabilities.</li>
                <li class="mt-1"><strong class="text-gray-200">Metadata Editor:</strong> Edit and enhance your music files' metadata with precision.</li>
                <li class="mt-1"><strong class="text-gray-200">Interactive, Beautiful, and Glassy UI:</strong> Enjoy a stunning visual design that supports dark mode.</li>
                <li class="mt-1"><strong class="text-gray-200">Search with Full Tagging Functionality:</strong> Find your music easily using advanced search options.</li>
                <li class="mt-1"><strong class="text-gray-200">Setting Controls:</strong> Customize your experience with a variety of settings.</li>
                <li class="mt-1"><strong class="text-gray-200">Play Bar Control:</strong> Manage playback conveniently from the play bar.</li>
                <li class="mt-1"><strong class="text-gray-200">And More:</strong> Explore additional features that enhance your music experience.</li>
            </ul>
        `,
        version: 'MIN_8.2024.02.26',
        tagline: 'Music player with advance tagging system',
        atts: ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg', 's6.jpg'],
        require: 'Android 7 or higher required',
        faq: [
            {
                qs: "Is AM Play free to use?",
                ans: "Yes, AM Play is a completely free music player for Android. There are no hidden charges, in-app purchases, or subscriptions. You can enjoy all its features without any cost."
            },
            {
                qs: "Does AM Play support all audio formats?",
                ans: "Yes, AM Play supports a wide range of popular and high-quality audio formats, including MP3, FLAC, WAV, AAC, OGG, and more. This ensures you can play almost any music file without needing external converters."
            },
            {
                qs: "Can I edit song metadata with AM Play?",
                ans: "Absolutely! AM Play features an advanced metadata editor that allows you to modify song details like title, artist, album, genre, track number, and more. This helps in organizing your music library efficiently."
            },
            {
                qs: "Does AM Play have a dark mode?",
                ans: "Yes, AM Play comes with a visually stunning, interactive, and glassy UI that includes a dark mode. This makes it comfortable for night-time listening and enhances the overall user experience."
            },
            {
                qs: "Can I search for songs using tags?",
                ans: "Yes! AM Play has a powerful tag-based search system. You can find your favorite songs quickly by searching with metadata such as artist name, album title, genre, or even custom tags you have set."
            },
            {
                qs: "Does AM Play require an internet connection?",
                ans: "No, AM Play is a completely offline music player. Once your music files are stored on your device, you don’t need an internet connection to play them, edit metadata, or use most features."
            },
            {
                qs: "Is there a way to customize the player settings?",
                ans: "Yes, AM Play offers extensive setting controls that allow you to personalize your experience. You can adjust playback options, enable or disable features, tweak the UI, and modify behavior to suit your needs."
            },
            {
                qs: "Can I control playback from the notification bar?",
                ans: "Yes, AM Play includes a play bar control that lets you manage playback directly from the notification bar. You can play, pause, skip tracks, and adjust the volume without opening the app."
            },
            {
                qs: "Does AM Play support playlists?",
                ans: "Yes, AM Play allows you to create and manage playlists easily. You can organize your favorite songs into custom playlists, edit them anytime, and enjoy seamless music playback."
            },
            {
                qs: "Can AM Play display album art and lyrics?",
                ans: "Yes, AM Play can display album art if the music file contains embedded artwork. Additionally, if the lyrics are stored in the file’s metadata, AM Play can show them while playing the song."
            }
        ],
        info: [
            { name: 'Package Name', value: 'com.example.amplaybyalmamun' },
            { name: 'License', value: 'Free' },
            { name: 'Op. System', value: 'Android' },
            { name: 'Music Playback', value: 'MediaPlayer API' },
            { name: 'UI & UX', value: 'RecyclerView, Glassy UI Effect, Dark Mode/AppCompat DayNight theme' },
        ],
    },
    {
        key: "auto-revive",
        name: "Auto Revive",
        description: "Auto Revive is a multi-role mobile app platform that connects customers with mechanics and tow truck drivers, with a powerful admin dashboard to monitor and manage all activity in real-time.",
        duration: "MERN Stack + Flutter",
        // repo: "https://github.com/mdalmamunDev/file-management-mern",
        link: "projects/auto-revive/AutoRevive-v1.apk",
        type: TYPE_ANDROID,
        image: "auto-revive.png",
        about: `
            <p><strong>Auto Revive</strong> is a smart car assistance mobile platform with four user roles: Customer, Mechanic, Tow Truck Driver, and Admin. Customers can easily request help from verified professionals, while the admin dashboard ensures seamless service monitoring and management.</p>
            <h2 class="mt-3 font-bold text-base text-gray-200">Key Features</h2>
            <ul>
                <li class="mt-1"><strong class="text-gray-200">Multi-Role Access:</strong> Four separate roles with unique access and functionality — customer, mechanic, tow truck, and admin.</li>
                <li class="mt-1"><strong class="text-gray-200">Service Requests:</strong> Customers can request roadside assistance or towing directly from their phone.</li>
                <li class="mt-1"><strong class="text-gray-200">Real-Time Tracking:</strong> Track the location and progress of requested services.</li>
                <li class="mt-1"><strong class="text-gray-200">Admin Dashboard:</strong> Manage users, payments, and monitor platform activity through a web-based admin panel.</li>
                <li class="mt-1"><strong class="text-gray-200">Secure Payments:</strong> Integrated payment gateway for secure transactions and refunds.</li>
                <li class="mt-1"><strong class="text-gray-200">Notifications & Status Updates:</strong> Keep users informed with real-time updates and alerts.</li>
            </ul>
        `,
        version: 'v1.0.0',
        tagline: 'All-in-one car service platform with real-time support',
        atts: ['auto-revive.png', 's1.png', 's2.png', 's3.png', 's4.png', 's5.png'],
        require: 'Android 8 or higher required',
        faq: [
            {
                qs: "What roles are supported in Auto Revive?",
                ans: "Auto Revive supports four roles: Customer, Mechanic, Tow Truck Driver, and Admin — each with dedicated features and responsibilities."
            },
            {
                qs: "Is Auto Revive available for free?",
                ans: "Yes, Auto Revive is free to use for customers. Certain features for mechanics or tow providers may require verification or approval by admin."
            },
            {
                qs: "Can I track my service provider?",
                ans: "Yes, real-time tracking is available once your request is accepted. You can view the current location of your mechanic or tow truck."
            },
            {
                qs: "How can admins manage users?",
                ans: "Admins have full control via a web dashboard — allowing them to activate, deactivate users, issue refunds, and monitor platform activity."
            },
            {
                qs: "Is there any support for payment refund?",
                ans: "Yes, refunds can be processed manually by the admin from the dashboard based on service issues or cancellations."
            },
            {
                qs: "Do service providers get notified of new jobs?",
                ans: "Yes, mechanics and tow trucks receive real-time notifications for incoming service requests, including location and customer details."
            }
        ],
        info: [
            { name: 'Frontend', value: 'Flutter (Cross-platform mobile app)' },
            { name: 'Backend', value: 'Node.js, Express.js, MongoDB (MERN Stack)' },
            { name: 'Admin Panel', value: 'React + Material UI' },
            { name: 'Payment Gateway', value: 'Stripe or Razorpay integration' },
            { name: 'Tracking System', value: 'Google Maps API, Geolocation Services' }
        ],
    },
    {
        key: "file-manager",
        name: "File Manager",
        description: "A full-stack file management application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to upload, download, and organize files efficiently.",
        duration: "MERN Stack",
        repo: "https://github.com/mdalmamunDev/file-management-mern",
        type: TYPE_WEB,
        image: "file-manager.png"
    },
    {
        key: "skill-syntax",
        name: "Online Course Management (SkillSyntax)",
        description: "A complete course management system with course creation and enrollment.",
        duration: "Collaborative Project",
        repo: "https://github.com/mad-programmers3/skill-syntax",
        link: "",
        type: TYPE_WEB,
        image: "skill-syntax.png"
    },
    {
        key: "am-play-web",
        name: "AM Play Web",
        description: "Web based music player with advance tagging system.",
        duration: "Vue.js",
        repo: "https://github.com/mdalmamunDev/AM-Play-Web",
        link: "https://mdalmamundev.github.io/AM-Play-Web",
        type: TYPE_WEB,
        image: "am-play-web.png"
    },
    {
        key: "time-bridge",
        name: "Time Bridge",
        description: "Time Bridge is a Vue.js app that calculates time differences with live updates, preset bookmarks, and a responsive, animated Tailwind CSS-based interface for seamless user interaction.",
        duration: "Vue.js",
        repo: "https://github.com/mdalmamunDev/TimeBridge",
        link: "https://mdalmamundev.github.io/TimeBridge",
        type: TYPE_WEB,
        image: "time-bridge.png"
    },
    {
        key: "tisi-aircraft",
        name: "TISI AirCraft",
        description: "Aircraft game by me and team.",
        duration: "Android Studio + Java",
        repo: "https://github.com/mdalmamunDev/TISI-AirCraft",
        link: "projects/tisi-aircraft/TISI AirCraft.apk",
        type: TYPE_ANDROID,
        image: "tisi-aircraft.jpg"
    },
    {
        key: "contact",
        name: "Contact",
        description: "Full functional Contact Android App(With All Basics: Add, Update, Delete, Making Call, SMS, Mail etc.)And of course with 👉Auto View Generator 🙂",
        duration: "Android Studio + Java",
        repo: "https://github.com/mdalmamunDev/contacts",
        link: "projects/contact/Contact.apk",
        type: TYPE_ANDROID,
        image: "contact.jpg"
    },
    {
        key: "fun-tan",
        name: "FunTan",
        description: "Product management system with modern UI.",
        duration: "Laravel + Vue.js",
        repo: "https://github.com/mdalmamunDev/fun-tan",
        link: "",
        type: TYPE_WEB,
        image: "fun-tan.png"
    },
    {
        key: "fashion-bazaar",
        name: "Fashion Bazaar",
        description: "E-commerce platform featuring user authentication and product management.",
        duration: "Laravel, Vue.js, MySQL",
        repo: "https://github.com/mdalmamunDev/Fashion_Bazaar",
        link: "",
        type: TYPE_WEB,
        image: "fashion-bazaar.png"
    },
    {
        key: "unit-converter",
        name: "Unit-Converter",
        description: "Convert anything anytime 🙂.",
        duration: "Android Studio + Java",
        repo: "https://github.com/mdalmamunDev/Unit-Converter",
        link: "projects/unit-converter/UnitConverter v3.x.apk",
        type: TYPE_ANDROID,
        image: ""
    },
    {
        key: "dream-dwell",
        name: "DreamDwell",
        description: "Hotel management app for managing bookings and services.",
        duration: "MERN Stack",
        repo: "https://github.com/mdalmamunDev/DreamDwell",
        link: "",
        type: TYPE_WEB,
        image: "dream-dwell.png"
    },
    {
        key: "programmers-villa",
        name: "ProgrammersVilla",
        description: "Platform for hiring and viewing programmers' details.",
        duration: "MERN Stack",
        repo: "https://github.com/mdalmamunDev/ProgrammersVilla",
        link: "",
        type: TYPE_WEB,
        image: "programmers-villa.png"
    }
];
