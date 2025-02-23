import memories from "../../assets/projects/mymemories/mymemories.png";
import assignofast from "../../assets/projects/assignofast/assignofast.png";
import redicli from "../../assets/projects/redicli/redicli.png";
import redicli1 from "../../assets/projects/redicli/redicli1.png";
import redicli2 from "../../assets/projects/redicli/redicli2.png";
import redicli3 from "../../assets/projects/redicli/redicli3.png";
import redicli4 from "../../assets/projects/redicli/redicli4.png";
import assignofast1 from "../../assets/projects/assignofast/assignofast1.jpg";
import assignofast2 from "../../assets/projects/assignofast/assignofast2.jpg";
import assignofast3 from "../../assets/projects/assignofast/assignofast3.jpg";
import assignofast4 from "../../assets/projects/assignofast/assignofast4.jpg";
const projects = [
    {
      id: "redicli",
      name: "RediCLI",  
      tech: "GoLang, Redis, tview, go-redis, fuzzysearch, websocket",
      description: "RediCLI is a powerful terminal-based CLI tool for optimizing Redis performance and managing databases efficiently. Built with Go, it features an interactive TUI, command auto-completion, real-time analytics, and advanced key management with TTL support. It enables seamless data import/export, multi-instance connection handling, and an intuitive color-coded interface for better usability. RediCLI enhances Redis administration with fast execution, efficient filtering, and streamlined database operations.",
      image: redicli,
      images: [redicli1, redicli2, redicli3, redicli4],
      github: "https://github.com/Amrit02102004/RediCLI",
      demo_video: "https://youtu.be/example-demo",
      installation: "sudo snap install redicli --edge",
      features: [
        "Interactive terminal interface",
        "Command auto-completion and suggestions",
        "Built-in analytics dashboard",
        "Import/Export data from CSV and XLSX files",
        "Advanced key management with TTL support",
        "Connection management for multiple Redis instances",
        "Color-coded interface for better readability"
      ],
      commands: {
        Basic: [
          "get <key> - Retrieve the value of a key",
          "set <key> <value> - Set the string value of a key",
          "del <key> - Delete a key",
          "keys <pattern> - Find all keys matching a pattern",
          "ttl <key> - Get the time to live for a key",
          "expire <key> <seconds> - Set a key's time to live in seconds"
        ],
        Advanced: [
          "key filter set - Open form to set a key with TTL in milliseconds",
          "key filter update - Open form to update a key with KEEPTTL option",
          "flushall - Delete all keys (use with caution)",
          "see analytics - Open analytics dashboard in browser"
        ],
        Data: [
          "import - Import data from CSV/XLSX file",
          "export - Export data to CSV file",
          "import ./path/to/file.csv - Direct import from file path",
          "export ./path/to/file.csv - Direct export to file path"
        ],
        Connection: [
          "add connection - Add and connect to a new Redis instance",
          "view all connections - List all saved Redis connections",
          "connect <name> - Connect to a saved Redis connection",
          "del connection <name> - Delete a specific saved connection",
          "del all connections - Delete all saved connections"
        ],
        Interface: [
          "clear all - Clear console and logs screen",
          "clear logs - Clear logs screen",
          "clear display - Clear display screen",
          "help - Display help information",
          "quit - Exit RediCLI"
        ]
      },
      shortcuts: [
        "Tab - Cycle through command suggestions",
        "Up/Down Arrows - Navigate command history",
        "Enter - Execute command"
      ],
      performance: "Optimized for fast execution, low-latency Redis interactions, and real-time analytics.",
      year: 2025,
      duration: "48 HOURS",
    },
    {
      id: "assignofast",
      name: "AssignoFast",
      tech: "Flutter, Node.js, Firebase, SQLite, Kotlin, Swift",
      description: "AssignoFast is a smart assignment management app for students, designed to sync assignment data and timetables from Firebase while supporting offline access using SQLite. Built with Flutter, it features an intuitive UI/UX, optimized performance, and smart notifications to help students stay on track with deadlines. The app also includes a Kotlin-based Android widget for quick timetable updates and a filtering system for easy task management.",
      image: assignofast,
      images: [assignofast1,assignofast2,assignofast3,assignofast4],
      demo_video: "https://youtu.be/example-demo",
      features: [
        "Sync assignments from backend and store offline using SQLite",
        "Add notes to assignments for better tracking",
        "View assignments offline without an internet connection",
        "Mark assignments as completed using a slider",
        "Smart notifications for assignment reminders",
        "Create personal tasks for better organization",
        "Edit and delete personal tasks as needed",
        "Receive notifications for personal task reminders",
        "Stored locally using SQLite (no backend sync)",
        "Sync timetable from backend and store offline using SQLite",
        "Kotlin and Swift-based widget for quick timetable updates on the homescreen",
        "Smart notifications for upcoming classes and events",
        "Optimized performance with reduced sync time",
        "Refined UI/UX for an intuitive experience",
        "Filter and search assignments easily",
        "Track pending, completed, and upcoming assignments",
        "Auto-sync with minimal battery and data usage"
      ],            
      performance: "Optimized for low-latency data sync, offline access, and battery efficiency.",
      year: 2025,
      duration: "2 Months",
      website: "https://assignofast.ieeecsvit.com",
      appstore: "https://apps.apple.com/gb/app/assignofast/id6736854512",
      webstore: "https://chromewebstore.google.com/detail/assignofast/oenbdnejpfjgonicapclmcnhiglacaem",
      playstore: "https://play.google.com/store/apps/details?id=com.aryanjain.assignofast",
    },
    {
      id: "mymemories",
      name: "My Memories",
      tech: "Flutter, SQLite",
      description: "My Memories is a user-friendly application designed to help you preserve and organize your cherished memories. With features like hashtag-based search, picture attachments, and local data storage, it provides a seamless way to manage your personal memories securely and efficiently. The app allows users to add titles, dates, hashtags, and descriptions to memories, ensuring quick access and better organization. With secure offline storage using SQLite, My Memories keeps your data private without relying on cloud services.",
      image: memories,
      github: "https://github.com/krish-1604/My-Memories",
      features: [
        "Add titles, dates, hashtags, and detailed descriptions to memories",
        "Attach pictures to enhance stored moments",
        "Quickly search memories using hashtags",
        "Secure and private local storage with SQLite",
        "No internet required—works fully offline"
      ],
      demo_video: "Demo Video",
      download: "Download APK",
      year: 2024,
      duration: "3 Weeks",
    }
  ];
  
  export default projects;